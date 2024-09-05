'us client'
import React,{useEffect,useState} from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Features() {
    const testimonials = [
        {
          quote1:
            "Voice Communication: Ability to speak and understand natural language Facial expressions and gestures that mimic human emotions. Ability to copy and replicate different voices.Emotion",
          quote2:"Display: Facial expressions and gestures that mimic human emotions.",
          quote3:"Voice Imitation: Ability to copy and replicate different voices.",
          title: "Human-Like Interaction",
        },
        {
          quote1:
            "Personalized Interactions: Tailors conversations based on customer profiles and preferences.",
          quote2:"Interactive Q&A: Answers questions accurately and provides relevant information.",
          quote3:"Entertainment: Engages with customers through games, trivia, and other interactive content.",
          
          title: "Customer Engagement",
        },
        {
          quote1: "Data Collection & Analysis: Gathers customer details and feedback for business insights.",
          quote2:"Payment Processing: Facilitates seamless payment transactions.",
          quote3:"Competitor Analysis: Monitors competitors and provides actionable insights.",
          title: "Business Integration",
        },
        {
          quote1:
            "Content Generation: Automatically creates marketing content based on customer interactions.",
            quote2:"Targeted Outreach: Identifies potential customers and communicates with them to boost conversion rates.",
            quote3:"Cost Reduction: Reduces marketing expenses through automated processes.",
          title: "Marketing & Sales Automation",
        },
        {
          quote1:
            "Data Encryption: Ensures secure handling of customer information.",
            quote2:"Compliance: Adheres to industry standards and regulations for data privacy.",
            quote3:"Data Anonymization: Automatically anonymizes sensitive customer data to prevent unauthorized access and ensure compliance with privacy regulations.",
          title: "Security & Privacy",
        },
      ];
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <h1 className="text-7xl font-bold bg-gradient-to-t from-black to-slate-300 bg-clip-text text-transparent">Features</h1>
      <InfiniteMovingCards className="mt-10"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  )
}

export default Features