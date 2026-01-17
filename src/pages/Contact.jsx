import React, { useState, useRef } from "react";
import Download from "../components/Download";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("❗ Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      alert("❗ Please enter a valid email address.");
      return;
    }
    formRef.current.submit();
  };

  return (
    <div
      className={`px-4 py-10 ${isDark ? "text-white" : "text-black"} relative md:bottom-49`}
      id="contact"
    >
      <div className="heading flex justify-center mb-6">
        <h2 className="text-3xl font-bold border p-2 rounded-xl hover:bg-blue-600">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Text Section */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-blue-600">Let's Connect !</p>
          <p>
            I'm always excited to collaborate on new projects, bring ideas to
            life, or just have a good conversation about tech, design, or
            development. Whether you have a question, a project in mind, or just
            want to connect — feel free to reach out!
          </p>
          <Download />
          <div>
            <p className="mb-2 font-semibold">Connect with me</p>
            <a
              href="mailto:harshahegde10s@gmail.com"
              className="text-blue-500 font-semibold hover:underline"
            >
              Email Me
            </a>
            <p>Email: harshahegde10s@gmail.com</p>
            <ul className="inline-flex mt-2 gap-3">
              <li>
                <a href="https://www.linkedin.com/in/harsha-hegde-a22233293">
                  <img src="images/linked.png" className="h-6 w-6" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/harsha_hegde_70?igsh=NW9ha25jeDcxMXE0">
                  <img src="images/insta.png" className="h-6 w-6" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <form
            ref={formRef}
            action="https://formspree.io/f/xyzwevoo"
            method="POST"
            onSubmit={handleSubmit}
            className="shadow-md bg-white p-6 rounded border w-full max-w-md"
          >
            <p className="text-black text-xl font-semibold mb-4 text-center">
              Contact Form
            </p>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border text-black mb-3 p-2 rounded w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border text-black mb-3 p-2 rounded w-full"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <textarea
              name="message"
              placeholder="Your message"
              className="border text-black mb-4 p-2 rounded w-full h-28 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 font-semibold py-2 px-6 rounded hover:bg-blue-600 cursor-pointer w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
