import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-4 sm:px-6 lg:px-8",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff]" />
          <div className="w-0.5 sm:w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* About Me */}
        <div className="ml-2 sm:ml-0">
          <h1 className={cn(styles.heroHeadText, "text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl")}>
            Hi, I'm <span className="text-[#915eff]">Priyanshu</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 text-sm sm:text-base md:text-lg")}>
            I develop 3D visuals, user interfaces <br className="xs:block hidden" />
            and web applications
          </p>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute bottom-20 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
