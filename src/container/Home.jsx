import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo1 } from "../assets";
import { FaSearchengin } from "react-icons/fa6";

const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          {/* logo */}
          <Link to={"/home"}>
            <img
              src={Logo1}
              alt="Logo"
              className="object-contain w-72 h-auto"
            />
          </Link>

          <Link to={"/pen"}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200"
            >
              <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                Start Coding
              </p>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* top section */}
        <div className="w-full flex items-center justify-between gap-3">
          {/* search */}
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-wxl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600"
              placeholder="Search here..."
            />
          </div>

          {/* profile */}
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <Link
              to={"/home/auth"}
              className="bg-green-400 px-6 py-2 rounded-md text-black text-lg cursor-pointer hover:bg-green-700"
            >
              SignUp
            </Link>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <Link
              to={"/home/auth"}
              className="bg-gray-800 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-gray-500"
            >
              LogIn
            </Link>
          </motion.div>
        </div>

        {/* bottom section */}
        <div className="w-full"></div>
      </div>
    </>
  );
};
export default Home;
