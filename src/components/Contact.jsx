import React from "react";

const Contact = () => {
  return (
    <div className= "my-10 bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Contact
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch with us
          </p>
        </div>
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
              <p className="mt-1 text-base text-gray-600">
                You can contact us by phone or email. Our business hours are
                Monday to Friday, 9am to 5pm.
              </p>
              <dl className="mt-8 text-base text-gray-600">
                <div>
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 5.5L17.5 7.5C16.4 4.8 13.6 2.7 10.5 2.5V0C8.7 0 7.1.6 5.9 1.5C3.3 3.4 1.5 6.4 1.5 9.5C1.5 14.2 5.8 18.5 10.5 18.5C13.4 18.5 16.1 16.9 17.5 14.5L22 16.5V5.5Z"></path>
                    </svg>
                    <span className="ml-3">+1 (123) 456-7890</span>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.16 5.409C21.84 4.918 21.357 4.5 20.8 4.5H3.2C2.643 4.5 2.16 4.918 1.84 5.409L12 13.6L22.16 5.409Z"></path>
                      <path
                        d="M21.84 18.591C21.357 18.5 20.843 18.5 20.32 18.5H3.68C3.157 18.5 2.643 18.
18.5 2.12 18.591L12 10.4L21.84 18.591Z"
                      ></path>
                    </svg>
                    <span className="ml-3">info@example.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 bg-white md:mt-0 md:col-span-1">
            <div className="max-w-md mx-auto">
              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="pb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
