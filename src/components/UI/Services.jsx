import React from "react";
// import { motion } from "framer-motion";
import frontendImg from "../assets/portfolio.jpg";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-black font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-black font-[500] text-[16px] leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est quasi doloremque amet sunt totam nostrum, ullam modi expedita,
            numquam provident at, neque adipisci distinctio ipsum aliquam
            quaerat porro asperiores!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ========== vertical line running though the middle ============ */}
              <div
                className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                    -translate-x-1/2"
              ></div>

              {/* =============left card ================== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      {/* <motion.div */}
                      <div
                        animate={{ x: 30 }}
                        transition={{ duration: 1 }}
                        className="bg-white p-4 rounded shadow group 
                                    hover:bg-green-500 cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-green-700 font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                        >
                          Frontend Developement
                        </h3>

                        <p
                          className="text-[15px] text-black group-hover:text-white
                        group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Porro impedit at vitae veniam, ipsum
                        </p>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-green-600 border-white border-4 w-10 h-10
                  absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ========= right card ==================== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      {/* <motion.div */}
                      <div
                        animate={{ x: -10 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="bg-white p-4 rounded shadow group 
                                    hover:bg-green-500 cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-green-700 font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                        >
                          Frontend Developement
                        </h3>

                        <p
                          className="text-[15px] text-black group-hover:text-white
                        group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Porro impedit at vitae veniam, ipsum
                        </p>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-green-600 border-white border-4 w-10 h-10
                  absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =============left card ================== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      {/* <motion.div */}
                      <div
                        animate={{ x: 30 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="bg-white p-4 rounded shadow group 
                                    hover:bg-green-500 cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-green-700 font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                        >
                          Frontend Developement
                        </h3>

                        <p
                          className="text-[15px] text-black group-hover:text-white
                        group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Porro impedit at vitae veniam, ipsum
                        </p>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-green-600 border-white border-4 w-10 h-10
                  absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ========= right card ==================== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      {/* <motion.div */}
                      <div
                        animate={{ x: -10 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="bg-white p-4 rounded shadow group 
                                    hover:bg-green-500 cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-green-700 font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                        >
                          Frontend Developement
                        </h3>

                        <p
                          className="text-[15px] text-black group-hover:text-white
                        group-hover:font-[500] leading-7"
                        >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Porro impedit at vitae veniam, ipsum
                        </p>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-green-600 border-white border-4 w-10 h-10
                  absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
                  flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
