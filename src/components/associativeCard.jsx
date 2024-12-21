import React from "react";
import { FaPlay } from "react-icons/fa";
const AssociativeCard = () => {
  return (
    <div className="bg-black mt-5  place-items-center pb-24">
      <div className="flex justify-center items-center  my-9 pt-10 p-2 gap-3 text-white">
        <FaPlay className="text-yellow-500" />
        The ASSOCIATIVES 2024
      </div>
      <h1 className="text-5xl text-yellow-500 font-bold mb-4">Past Agenda</h1>
      {/* Details */}
      <div className="border m-8 text-white border-dashed border-yellow-500 rounded-md px-6 py-3 text-center inline-block">
        <span className="uppercase tracking-wide font-medium text-sm">
          The Oberoi, Gurugram
        </span>
        <span className="mx-3 text-white">|</span>
        <span className="uppercase tracking-wide font-medium text-sm">
          8th August, 2024
        </span>
      </div>

      {/* Card section */}
      <div className="border my-24 w-[70%] border-dashed border-yellow-800 bg-gradient-to-t from-black via-yellow-900 to-yellow-500 rounded-lg shadow-xl shadow-yellow-900 p-6 text-white  mx-auto">
        <div className="flex justify-between ">
          {/* Left Section */}
          <div className="flex flex-col items-start pr-6">
            <div className="bg-yellow-500 text-sm font-semibold rounded-md px-3 py-1 mb-3">
              Fireside
            </div>
            <div className="text-lg font-semibold">
              11:10-11:35 <span className="uppercase text-gray-400">IST</span>
            </div>
            <div className="text-sm text-gray-400 font-medium mt-1">
              25 MINS
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4">
              Scripting The Next Chapter Of India's Consumption Story
            </h2>
            <div className="flex space-x-4">
              {/* Speaker 1 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Kishore Biyani"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Kishore Biyani</div>
                  <div className="text-sm text-gray-400">
                    Entrepreneur & Founder, Future Group
                  </div>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Vaibhav Vardhan"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Vaibhav Vardhan</div>
                  <div className="text-sm text-gray-400">
                    CEO & Cofounder, Inc42
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Section MUI use kr lunga */}
            <div className="mt-6 bg-[#341d1f] rounded-lg flex items-center w-1/2 p-4">
              <div className="text-lg font-medium">What Will We Cover</div>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md">
            +
          </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* dummy */}
      <div className="border my-24 w-[70%] border-dashed border-yellow-800 bg-gradient-to-t from-black via-yellow-900 to-yellow-500 rounded-lg shadow-xl shadow-yellow-900 p-6 text-white  mx-auto">
        <div className="flex justify-between ">
          {/* Left Section */}
          <div className="flex flex-col items-start pr-6">
            <div className="bg-yellow-500 text-sm font-semibold rounded-md px-3 py-1 mb-3">
              Fireside
            </div>
            <div className="text-lg font-semibold">
              11:10-11:35 <span className="uppercase text-gray-400">IST</span>
            </div>
            <div className="text-sm text-gray-400 font-medium mt-1">
              25 MINS
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4">
              Scripting The Next Chapter Of India's Consumption Story
            </h2>
            <div className="flex space-x-4">
              {/* Speaker 1 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Kishore Biyani"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Kishore Biyani</div>
                  <div className="text-sm text-gray-400">
                    Entrepreneur & Founder, Future Group
                  </div>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Vaibhav Vardhan"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Vaibhav Vardhan</div>
                  <div className="text-sm text-gray-400">
                    CEO & Cofounder, Inc42
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Section MUI use kr lunga */}
            <div className="mt-6 bg-[#341d1f] rounded-lg flex items-center w-1/2 p-4">
              <div className="text-lg font-medium">What Will We Cover</div>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md">
            +
          </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* dummy */}
      <div className="border my-24 w-[70%] border-dashed border-yellow-800 bg-gradient-to-t from-black via-yellow-900 to-yellow-500 rounded-lg shadow-xl shadow-yellow-900 p-6 text-white  mx-auto">
        <div className="flex justify-between ">
          {/* Left Section */}
          <div className="flex flex-col items-start pr-6">
            <div className="bg-yellow-500 text-sm font-semibold rounded-md px-3 py-1 mb-3">
              Fireside
            </div>
            <div className="text-lg font-semibold">
              11:10-11:35 <span className="uppercase text-gray-400">IST</span>
            </div>
            <div className="text-sm text-gray-400 font-medium mt-1">
              25 MINS
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4">
              Scripting The Next Chapter Of India's Consumption Story
            </h2>
            <div className="flex space-x-4">
              {/* Speaker 1 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Kishore Biyani"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Kishore Biyani</div>
                  <div className="text-sm text-gray-400">
                    Entrepreneur & Founder, Future Group
                  </div>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Vaibhav Vardhan"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Vaibhav Vardhan</div>
                  <div className="text-sm text-gray-400">
                    CEO & Cofounder, Inc42
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Section MUI use kr lunga */}
            <div className="mt-6 bg-[#341d1f] rounded-lg flex items-center w-1/2 p-4">
              <div className="text-lg font-medium">What Will We Cover</div>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md">
            +
          </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* dummy */}
      <div className="border w-[70%] border-dashed border-yellow-800 bg-gradient-to-t from-black via-yellow-900 to-yellow-500 rounded-lg shadow-xl shadow-yellow-900 p-6 text-white  mx-auto">
        <div className="flex justify-between ">
          {/* Left Section */}
          <div className="flex flex-col items-start pr-6">
            <div className="bg-yellow-500 text-sm font-semibold rounded-md px-3 py-1 mb-3">
              Fireside
            </div>
            <div className="text-lg font-semibold">
              11:10-11:35 <span className="uppercase text-gray-400">IST</span>
            </div>
            <div className="text-sm text-gray-400 font-medium mt-1">
              25 MINS
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4">
              Scripting The Next Chapter Of India's Consumption Story
            </h2>
            <div className="flex space-x-4">
              {/* Speaker 1 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Kishore Biyani"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Kishore Biyani</div>
                  <div className="text-sm text-gray-400">
                    Entrepreneur & Founder, Future Group
                  </div>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="flex items-center bg-[#1f1a22] rounded-md p-2">
                <img
                  src="/logos/microsoft.png"
                  alt="Vaibhav Vardhan"
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-3">
                  <div className="text-white font-medium">Vaibhav Vardhan</div>
                  <div className="text-sm text-gray-400">
                    CEO & Cofounder, Inc42
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Section MUI use kr lunga */}
            <div className="mt-6 bg-[#341d1f] rounded-lg flex items-center w-1/2 p-4">
              <div className="text-lg font-medium">What Will We Cover</div>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md">
            +
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociativeCard;
