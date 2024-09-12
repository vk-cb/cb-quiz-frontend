import React from "react";

const InstructorTest = () => {
  return (
    <div className="flex sm:flex-row flex-col mx-4 sm:mx-24 border rounded-xl mb-8">
      <div className="sm:w-[40%] border-r p-5">
        <div className="flex items-center gap-8">
          <img
            src="/images/usersIcons/instructor.png"
            alt="Avatar"
            className="avatar"
            width={50}
            height={50}
          />
          <div>
            <p>Instructor Name</p>
            <span className="text-xs font-medium text-gray-400">
              BE in Mechanical Engineering
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-center font-semibold text-orange-900">
            React Beginner Test
          </h1>
          <span>
            A short description of the test, A short description of the test, A
            short description of the test
          </span>
        </div>
        <div className="mt-8 border bottom-0 flex flex-col justify-end">
          <button className="px-4 py-2 bg-orange-900 rounded text-white text-sm font-medium w-full">
            Buy it
          </button>
        </div>
      </div>
      <div className="p-5 sm:w-[60%]">
        <h3 className=" font-semibold text-orange-900 mb-4">
          Tests Description
        </h3>
        <ul>
          <li className="mb-2">
            <strong>React Beginner Test:</strong> A foundational test covering
            basic concepts of React, including components, JSX, and props.
          </li>
          <li className="mb-2">
            <strong>Advanced JavaScript Test:</strong> Dive deep into JavaScript
            with this test focused on closures, async/await, event loops, and
            advanced data structures.
          </li>
          <li className="mb-2">
            <strong>CSS Grid and Flexbox Test:</strong> Assess your knowledge of
            modern CSS layout techniques, with practical scenarios using Grid
            and Flexbox.
          </li>
          <li className="mb-2">
            <strong>Node.js Fundamentals Test:</strong> This test evaluates your
            understanding of server-side JavaScript with Node.js, covering
            modules, Express, and API creation.
          </li>
          <li className="mb-2">
            <strong>Full Stack Development Test:</strong> A comprehensive test
            that assesses your full-stack knowledge, from frontend technologies
            like React to backend with Node.js and databases.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructorTest;
