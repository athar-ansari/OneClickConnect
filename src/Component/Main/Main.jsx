import React from "react";
import { motion } from 'framer-motion';

const Main = () => {
  const links = [
    {
      url: "",
      imgSrc:
        "",
      text: " PORTFOLIO ",
    },
    // your links here...
  ];

  return (
    <>
      <main>
        <header className="">
          <h1 className="text-center text-5xl py-5 font-bold">
            One Link For{" "}
            <span className="text-indigo-500 italic font-extrabold">
              Everything
            </span>
          </h1>
        </header>
        <div className="flex mx-auto w-full justify-center mt-2">
          <img
            className="rounded-full"
            src=""
            alt=""
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-center py-2 font-extrabold italic">@athar</h3>
        <data>
          <div className="flex flex-col justify-center max-w-7xl m-auto my-4 md:my-10 w-full md:w-2/5">
            {links.map((link, index) => (
              <motion.div 
                key={index} 
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <span className="w-full">
                  <a
                    className="flex flex-row items-center p-2 rounded-xl text-white bg-indigo-400 hover:bg-indigo-300 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500"
                    href={link.url}
                  >
                    <img
                      className="bg-white rounded-xl p-1 w-11 mr-5"
                      src={link.imgSrc}
                      alt=""
                    />
                    <h4 className="font-bold md:text-lg">{link.text}</h4>
                  </a>
                </span>
              </motion.div>
            ))}
          </div>
        </data>
      </main>
    </>
  );
};

export default Main;