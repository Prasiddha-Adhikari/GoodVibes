import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="py-10 bg-yellow-100">
        <div className="container">
          <h1 className="pl-2 text-3xl font-bold">Contact us</h1>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col  md:flex-row gap-3">
          <div className="flex-initial w-1/2">
            <div>
              <section
                id="contact"
                className="py-12 flex justify-center items-center"
              >
                <div className=" ">
                  <p className="pb-8">Walk in to our office for free study abroad counselling, application submissions, visa assistance, pre-departure sessions and much more.

</p>
                  <div className="shadow-md border-2 border-solid border-black rounded-lg p-5 w-full">
                    <form>
                      <p>Phone : +977-01-5916120, 9869060120</p>
                      <p>Timing : Sunday - Friday-8:00 am -6:30 pm</p>
                      <p>Email : info.goodvives@gmail.com</p>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div>
          <section id="contact" className="py-12 bg-gray-100 flex justify-center items-center">
        <div className="">
            <div className="bg-white shadow-md rounded border-2 border-solid border-black p-5">
                <div className=" mb-4 p-4">
                <h3 className="text-xl">Interested in studying aboard ?</h3>
                <p className="text-sm font-light">Fill in your details and we'll call you back !</p>
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label for="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label for="email" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input type="email" id="email" name="email" placeholder="Last Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-2">Mobile</label>
                        <input type="number" id="contact" name="contact" placeholder="Mobile..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="education" className="block text-gray-700 font-semibold mb-2">Education Level</label>
                        <input type="text"  name="education" placeholder="Education Level"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="subject" className="block text-gray-700 font-semibold mb-2">Course</label>
                        <input type="text" id="course" name="course" placeholder="Course..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <input id="message" name="message" placeholder="Enter your message" rows="5"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
