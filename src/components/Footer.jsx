import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/more/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4F3F0] text-[#331A15] py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Espresso Emporium Logo"
              className="w-12 h-12 rounded-full"
            />
            <h2 className="text-3xl  font-semibold text-[#331A15]">
              Espresso Emporium
            </h2>
          </div>

          <p className="text-[#1B1A1AB3] raleway mb-6 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="bg-[#331A15] text-[#F5EDE0] p-2 rounded-full hover:bg-[#D2B48C] hover:text-[#331A15] transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-[#331A15] text-[#F5EDE0] p-2 rounded-full hover:bg-[#D2B48C] hover:text-[#331A15] transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="bg-[#331A15] text-[#F5EDE0] p-2 rounded-full hover:bg-[#D2B48C] hover:text-[#331A15] transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="bg-[#331A15] text-[#F5EDE0] p-2 rounded-full hover:bg-[#D2B48C] hover:text-[#331A15] transition"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Contact Info */}
          <h3 className="text-4xl font-medium font-rancho mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 raleway text-[16px] text-[#1B1A1AB3]">
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+88 01533 333 333</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <span>info@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} />{" "}
              <span>72, Wall Street, King Road, Dhaka</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-3xl  mb-6 text-[#331A15]">Connect with Us</h3>
          <form className="space-y-4 raleway">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white border border-[#331A15]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white border border-[#331A15]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-white border border-[#331A15]/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
            ></textarea>
            <button
              type="submit"
              className="border-2 border-[#331A15] text-[#331A15] font-medium px-6 py-2 rounded-full hover:bg-[#D2B48C] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-[#1B1A1AB3] text-sm border-t border-[#331A15]/10 pt-6">
        © {new Date().getFullYear()} Espresso Emporium — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
