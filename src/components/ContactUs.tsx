import React, { FC, useState, useContext } from "react";
import { set, ref } from "firebase/database";
import { database } from "../config/firebase";
import StoreContext from "../store";
export const ContactUs: FC = () => {
  const storeCtx = useContext(StoreContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word characters
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "") // Trim - from end of text
      .substring(0, 50);
  };
  const randomId = Math.random().toString(36).substring(7);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    set(ref(database, `contact-us/${slugify(name) + randomId + Date.now()}`), {
      name,
      email,
      message,
    })
      .then(() => {
        setLoading(false);
        storeCtx.toastHandler("Message sent successfully", "success");
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        storeCtx.toastHandler(
          "Something went wrong. Please try again later.",
          "error"
        );
        setError("Something went wrong. Please try again later.");
      });
  };
  return (
    <div className="w-full h-screen px-8 sm:px-16 md:px-28 py-24 flex items-center justify-center">
      <form
        className=" w-full sm:w-[calc(100%_-_100px)] mx-auto md:w-3/5 bg-white p-8  rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="mt-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border h-20 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded focus:outline-none focus:ring-2  hover:opacity-75 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
