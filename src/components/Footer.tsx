import Link from "next/link"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"
import { Span } from "next/dist/trace"


function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12  pb-0 ">
        <BackgroundGradientAnimation containerClassName="h-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 ">About</h2>
            <p className="mb-4">
            The Androhumanoid Robot is a state-of-the-art interactive assistant designed for environments like malls and hotels. With its advanced voice capabilities and expressive face, it engages customers, processes payments, and provides insightful marketing support, making it a valuable addition to any business.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
         
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>Phone: [Your Phone Number]</p>
                <p>Email: [Your Email Address]</p>
                <p>Address: [Your Business Address]</p>   
          </div>
          </div>
          <p className="text-center text-xs pt-8">Copyright © AndroHumanoid Robot. All rights reserved.</p>

          <div className="flex flex-row text-xs justify-center space-x-4 mt-4 pb-2 sm:text-left sm:pl-0">
            <Link href="/copyright">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms">
               Terms of use
            </Link>
          </div>
          </BackgroundGradientAnimation> 
      </footer>
    )
  }
  
  export default Footer