import React from 'react'

function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-10  px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About Shopping Store</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600">CartCraze</span> – your go-to destination for top-quality products across fashion, electronics, home essentials, and more. Our mission is to simplify online shopping by offering a seamless and reliable experience.
                </p>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>🛍 Wide range of high-quality products</li>
                        <li>🚚 Fast and reliable shipping</li>
                        <li>💳 Secure payments</li>
                        <li>📞 24/7 customer support</li>
                        <li>💼 Trusted by thousands of customers</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We believe that shopping should be simple, enjoyable, and affordable. Our team is constantly working to improve your experience and bring you the latest trends and innovations in the e-commerce space.
                    </p>
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} CartCraze. Built with ❤️ by the Jaskaran team.
                </div>
            </div>
        </div>
    )
}

export default About
