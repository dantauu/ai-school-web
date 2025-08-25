"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import type React from "react"

type ButtonGradient = {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: "submit" | "reset" | "button"
}

export const ButtonGradientWhite = ({
  type,
  onClick,
  className,
  children,
}: ButtonGradient) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={{
        backgroundImage: "linear-gradient(90deg, #c3ffff 0%, #0bd3fb 100%)",
      }}
      whileHover={{
        backgroundImage: "linear-gradient(90deg, #0bd3fb 0%, #c3ffff 100%)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        className,
        "shadow-white-shadow rounded-[27px] cursor-pointer"
      )}
    >
      {children}
    </motion.button>
  )
}
