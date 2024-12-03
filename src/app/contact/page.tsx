'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const words=[{
        text:"Contact"
    },
{
    text:"Information"
}]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
            {' '}
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                {' '}
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    Get in Touch with Us
                    We're here to help you explore the future of customer engagement.

                    Whether you're interested in learning more about our Androhumanoid robot, requesting a demo, or discussing how our technology can benefit your business, our team is ready to assist. We look forward to connecting with you!

                </p>
                {/* <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form> */}
            </div>
            <div>
            <TypewriterEffectSmooth className="justify-center  md:text-7xl" words={words}/>
            </div>
            <div className="max-w-lg mx-auto text-lg text-center bg-gradient-to-t from-[#e6e6fa] to-[#20b2aa] bg-clip-text text-transparent">
            <ul>
                <li>Phone: [Your Phone Number]</li>
                <li>Email: [Your Email Address]</li>
                <li>Address: [Your Business Address]</li>
                <li>Business Hours: Monday - Friday, 9 AM - 6 PM (Your Time Zone)</li>
            </ul>
            </div>
        </div>
    );
}

export default ContactUs;