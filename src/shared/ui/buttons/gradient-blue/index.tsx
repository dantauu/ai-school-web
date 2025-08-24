"use client"
import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"

type ButtonGradient = {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: "submit" | "reset" | "button"
}

export const ButtonGradientBlue = ({
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
        backgroundImage:
          "linear-gradient(-40deg, rgb(14, 79, 255) 30%, rgb(44, 13, 136) 60%, rgb(253, 7, 191) 100%)",
      }}
      whileHover={{
        backgroundImage:
          "linear-gradient(-40deg, rgb(253, 7, 191) 0%, rgb(44, 13, 136) 40%, rgb(14, 79, 255) 70%)",
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
