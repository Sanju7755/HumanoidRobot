"use client"
import React from 'react'
import Head from 'next/head'
import { HoverEffect } from '@/components/ui/card-hover-effect';

function page() {
  return (
    <div>
      <Head>
        <title>Androhumanoid Robot - Functions</title>
        <meta name="description" content="Explore the functions of the Androhumanoid robot, designed to engage, communicate, and interact in various environments." />
      </Head>

      <main className="bg-white text-gray-800">
        <section className="max-w-7xl mx-auto py-16 pt-32 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Androhumanoid Robot Functions
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Discover the innovative features that make the Androhumanoid robot the perfect companion for various environments.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div> 
        </section>
      </main>
    </div>
  )
}
export const projects = [
  {
    title: "Conversational Interaction",
    description:
      "The Androhumanoid robot is equipped with advanced speech capabilities, allowing it to engage in meaningful conversations with people. It can understand and respond to queries, providing accurate and helpful information in real-time.",
      link: "/functions",
  },
  {
    title: " Emotional Expression",
    description:
      " The robot features a digital face display that can show a wide range of emotions. This ability to express emotions makes interactions more relatable and human-like, enhancing the overall user experience.",
      link: "/functions",
  },
  {
    title: "Voice Mimicking",
    description:
      "One of the standout features of the Androhumanoid robot is its ability to mimic anyone's voice. This allows the robot to adapt its communication style, making interactions more personalized and engaging.",
      link: "/functions",
  },
  {
    title: "Real-Time Q&A",
    description:
      "The robot is designed to answer any questions posed by the people in front of it. Whether it's providing information about a product or guiding someone through a process, the Androhumanoid robot delivers instant and accurate responses.",
      link: "/functions",
  },
  {
    title: "Proximity Awareness",
    description:
      "The Androhumanoid robot is equipped with proximity sensors that help it detect the presence of people and objects in its surroundings. This awareness ensures that the robot can navigate safely and interact effectively in any environment.",
      link: "/functions",
  },
  {
    title: "Vision-Based Navigation",
    description:
      "With advanced vision sensors, the robot can perceive and analyze its surroundings. This capability allows it to move around with precision, avoiding obstacles and interacting with people in a seamless and natural manner.",
      link: "/functions",
  },
  {
    title: "Environmental Adaptability",
    description:
      "The robot is designed to function optimally in a variety of environments, including shopping malls, hotels, restaurants, parks, and more. Its adaptability ensures that it can provide consistent and valuable interactions across different settings.",
      link: "/functions",
  },
  {
    title: "Social Engagement",
    description:
      "The Androhumanoid robot excels at engaging with groups of people, making it ideal for public spaces. It can attract attention, initiate conversations, and provide information to multiple people simultaneously, enhancing customer interaction.",
      link: "/functions",
  },
  {
    title: "Customizable Interaction",
    description:
      "The robot's interaction capabilities can be customized to suit specific environments or tasks. Whether it's providing customer service, guiding visitors, or entertaining guests, the Androhumanoid robot can be tailored to meet the unique needs of any setting.",
      link: "/functions",
  },
];
export default page