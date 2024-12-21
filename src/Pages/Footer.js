import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6">
                {/* Footer top section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Logo or brand name */}
                    <div className="text-3xl font-bold mb-4 md:mb-0">
                        <span className="text-gray-200">GOOSHOP</span>
                    </div>

                    {/* Navigation links */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <a href="/" className="hover:text-yellow-500 transition duration-300">Home</a>
                        <a href="/about" className="hover:text-yellow-500 transition duration-300">About Us</a>
                        <a href="/services" className="hover:text-yellow-500 transition duration-300">Services</a>
                        <a href="/contact" className="hover:text-yellow-500 transition duration-300">Contact</a>
                    </div>

                    {/* Social media icons */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Footer bottom section */}
                <div className="border-t border-gray-700 pt-6">
                    <p className="text-center text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} GOOSHOP. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
