import { Link } from "react-router-dom";
import { Coffee, Home } from "lucide-react";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F4F3F0] to-[#E8E1D1] flex flex-col items-center justify-center px-6 text-center">
      {/* Animated Coffee Icon */}
      <div className="flex items-center justify-center bg-[#D2B48C]/20 p-6 rounded-full shadow-md mb-8 animate-bounce">
        <Coffee size={64} className="text-[#331A15]" />
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-rancho text-[#331A15] mb-4 tracking-wide">
        404 - Page Not Found
      </h1>

      <p className="text-[#1B1A1AB3] text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed raleway">
        Oops! Seems like you’ve wandered too far — maybe grab a cup of coffee
        and head back home ☕
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-[#D2B48C] text-[#331A15] px-6 py-3 rounded-xl font-semibold hover:bg-[#b68c65] transition-all duration-300 shadow-md"
        >
          <Home size={20} /> Back to Home
        </Link>

        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 border-2 border-[#D2B48C] text-[#331A15] px-6 py-3 rounded-xl font-semibold hover:bg-[#D2B48C] hover:text-[#331A15] transition-all duration-300 shadow-md"
        >
          Contact Us
        </Link>
      </div>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-[#D2B48C] my-12 rounded-full"></div>

      {/* Footer Note */}
      <p className="text-sm text-[#1B1A1A80] raleway">
        © {new Date().getFullYear()} Espresso Emporium — Crafted with ❤️ and
        Coffee
      </p>
    </section>
  );
};

export default ErrorPage;
