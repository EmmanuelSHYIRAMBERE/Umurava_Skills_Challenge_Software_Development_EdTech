import LogoImage from "../assets/bluelogo.webp";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={LogoImage} alt="Umurava Logo" className="w-32 h-20" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/challenge" className="text-gray-600 hover:text-gray-900">
              Challenge & Hackthons
            </a>
            <a href="/learning" className="text-gray-600 hover:text-gray-900">
              For Learning institutions
            </a>
            <a href="/about-us" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <a href="/contact-us" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
          </nav>

          {/* Join Button */}
          <div>
            <a
              href="/join"
              className="bg-[#020B2D] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
            >
              Join the Program
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
