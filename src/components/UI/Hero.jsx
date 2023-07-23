import React from "react";
import heroImg from "../assets/me2.png";
import CountUp from "react-countup";
import Typed from "react-typed";
// import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlineAppstore,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            {/* <motion.h5 */}
            <h5
              animate={{ x: 7 }}
              className="text-black font-[600] text-[16px]"
            >
              Hello welcome {/* </motion.h5> */}
            </h5>
            {/* <motion.h1 */}
            <h1
              animate={{ y: -10 }}
              className=" text-green-500 font-[800] text-[1.8rem] 
            sm:text=[40px] leading-[35px] sm:leading-[46px] mt-5 "
            >
              I'm Bhupendra <br />
              <Typed
                strings={[
                  "Front-end Developer",
                  "React Developer",
                  "Javascript Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >
                <input type="text" />
              </Typed>
              {/* </motion.h1> */}
            </h1>

            {/* <motion.div */}
            <div animate={{ y: -10 }} className="flex items-center gap-6 mt-7">
              <a href="#contact">
                <button
                  className="bg-green-500 text-white font-[500] flex items-center gap-2
              hover:bg-green-700 ease-in duration-300 py-2 px-4 rounded-[8px]
              hover:animate-bounce animate-pulse "
                >
                  <AiOutlineMail />
                  Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-green-700 font-[600] text-[16px] border-b border-solid 
              border-green-700"
              >
                See portfolio
              </a>
              {/* </motion.div> */}
            </div>

            {/* <motion.p */}
            <p
              animate={{ x: -50 }}
              className="flex gap-2 mt-12 font-[500] text-[-15] leading-7 
            sm:pl-14 sm:pr-10"
            >
              <span>
                <AiOutlineAppstore />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              cupiditate quia expedita est illum accusamus nihil vitae
              exercitationem, placeat ipsam error.
              {/* </motion.p> */}
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-green-500 text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.youtube.com/"
                  className="text-gray-500 hover:text-green-500 text-[25px] font-[600]"
                >
                  <AiFillYoutube />
                </a>
              </span>

              <span>
                <a
                  href="https://github.com/"
                  className="text-gray-500 hover:text-green-500 text-[25px] font-[600]"
                >
                  <AiFillGithub />
                </a>
              </span>

              <span>
                <a
                  href="https://www.linkedin.com/"
                  className="text-gray-500 hover:text-green-500 text-[25px] font-[600]"
                >
                  <AiFillLinkedin />
                </a>
              </span>

              <span>
                <a
                  href="https://www.facebook.com/"
                  className="text-gray-500 hover:text-green-500 text-[25px] font-[600]"
                >
                  <AiFillFacebook />
                </a>
              </span>
            </div>
          </div>
          {/* =============hero left end============== */}
          {/* =============hero img==================== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* =============hero img end============== */}
          {/* =============hero contact right============== */}

          {/* =============hero contact right end============== */}
        </div>
      </div>

      <div
        className="md:basis-1/5 flex justify-between text-center mt-20 flex-wrap gap-3
           md:mt-20 md:flex md:justify-evenly md:text-center"
      >
        <div className="mb-10">
          <h2 className="text-green-500 font-[700] text-[32px] animate-bounce">
            <CountUp start={0} end={1} duration={2} suffix="+" />
          </h2>
          <h4 className="text-green-500 font-[600] text-[18px]">
            Year of Experience
          </h4>
        </div>

        <div className="mb-10">
          <h2 className="text-green-500 font-[700] text-[32px] animate-bounce">
            <CountUp start={0} end={100} duration={2} suffix="%" />
          </h2>
          <h4 className="text-green-500 font-[600] text-[18px]">
            Success Rate
          </h4>
        </div>

        <div className="mb-10">
          <h2 className="text-green-500 font-[700] text-[32px] animate-bounce">
            <CountUp start={0} end={5} duration={2} suffix="+" />
          </h2>
          <h4 className="text-green-500 font-[600] text-[18px] ">
            Happy Clients
          </h4>
        </div>

        <div className="mb-10">
          <h2 className="text-green-500 font-[700] text-[32px] animate-bounce">
            <CountUp start={0} end={10} duration={2} suffix="+" />
          </h2>
          <h4 className="text-green-500 font-[600] text-[18px]">
            Projects Completed
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
