import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    if (!form.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    errors.name = "";
    errors.email = "";
    errors.message = "";
  };

  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    axios.post("http://localhost:3000/contact", form).then((response) => {
      // handle success
      console.log(response);
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    });
  };
  return (
    <div className="border-b border-neutral-900 sm:pb-24 pb-14">
      <h1 className="sm:my-20 my-16 text-center text-4xl">
        Contact <span className="text-[#915EFF]">Me</span>
      </h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        transition={{ duration: 1.5 }}
        className="flex-[0.75] p-8 mt-[-2rem] "
      >
        <motion.p
          variants={item}
          viewport={{ once: true }}
          className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >
          Get in touch
        </motion.p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <motion.span
              variants={item}
              viewport={{ once: true }}
              className="text-white font-medium mb-4"
            >
              Your Name :
            </motion.span>
            <motion.input
              variants={item}
              viewport={{ once: true }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="your name?"
              className="border border-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <motion.span
              variants={item}
              viewport={{ once: true }}
              className="text-white font-medium mb-4"
            >
              Your email :
            </motion.span>
            <motion.input
              variants={item}
              viewport={{ once: true }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white font-medium"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email === "Email is required"
                  ? "Email is required"
                  : "Invalid email address"}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <motion.span
              variants={item}
              viewport={{ once: true }}
              className="text-white font-medium mb-4"
            >
              Your Message :
            </motion.span>
            <motion.textarea
              variants={item}
              viewport={{ once: true }}
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="your message..."
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white font-medium"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>

          <motion.button
            variants={item}
            viewport={{ once: true }}
            className="relative rounded-2xl ml-1 p-3 px-12 sm:mt-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800"
            type="submit"
            style={{ width: "fit-content" }}
          >
            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-2xl m-1"></div>
            <span className="relative z-10">
              {loading ? "Sending..." : "Send"}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
