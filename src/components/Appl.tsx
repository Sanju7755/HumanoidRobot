"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FlipWords } from "./ui/flip-words";

export function Appl() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  const words=["HumanoidX","NeoDroid"]

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 sm:text-5xl dark:text-neutral-200 font-sans">
      <FlipWords words={words} />
      Robot
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
              <span className="font-bold bg-gradient-to-t from-[#87ceeb] to-[#003366] bg-clip-text text-transparent">
              Androhumanoid Robot: Revolutionizing Customer Engagement and Marketing
              </span>{" "}
              The Androhumanoid robot is a groundbreaking innovation designed to transform customer engagement and streamline marketing processes. It engages with individuals through sophisticated conversational capabilities, gathering essential details about their business and processing payments with ease. Once the robot collects this information, it transmits it to our server, where marketing materials such as videos, images, and banners are automatically generated with tailored captions. Customers have the opportunity to review and confirm these materials, ensuring they meet their expectations. Following approval, the robot conducts an in-depth analysis of the internet to identify competitors and target potential customers who engage with similar products. By filtering and extracting relevant social media contacts, the robot executes targeted mass communication campaigns with the generated content, effectively reaching and engaging the most promising leads. This advanced technology not only enhances operational efficiency but also provides personalized and impactful marketing solutions, making the Androhumanoid robot an invaluable asset for modern businesses.
            </p>
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Nova",
    title: "Engage. Evolve. Excel with AndroHumanoid",
    src: "/1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Skye",
    title: "Enhance your productivity.",
    src: "/2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Aura",
    title: "Smarter interactions, seamless experiences",
    src: "/3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Lumo",
    title: "Human touch, robotic precision",
    src: "/4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Blush",
    title: "Innovation starts with AI",
    src: "/5.jpg",
    content: <DummyContent />,
  },
  
];
export default Appl