import React from "react";

const Apply = () => {
  return (
    <div >
        <div className="py-10 bg-slate-300">
        <div className="container">
          <h1 className="pl-2 text-3xl font-bold">Apply Online</h1>
        </div>
      </div>
      <section
        id="contact"
        className="container pt-12 bg-gray-100 flex"
      >
        <div className="">
          <div className="bg-white shadow-md rounded border-2 border-solid border-gray-500 p-5">
            <div className=" mb-4 p-4">
              <h3 className="text-xl">Interested in studying aboard ?</h3>
              <p className="text-sm font-light">
                Fill in your details and we'll call you back !
              </p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Mobile..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="education"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Education Level
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Education Level"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  placeholder="Course..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <input
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
