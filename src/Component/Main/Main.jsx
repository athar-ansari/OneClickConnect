import React from "react";
import { motion } from "framer-motion";

// IMAGES
import profile from "../../Static/Images/profile.jpg";
import portfolio from "../../Static/Images/portfolio.png";
import linkedin from "../../Static/Images/linkedin.png";
import github from "../../Static/Images/github.png";
import instagram from "../../Static/Images/instagram.png";
import facebook from "../../Static/Images/facebook.png";
import twitter from "../../Static/Images/twitter.png";
import Curriculum from "../../Static/Images/Curriculum.png";

const Main = () => {
  const links = [
    {
      url: "https://www.atharansari.me/",
      imgSrc: portfolio,
      text: " PORTFOLIO ",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1aW_KnRmS87bCik91FPbH5ovrYdICqCyL",
      imgSrc: Curriculum,
      text: " CV ",
    },
    {
      url: "https://www.linkedin.com/in/athar--ansari/",
      imgSrc: linkedin,
      text: " LINKEDIN ",
    },
    {
      url: "https://github.com/athar-ansari/",
      imgSrc: github,
      text: " GITHUB ",
    },
    {
      url: "https://www.instagram.com/_atharansari_/",
      imgSrc: instagram,
      text: " INSTAGRAM ",
    },
    {
      url: "https://www.facebook.com/mdathar.ansari.547/",
      imgSrc: facebook,
      text: " FACEBOOK ",
    },
    {
      url: "https://twitter.com/athar__ansari/",
      imgSrc: twitter,
      text: " TWITTER ",
    },

    // your links here...
  ];

  return (
    <>
      <main className="overflow-hidden">
        <header>
          <h1 className="text-center text-5xl xs:mt-6 md:mt-16 lg:mt-8 font-bold font-serif italic">
            One Link For {""}
            <span className="text-indigo-500  font-extrabold font-sans">
              Everything
            </span>
          </h1>
        </header>
        <div className="flex mx-auto w-full justify-center lg:mt-4 md:mt-8 xs:mt-6">
          <img
            className="rounded-full"
            src={profile}
            alt="Profile"
            width={85}
            height={85}
          />
        </div>
        <h3 className="text-center lg:mt-2 md:mt-3 xs:mt-3 font-extrabold italic">
          @athar
        </h3>
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
                      className="bg-white rounded-xl p-1 w-10 mr-5"
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
