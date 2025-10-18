import { Coffee } from "lucide-react";
import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const { createUser } = use(AuthContext);
  const [errors, setErrors] = useState({});

  //  Validation logic
  const validateForm = (formData) => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    const phonePattern = /^01[3-9]\d{8}$/; // BD phone format
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter a valid Bangladeshi phone number.";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Photo URL validation
    if (!formData.photoURL.trim()) {
      newErrors.photoURL = "Profile photo URL is required.";
    }

    return newErrors;
  };

  // Handle Form Submission
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      photoURL: form.photoURL.value,
      password: form.password.value,
      confirmPassword: form["confirm-password"].value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Create account in Firebase (AuthContext)
    createUser(formData.email, formData.password)
      .then((result) => {
        console.log("Firebase user:", result.user);

        // Send to backend API
        const newUser = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          photoURL: formData.photoURL,
          creationTime: result.user.metadata.creationTime,
          lastSignInTime: result.user.metadata.lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Backend response:", data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Created Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }

            form.reset();
          })
          .catch((err) => {
            console.error("Error saving to backend:", err);
            alert("User created, but failed to save info to backend.");
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4F3F0] to-[#EDE6DA] px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Coffee className="text-[#C69C6D] w-8 h-8" />
            <h1 className="text-5xl font-rancho text-[#3B2F2F]">
              Espresso <span className="text-[#C69C6D]">Emporium</span>
            </h1>
          </div>
          <p className="text-[#3B2F2F]/70 raleway text-base mt-4">
            Create your account and start your coffee journey with us!
          </p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className="space-y-5 raleway">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="01XXXXXXXXX"
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className={`w-full border ${
                errors.address ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Profile Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Paste image URL"
              className={`w-full border ${
                errors.photoURL ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">{errors.photoURL}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-[#3B2F2F]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Re-enter your password"
              className={`w-full border ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-[#C69C6D]/40"
              } rounded-lg px-4 py-3 outline-none`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#C69C6D] text-white font-semibold py-3 rounded-lg hover:bg-[#A87C55] transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2 raleway">
          <p className="text-[#3B2F2F]/70 text-sm">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              className="text-[#C69C6D] font-semibold hover:underline"
            >
              Sign in here
            </Link>
          </p>
          <p className="text-[#3B2F2F]/70 text-sm">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="text-[#C69C6D] font-semibold hover:underline"
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
