import React, { useState, useEffect } from "react";
import data from "../assets/data/portfolioData";
// import { motion } from "framer-motion";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "react") {
      const filteredData = data.filter((item) => item.category === "React");
      setPortfolios(filteredData);
    }

    if (selectTab === "javascript") {
      const filteredData = data.filter(
        (item) => item.category === "Javascript"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-black text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-green-500 border border-solid border-green-700 py-2 px-4
            rounded-[8px]"
            >
              All
            </button>

            <button
              onClick={() => setSelectTab("react")}
              className="text-green-500 border border-solid border-green-700 py-2 px-4
            rounded-[8px]"
            >
              React
            </button>

            <button
              onClick={() => setSelectTab("javascript")}
              className="text-green-500 border border-solid border-green-700 py-2 px-4
            rounded-[8px]"
            >
              Javascript
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            // <motion.div
            <div
              key={index}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className=" group max-w-full  sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[18px] "
                  src={portfolio.imgUrl}
                  alt=""
                />
              </figure>

              <div
                className="w-full h-full bg-green-500 bg-opacity-40 absolute top-0 left-0 z-[5]
                  hidden group-hover:block"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(Portfolio.id)}
                    className="text-white bg-green-700 hover:bg-green-500 py-2 px-4 rounded-[8px]
                  font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
              {/* </motion.div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-green-700 hover:bg-green-500 py-2 px-4 rounded-[8px]
                   font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
