import React from "react";
import { Coffee } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4F3F0] to-[#EDE6DA] px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Coffee className="text-[#C69C6D] w-8 h-8" />
            <h1 className="text-3xl font-rancho text-[#3B2F2F]">
              Espresso <span className="text-[#C69C6D]">Emporium</span>
            </h1>
          </div>
          <p className="text-[#3B2F2F]/70 font-raleway text-base">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F] font-raleway">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-[#C69C6D]/40 focus:border-[#C69C6D] focus:ring-2 focus:ring-[#C69C6D]/30 rounded-lg px-4 py-3 outline-none transition-all duration-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F] font-raleway">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-[#C69C6D]/40 focus:border-[#C69C6D] focus:ring-2 focus:ring-[#C69C6D]/30 rounded-lg px-4 py-3 outline-none transition-all duration-300 shadow-sm"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#C69C6D] text-white font-semibold py-3 rounded-lg hover:bg-[#A87C55] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-[#3B2F2F]/70 font-raleway text-sm">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-[#C69C6D] font-semibold hover:underline"
            >
              Reset here
            </a>
          </p>
          <p className="text-[#3B2F2F]/70 font-raleway text-sm">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-[#C69C6D] font-semibold hover:underline"
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
