import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div ref={ref} className="bg-gray-200 py-6">
      <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={toPdf}
            >
              Download PDF
            </button>
          )}
        </Pdf>
      <h1 className="text-center  font-bold text-3xl my-20">Blog</h1>

      <div  className="bg my-3 my-container p-4">
      
        <h2 className="text-2xl font-semibold ">
          1. Tell us the differences between uncontrolled and controlled
          components.?
        </h2>
        <p>
          The main difference between controlled and uncontrolled components is
          how they handle state management. Uncontrolled components rely on the
          DOM to manage their state, while controlled components manage their
          own state. This makes controlled components more flexible and easier
          to work with, but it also requires more code to manage the state.
          Uncontrolled components are simpler to use, but they may be limited in
          their capabilities.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          2. How to validate React props using PropTypes?
        </h2>
        <p>
          To validate React props using PropTypes, we can import the PropTypes
          library from the 'prop-types' package and define the propTypes object
          within the component. The propTypes object specifies the expected data
          type and any other validation requirements for each prop. For example,
          to validate that a prop called 'name' is a string and is required, we
          can define it as 'name: PropTypes.string.isRequired'. Once defined,
          React will check that the props passed to the component conform to the
          propTypes specification and will throw an error if the validation
          fails. This helps to catch errors early and ensure that the component
          receives the correct data.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          3. Tell us the difference between nodejs and express js.?
        </h2>
        <p>
          1. Node.js and Express.js are both popular technologies used in
          server-side web application development. Here are the key differences
          between them:
          <p className="py-2">
            Node.js: Node.js is a server-side JavaScript runtime environment
            that allows developers to write JavaScript code on the server-side.
            It provides an event-driven, non-blocking I/O model that makes it
            lightweight and efficient for building scalable network
            applications.
          </p>
          2. Express.js: Express.js is a web application framework built on top
          of Node.js that provides a set of tools and features for building web
          applications and APIs. It is built on top of the core Node.js HTTP
          library and provides an easy-to-use interface for handling HTTP
          requests and responses.
        </p>
      </div>
      <div className="bg my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          4. What is a custom hook, and why will you create a custom hook? ?
        </h2>
        <p>
          A custom hook is a function in React that allows you to reuse stateful
          logic across different components in your application. Custom hooks
          allow you to extract and reuse logic that would otherwise be
          duplicated across multiple components.
        </p>
        <p className="pt-3">
          A custom hook is created by defining a function that uses built-in
          hooks such as useState, useEffect, and useContext, along with any
          other custom logic specific to your use case. The function can then be
          imported and used in any component that needs to use that specific
          logic.
        </p>
      </div>
    </div>
  );
};

export default Blog;
