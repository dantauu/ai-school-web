"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function FancyToggle() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className="relative w-[120px] h-[60px] rounded-[30px] cursor-pointer select-none"
    >
      {/* Трек */}
      <motion.div
        animate={{
          background: "#F5F5F526",
        }}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 rounded-[30px] flex items-center justify-between px-4 text-white font-bold text-lg"
      >
        {/* Языки */}
        <motion.span
          animate={{ opacity: isOn ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          RU
        </motion.span>
        <motion.span
          animate={{ opacity: isOn ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          EN
        </motion.span>
      </motion.div>

      {/* Кнопка */}
      <motion.div
        animate={{
          x: isOn ? 3 : 63,
          background:
            "linear-gradient(-40deg, rgb(14, 79, 255) 30%, rgb(44, 13, 136) 60%, rgb(253, 7, 191) 100%\n" +
            "100%\n" +
            ")",
          boxShadow:
            "5px 5px 10px #38FCFE66, -2px -2px 10px #38FCFE66, inset 0 -2px 4px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
        className="absolute top-[3px] w-[54px] h-[54px] rounded-full z-10"
      />
    </div>
  )
}
