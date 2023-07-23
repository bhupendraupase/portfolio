import React, { useEffect, useRef } from "react";
import { BsSend } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =============logo============= */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-slate-600 text-green-500 text-[18px] font-[500]
            rounded-full flex items-center justify-center"
            >
              B
            </span>

            <div className="leading-[20px] ">
              <h2 className="text-xl text-green-500 font-[700]">bhupendra</h2>
              <p className="text-green-500  text-[18px] font-[500]">
                Perosonal
              </p>
            </div>
          </div>

          {/* =====================logo end =================== */}
          {/* ======================menu start ================ */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-green-500 font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-green-500  font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-green-500  font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-green-500  font-[600] "
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ========================menu end===================== */}
          {/* =========================menu right================== */}
          <div
            className="flex items-center gap-4
          "
          >
            <a
              href="#contact"
              className="flex items-center gap-2 text-black font-[600] border-solid border-black border-2
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-green-500 hover:text-white
            hover:font-[500] ease-in duration-700
             hover:animate-bounce animate-pulse  
             
             "
            >
              <BsSend />
              Let's Talk
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl text-black md:hidden cursor-pointer"
            >
              <RiMenuLine />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
