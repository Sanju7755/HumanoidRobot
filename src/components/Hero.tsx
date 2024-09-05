"use client"
import React from "react"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { Vortex } from "./ui/vortex"

function Hero() {


    const words = `Enhancing customer satisfaction with a robot that speaks, listens, and understands.`
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full sm:px-10"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center sm:pt-10 pt-16">
          <TextGenerateEffect words={words}/>
        </h2>
        <p className="text-3xl shadow-md font-semibold md:text-3xl max-w-xl mt-6 text-center bg-gradient-to-t from-[#00c9ff] to-[#92fe9d] bg-clip-text text-transparent">
          Ultimate AI Business Solution
        </p>
       
      </Vortex>
    </div>
    )
}

export default Hero