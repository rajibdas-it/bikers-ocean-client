import React from "react";
import { Link } from "react-router-dom";
import author_img from "../../assets/rajib.jpeg";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div>
      <div className="w-[80%] mx-auto mt-10 mb-10">
        <div className="mt-10">
          {/* Question-1 Start*/}
          <div
            className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
            data-aos="zoom-in"
          >
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <div className="mb-4">
                <Link
                  to="/blogs"
                  aria-label="Article"
                  className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                >
                  What are the different ways to manage a state in a React
                  application?
                </Link>
              </div>
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">
                  State Management: <br />
                </span>{" "}
                State management in React's, useState is the best option for
                local state management. If we need a global state solution, the
                most popular ones are <br />
                <span className="font-bold">1. Context API</span> <br />
                <span className="font-bold">2. Redux</span> <br />
                <span className="font-bold">3. MobX</span> <br />
              </p>
            </div>
            <div className="mb-1 sm:text-center">
              <Link
                to="/blogs"
                aria-label="Author"
                className="inline-block mb-1"
              >
                <img
                  alt=""
                  src={author_img}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  to="/blogs"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Rajib Das
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>

          {/* Question- End */}

          {/* Question-2 Start*/}
          <div
            className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
            data-aos="zoom-in"
          >
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <div className="mb-4">
                <Link
                  to="/blogs"
                  aria-label="Article"
                  className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                >
                  How does prototypical inheritance work?
                </Link>
              </div>
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">
                  Prototypical Inheritance:
                </span>{" "}
                <br />
                JavaScript is a prototype-based, Object Oriented programming
                language. After the ES6 updates, JavaScript allowed for
                “prototypal inheritance”, meaning that objects and methods can
                be shared, extended, and copied. Sharing amid objects makes for
                easy inheritance of structure (data fields), behavior (functions
                / methods), and state (data values). JavaScript is the most
                common of the prototype-capable languages, and its capabilities
                are relatively unique. When used appropriately, prototypical
                inheritance in JavaScript is a powerful tool that can save hours
                of coding.
                <br />
                prototypical inheritance refers to the ability to access object
                properties from another object. We use a JavaScript prototype to
                add new properties and methods to an existing object
                constructor. We can then essentially tell our JS code to inherit
                properties from a prototype. Prototypical inheritance allows us
                to reuse the properties or methods from one JavaScript object to
                another through a reference pointer function.
              </p>
            </div>
            <div className="mb-1 sm:text-center">
              <Link
                to="/blogs"
                aria-label="Author"
                className="inline-block mb-1"
              >
                <img
                  alt=""
                  src={author_img}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  to="/blogs"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Rajib Das
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          {/* Question-2 End*/}

          {/* Question-3 Start*/}
          <div
            className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
            data-aos="zoom-in"
          >
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <div className="mb-4">
                <Link
                  to="/blogs"
                  aria-label="Article"
                  className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                >
                  What is a unit test? Why should we write unit tests?
                </Link>
              </div>
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">Unit Test: </span>{" "}
                <br />
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system.
                <br />
                <br />
                We should write Unit test because Unit testing provides a sort
                of living documentation of the system. Developers looking to
                learn what functionality is provided by a unit, and how to use
                it, can look at the unit tests to gain a basic understanding of
                the unit's interface (API).
                <br />
              </p>
            </div>
            <div className="mb-1 sm:text-center">
              <Link
                to="/blogs"
                aria-label="Author"
                className="inline-block mb-1"
              >
                <img
                  alt=""
                  src={author_img}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  to="/blogs"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Rajib Das
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          {/* Question-3 End*/}
          {/* Question-4 Start*/}
          <div
            className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
            data-aos="zoom-in"
          >
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
              <div className="mb-4">
                <Link
                  to="/blogs"
                  aria-label="Article"
                  className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                >
                  React vs. Angular vs. Vue?
                </Link>
              </div>
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">React </span>
                is considered a UI library. They define themselves as: “A
                JavaScript library for building user interfaces” Facebook
                developers are behind the development and maintenance of this
                library. And, in this case, most of Facebook’s products are made
                with React.
                <br />
              </p>
              <br />
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">Angular </span> is a
                front-end framework with lots of components, services, and
                tools. On Angular’s site, you can see that they define Angular
                as: “The modern web developer’s platform” It is developed and
                maintained by Google developers, but curiously it is not used to
                implement any of their most common products such as Search or
                YouTube.
                <br />
              </p>
              <br />
              <p className="text-base text-gray-700 md:text-lg text-justify">
                <span className="text-2xl font-bold italic">Vue.js </span>
                is developed and led by Evan You, but also it counts on a huge
                open-source community. These three frameworks have several
                things in common, such as each follows a component-based
                architecture and allows creating UI features quickly. React and
                Vue.js are mainly declarative, and while Angular could also be
                declarative, it’s really more imperative. Nevertheless, they
                present some more differences according to their structure,
                architecture and way of working, so let’s dive into all these
                characteristics.
                <br />
              </p>
            </div>
            <div className="mb-1 sm:text-center">
              <Link
                to="/blogs"
                aria-label="Author"
                className="inline-block mb-1"
              >
                <img
                  alt=""
                  src={author_img}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </Link>
              <div>
                <Link
                  to="/blogs"
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Rajib Das
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          {/* Question-4 End*/}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
