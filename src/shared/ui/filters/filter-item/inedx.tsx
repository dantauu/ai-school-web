import React, { useState } from "react"
import SvgArrow from "@/assets/icons/Arrow"
import { motion, AnimatePresence } from "framer-motion"

type FilterItemProps = {
  text: string
  children?: React.ReactNode
  icon: React.ReactNode
}

export const FilterItem = ({ text, children, icon }: FilterItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full select-none cursor-pointer z-10">
      <div
        className="flex items-center w-full h-[60px] justify-between bg-blur-bg rounded-[10px] px-3 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <p>{text}</p>
        </div>
        <motion.div
          animate={{ rotate: open ? -180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SvgArrow />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute z-20 w-full overflow-hidden mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
