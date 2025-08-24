import type React from "react"
import { cn } from "@/lib/utils/cn"
import { motion } from "framer-motion"

const baseStyles = "flex items-center justify-center gap-[5px] cursor-pointer"
const variants = {
  gradient: `${baseStyles} text-white rounded-[27px] shadow-white-shadow`,
  blur: `${baseStyles} text-white bg-blur-bg rounded-[27px]`,
  default: `${baseStyles} bg-none`,
} as const

type Variant = keyof typeof variants

type ButtonProps = {
  variant: Variant
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: "submit" | "reset" | "button"
  disabled?: boolean
}

const Button = ({
  variant,
  children,
  onClick,
  type,
  disabled,
  className,
}: ButtonProps) => {
  const variantName = variants[variant]
  return (
    <div className="">
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={cn(variantName, className)}
      >
        {children}
      </button>
    </div>
  )
}

type ButtonBlurProps = {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonGradientHover = ({
  className,
  onClick,
}: ButtonBlurProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-[27px] text-white px-6 py-3 flex items-center justify-center w-[130px] h-[56px]",
        className
      )}
      initial={{
        backgroundImage:
          "linear-gradient(rgba(245,245,245,0.15), rgba(245,245,245,0.15))",
        boxShadow: "none",
      }}
      whileHover={{
        backgroundImage:
          "linear-gradient(-40deg,rgb(14,79,255) 30%,rgb(44,13,136) 60%,rgb(253,7,191) 100%)",
        boxShadow:
          "4px 5px 20px #38fcfe66, -2px 1px 7px #38fcfe66, inset 0 -2px 4px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <span className="relative z-10">Войти</span>
    </motion.button>
  )
}
export default Button
