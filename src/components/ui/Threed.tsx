'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '../../../node_modules/three-stdlib/controls/OrbitControls';
import { GLTF, GLTFLoader } from '../../../node_modules/three-stdlib/loaders/GLTFLoader'
import { DRACOLoader } from '../../../node_modules/three-stdlib/loaders/DRACOLoader'

interface ThreeSceneProps {
    theme: string; // 
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
        // renderer.setClearColor(theme==='dark' ? 0x000000 :0x1c1c1c);

        // Append renderer's DOM element to mountRef
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


        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        controls.minPolarAngle = Math.PI / 2; // radians
        controls.maxPolarAngle = Math.PI / 2; // radians


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
        vec3 color1 = vec3(0.29, 0.0, 0.51); // Top color (black)
        vec3 color2 = vec3(0.90, 0.90, 0.98); // Bottom color (light gray)
        vec3 color = mix(color1, color2, vUv.y);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

        const gradientMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            side: THREE.DoubleSide,
            depthWrite: false, // Prevent the gradient from affecting the depth buffer
        });

        // Create a large full-screen quad for the gradient background
        const geometry = new THREE.PlaneGeometry(2, 2);
        const gradientMesh = new THREE.Mesh(geometry, gradientMaterial);
        gradientMesh.renderOrder = -1; // Render the gradient first (behind everything)
        scene.add(gradientMesh);



        const draco = new DRACOLoader();
        draco.setDecoderPath('/jsm/libs/draco/');

        const loader = new GLTFLoader();
        loader.setDRACOLoader(draco);
        loader.load(
            'Michelle.glb',
            (gltf: GLTF) => {
                const model = gltf.scene
                model.scale.set(2, 2, 2); // Adjust scale if necessary
                model.position.set(0, -1.5, 0); // Adjust position if necessary

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
            render();
        }

        // const stats = new Stats();
        // if (mountRef.current) {
        //     mountRef.current.appendChild(stats.dom);
        // }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            render();

        }

        function render() {
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            if (renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement); // Ensure renderer is removed from mountRef
            }
            window.removeEventListener('resize', onWindowResize); // Clean up resize listener
            // if (stats.dom && mountRef.current?.contains(stats.dom)) {
            //     mountRef.current.removeChild(stats.dom); // Remove stats DOM element
            // }
        };
    }, []);

    return <div ref={mountRef} style={{
        width: '100vw',
        height: '100vh',
        background: theme === 'dark'
            ? 'linear-gradient(180deg, #000000, #434343)'
            : 'linear-gradient(180deg, #1c1c1c, #8e9eab)',
        position: 'relative',
    }} />;
}

export default Threed;
