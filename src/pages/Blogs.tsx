import React, { useEffect } from "react";
// , useState }
import { Blog } from "../components/Blog";
// import { ref as dbRef, push } from "firebase/database";
// import {
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";
// import { database, storage } from "../config/firebase";
export const Blogs: React.FC = () => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [image, setImage] = useState<File | null>(null);
  // const [loading, setLoading] = useState(false);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     let imageUrl = "";
  //     if (image) {
  //       const imageRef = storageRef(storage, `images/${image.name}`);
  //       await uploadBytes(imageRef, image);
  //       imageUrl = await getDownloadURL(imageRef);
  //     }

  //     const blogRef = dbRef(database, "blogs");
  //     await push(blogRef, {
  //       title,
  //       content,
  //       imageUrl,
  //       createdAt: new Date().toISOString(),
  //     });

  //     setTitle("");
  //     setContent("");
  //     setImage(null);
  //     alert("Blog uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading blog: ", error);
  //     alert("Error uploading blog");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <main>
      <section className="bg-light-primary bg-cover !max-h-[400px] h-[400px] md:h-[700px]">
        <div className="w-full h-full flex justify-center items-center flex-col custom-container px-8 sm:px-16 md:px-28 py-24">
          <h2 className="font-bold text-3xl sm:text-5xl text-primary text-center ">
            Insights and Updates from Enta Afrika
          </h2>
          <p className="text-sm sm:text-base text-center text-black !leading-[157.5%] font-medium mt-3">
            Stay informed with the latest news, insights, and updates from Enta
            Afrika. Our blog covers a wide range of topics related to business
            incorporation, licensing, acquisitions, and the African market.
          </p>
        </div>
      </section>
      <Blog />
      {/* <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Blog</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              title="Title"
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content:
            </label>
            <textarea
              id="content"
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md h-40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image:
            </label>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content:
            </label>
            <input
              id="file"
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded-md text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Uploading..." : "Upload Blog"}
          </button>
        </form>
      </div> */}
      <div className="flex items-center justify-center p-4 bg-white text-center">
        {/* <input
          type="text"
          name="blog-contact"
          id="blog-contact"
          placeholder="Enter your email"
          className=""
        /> */}
        {/* <p id="contact-description" className="text-lg  mr-8">
          Have a topic you’d like us to cover?
        </p>
        <button
          type="button"
          className="bg-[#009244] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009244] hover:bg-green-700 transition duration-300"
          aria-labelledby="contact-description"
        >
          Contact Us
        </button> */}
      </div>
    </main>
  );
};
