import React, { useEffect, useState } from "react";
import { FaCloud, FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { MdCheck, MdEdit } from "react-icons/md";
import SplitPane from "react-split-pane";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Logo2 } from "../assets";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Pen = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [title, setTitle] = useState("UnTitled");
  const [isTitle, setisTitle] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const updateOutput = () => {
    const combinedOutput = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setOutput(combinedOutput);
  };

  const handleSaveClick = () => {
    setIsPopupVisible(true); // Show popup when save is clicked
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Close popup
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
        {/* Header Section */}
        <header className="w-full flex items-center justify-between px-12 py-4">
          <div className="flex items-center justify-center gap-6">
            <Link to={"/home"}>
              <img src={Logo2} alt="Logo" className="w-10 h-10" />
            </Link>
            <div className="flex flex-col items-start justify-start">
              {/* Title */}
              <div className="flex items-center justify-center gap-3">
                <AnimatePresence>
                  {isTitle ? (
                    <motion.input
                      key={"TitleInput"}
                      type="text"
                      placeholder="Your Title"
                      className="px-3 py-3 rounded-md bg-transparent text-primaryText text-base outline-none border-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  ) : (
                    <motion.p
                      key={"titleLabel"}
                      className="px-3 py-2 text-white text-lg"
                    >
                      {title}
                    </motion.p>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isTitle ? (
                    <motion.div
                      key={"MdCheck"}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => setisTitle(false)}
                    >
                      <MdCheck className="text-2xl text-emerald-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={"MdEdit"}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => setisTitle(true)}
                    >
                      <MdEdit className="text-2xl text-primaryText" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              className="flex items-center justify-center bg-primaryText text-base text-primary font-semibold rounded-md px-4 py-2 min-w-[100px] hover:bg-opacity-80 transition duration-200"
              onClick={handleSaveClick} // Save button
            >
              <FaCloud className="mr-1" /> {/* Cloud icon */}
              Save
            </motion.button>
            <motion.button
              className="flex items-center justify-center bg-primaryText text-base text-primary font-semibold rounded-md px-4 py-2 min-w-[100px] hover:bg-opacity-80 transition duration-200"
              onClick={() => console.log("Open settings")} // Add your settings functionality here
            >
              <FcSettings className="mr-1" /> Settings
            </motion.button>
            <Link to={"/home/auth"}>
              <motion.button className="flex items-center justify-center bg-green-400 text-black text-lg font-semibold rounded-md px-4 py-2 min-w-[100px] hover:bg-green-700 transition duration-200">
                Sign Up
              </motion.button>
            </Link>
            <Link to={"/home/auth"}>
              <motion.button className="flex items-center justify-center bg-gray-800 text-white text-lg font-semibold rounded-md px-4 py-2 min-w-[100px] hover:bg-gray-500 transition duration-200">
                Log In
              </motion.button>
            </Link>
          </div>
        </header>

        {/* Coding Section */}
        <div>
          {/* Horizontal Split Pane */}
          <SplitPane
            split="horizontal"
            minSize={100}
            maxSize={-100}
            defaultSize={"50%"}
          >
            {/* Top Coding Section */}
            <SplitPane split="vertical" minSize={500}>
              {/* HTML Code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                    <FaHtml5 className="text-xl text-red-500" />
                    <p className="text-primaryText font-semibold">HTML</p>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    value={html}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    theme="dark"
                    onChange={(value) => setHtml(value)}
                  />
                </div>
              </div>

              <SplitPane split="vertical" minSize={500}>
                {/* CSS Code */}
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                      <FaCss3 className="text-xl text-sky-500" />
                      <p className="text-primaryText font-semibold">CSS</p>
                    </div>
                    <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                      <FcSettings className="text-xl" />
                      <FaChevronDown className="text-xl text-primaryText" />
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <CodeMirror
                      value={css}
                      height="600px"
                      extensions={[javascript({ jsx: true })]}
                      theme="dark"
                      onChange={(value) => setCss(value)}
                    />
                  </div>
                </div>

                {/* JS Code */}
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                      <FaJs className="text-xl text-yellow-500" />
                      <p className="text-primaryText font-semibold">JS</p>
                    </div>
                    <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                      <FcSettings className="text-xl" />
                      <FaChevronDown className="text-xl text-primaryText" />
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <CodeMirror
                      value={js}
                      height="600px"
                      extensions={[javascript({ jsx: true })]}
                      theme="dark"
                      onChange={(value) => setJs(value)}
                    />
                  </div>
                </div>
              </SplitPane>
            </SplitPane>

            {/* Bottom Output Section */}
            <div
              className="bg-white"
              style={{ overflow: "hidden", height: "100%" }}
            >
              <iframe
                title="Result"
                srcDoc={output}
                style={{ border: "none", width: "100%", height: "100%" }}
              />
            </div>
          </SplitPane>
        </div>

        {/* Popup for Signup Requirement */}
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">
                You need to log in to save your pen!
              </h2>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pen;
