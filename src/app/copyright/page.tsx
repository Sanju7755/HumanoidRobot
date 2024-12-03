import React from 'react'

function page() {
  return (
    <div className="bg-white dark:bg-black h-auto">
        <div className="text-4xl md:text-4xl sm:text-4xl text-slate-900 dark:text-slate-400 font-bold py-16 pt-32 px-4  text-center ">
            <h1>AndroHumanoid Privacy Policy</h1>
            <p className="text-gray-600 font-semibold text-lg my-2 px-12 lg:px-8">AndroHumanoid is committed to your privacy. Read our customer Privacy Policy for a clear explanation of how we collect, use, disclose, transfer, and store your information.</p>
            <span><hr></hr></span>
        </div>
        <div className="text-sm text-justify text-slate-900 dark:text-white px-12 pb-4">
        <ul>
            <li className="mb-2">
                <h1 className="text-lg font-bold">Introduction</h1>
                <p>This Privacy Policy outlines how Androhumanoid Robot collects, uses, and protects your personal information when you interact with our robot in various environments such as shopping malls, hotels, restaurants, and parks.</p>
            </li>
            <li className="mb-2">
                <h1 className="text-lg font-bold">Information We Collect</h1>
                <ul >
                    <li><b>Personal Information:</b> The Androhumanoid Robot may collect personal information such as your name, contact details, and payment information when you interact with it for services or transactions.</li>
                    <li><b>Interaction Data:</b> We collect data about your interactions with the robot, including voice commands and responses, to improve its functionality and user experience.</li>
                    <li><b>Usage Data:</b> Information about your usage of the robot, including time and frequency of interactions, is collected for analytical purposes.</li>
                </ul>
            </li>
            <li className="mb-2">
                <h1 className="text-lg font-bold">How We Use Your Information</h1>
                <ul>
                <li><b>Service Delivery:</b> To provide and improve the services offered by the Androhumanoid Robot, including processing transactions and responding to inquiries.</li>
                <li><b>Personalization:</b> To tailor interactions and enhance the overall user experience based on your preferences and behavior.</li>
                <li><b>Marketing:</b> To generate marketing content and strategies, if you have consented to receive such communications.</li>
                </ul>
            </li>
            <li className="mb-2">
                <h1 className="text-lg font-bold">Data Sharing</h1>
                <ul>
                    <li><b>Third-Party Services:</b> We may share your information with third-party service providers who assist us in operating the robot and delivering services. These parties are obligated to protect your data and use it only for the purposes specified.</li>
                    <li><b>Legal Requirements:</b> We may disclose your information if required to do so by law or in response to valid requests from legal authorities.</li>
                </ul>
            </li>
            <li>
                <h1 className="text-lg font-bold">Changes to This Policy</h1>
                <p>We may update this Privacy Policy from time to time. The revised policy will be posted on our website or communicated to you through appropriate channels. Your continued use of the Androhumanoid Robot signifies your acceptance of the updated policy.</p>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default page