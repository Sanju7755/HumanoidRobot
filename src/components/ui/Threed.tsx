'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../../../node_modules/three-stdlib/controls/OrbitControls';
import { GLTF, GLTFLoader } from '../../../node_modules/three-stdlib/loaders/GLTFLoader';
import { DRACOLoader } from '../../../node_modules/three-stdlib/loaders/DRACOLoader';

interface ThreeSceneProps {
    theme: string;
}

const Threed: React.FC<ThreeSceneProps> = ({ theme }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) {
            return;
        }

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // White light
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xff0000, 1.5, 100); // Red light with higher intensity and range
        pointLight.position.set(2, 3, 5); // Position of the point light
        scene.add(pointLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1.5); // White light with higher intensity
        spotLight.position.set(-10, 10, 10); // Position of the spot light
        spotLight.angle = Math.PI / 4; // Cone angle
        spotLight.penumbra = 0.1; // Softness of the shadow edges
        spotLight.decay = 2; // How quickly the light fades
        spotLight.distance = 200; // Maximum distance the light travels
        scene.add(spotLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;
        controls.enablePan = false;
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;

        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      varying vec2 vUv;
      void main() {
        vec3 color1 = vec3(0.29, 0.0, 0.51);
        vec3 color2 = vec3(0.90, 0.90, 0.98);
        vec3 color = mix(color1, color2, vUv.y);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

        const gradientMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            depthWrite: false,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const gradientMesh = new THREE.Mesh(geometry, gradientMaterial);
        gradientMesh.renderOrder = -1;
        scene.add(gradientMesh);

        const draco = new DRACOLoader();
        draco.setDecoderPath('/jsm/libs/draco/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(draco);
        loader.load(
            'Michelle.glb',
            (gltf: GLTF) => {
                const model = gltf.scene;
                model.position.set(0, -1.5, 0);

                // Scale based on the window size
                let scaleFactor = 1; // Default size for small screens
                if (window.innerWidth > 1200) {
                    scaleFactor = 2; // Reasonable size for large screens
                } else if (window.innerWidth >= 768) {
                    scaleFactor = 1.5; // Moderate size for medium screens
                } else {
                    scaleFactor = 0.8; // Reduced size for mobile screens
                }

                model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                model.traverse((child: THREE.Object3D) => {
                    if (child instanceof THREE.Mesh) {
                        const m = child;
                        m.receiveShadow = true;
                        m.castShadow = true;
                        if (m.geometry instanceof THREE.PlaneGeometry) {
                            scene.remove(m);
                        }
                    }
                    if (child instanceof THREE.Light) {
                        const l = child as THREE.SpotLight;
                        l.castShadow = true;
                        l.shadow.bias = -0.003;
                        l.shadow.mapSize.width = 2048;
                        l.shadow.mapSize.height = 2048;
                    }
                });

                scene.add(gltf.scene);
            },
            (xhr: ProgressEvent) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error: ErrorEvent) => {
                console.error('Error loading model:', error);
            }
        );

        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Recalculate scale factor on window resize
            let scaleFactor = 1;
            if (window.innerWidth > 1200) {
                scaleFactor = 2; // Reasonable size for large screens
            } else if (window.innerWidth >= 768) {
                scaleFactor = 2; // Moderate size for medium screens
            } else {
                scaleFactor = 0.8; // Reduced size for mobile screens
            }

            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.scale.set(scaleFactor, scaleFactor, scaleFactor);
                }
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            if (renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement); // Ensure renderer is removed from mountRef
            }
            window.removeEventListener('resize', onWindowResize); // Clean up resize listener
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100vw',
                height: '100vh',
                background: theme === 'dark'
                    ? 'linear-gradient(180deg, #000000, #434343)'
                    : 'linear-gradient(180deg, #1c1c1c, #8e9eab)',
                position: 'relative',
            }}
        />
    );
};

export default Threed;
