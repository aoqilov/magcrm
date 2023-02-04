import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-twix">
          <div className="twix-info">
            <motion.div
              className="box"
              animate={{
                x: 0,
                y: 0,
                // scale: 1,
                rotate: 0,
                transition: { duration: 1 },
                opacity: 1,
              }}
              initial={{
                opacity: 0.5,
                x: -84,
                y: -28,
                // scale: 0.5,
              }}
            >
              <h1>
                <span>WE</span> DON'T JUST <span>TEACH</span> ENGLISH,
                <br />
                WE CHANGE <span>LIVES</span>!
              </h1>
              <h2>Do you want to learn English easily and qualitatively?</h2>
              <p>
                Lorem ipsum dolo laboriosam rem eum, voluptas facilis tempore.
                Quasi, dignissimos qui reprehenderit sint eius reiciendis nisi
                vitae sunt.
              </p>
              <button>sign in</button>
            </motion.div>
          </div>
          <div className="twix-picture">
            <div className="img-box">
              <img
                src="https://images.pexels.com/photos/2663853/pexels-photo-2663853.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="learn"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
