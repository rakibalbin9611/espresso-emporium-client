import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#F7F3EE] text-[#3B2F2F] px-6 py-16 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-rancho mb-4 text-[#3B2F2F]">
          Contact <span className="text-[#C69C6D]">Espresso Emporium</span>
        </h1>
        <p className="raleway text-base md:text-lg text-[#3B2F2F]/80 leading-relaxed">
          If there's anything you'd like to get in touch with us about, please
          send your message using the form below and we will get back to you.
        </p>
        <a
          href="/faqs"
          className="text-[#C69C6D] raleway underline mt-2 inline-block font-semibold"
        >
          FAQs Page
        </a>
      </div>

      {/* Contact Form & Info */}
      <div className="w-full raleway max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-rancho mb-4 text-[#3B2F2F]">
            Get in Touch
          </h2>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#C69C6D] w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-[#3B2F2F]/80">
                123 Coffee Street, Espresso Avenue, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-[#C69C6D] w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-[#3B2F2F]/80">+880 1234 567 890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-[#C69C6D] w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-[#3B2F2F]/80">hello@espressoemporium.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-4 flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-[#C69C6D]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-[#C69C6D]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full border border-[#C69C6D]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300"
          />
          <select className="w-full border border-[#C69C6D]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300">
            <option value="">Please select a reason</option>
            <option value="order">Order Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <textarea
            rows="4"
            placeholder="Comment"
            className="w-full border border-[#C69C6D]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-32 bg-[#C69C6D] text-white font-semibold py-2 rounded-lg hover:bg-[#A87C55] transition-all duration-300 shadow-md"
          >
            Send
          </button>
        </form>
      </div>

      {/* Newsletter */}
      <div className="mt-12 w-full max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-[#3B2F2F]/80 font-raleway text-sm md:text-base">
          Subscribe to our email newsletter: Get 10% off your first order & be
          the first to know about new coffee releases, posts & cool things
        </p>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#C69C6D]/40 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#C69C6D]/30 focus:border-[#C69C6D] transition-all duration-300 w-full md:w-64"
          />
          <button className="bg-[#C69C6D] text-white px-4 py-2 rounded-lg hover:bg-[#A87C55] transition-all duration-300">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
