import type React from "react"
import { cn } from "@/lib/utils/cn"

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
export default Button
