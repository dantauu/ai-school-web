"use client"
import { useState } from "react"

type BurgerMenuProps = {
  open: boolean
  toggle: () => void
}

export default function BurgerMenu({ open, toggle }: BurgerMenuProps) {
  return (
    <button
      onClick={toggle}
      className="relative z-7 flex flex-col justify-between w-8 h-6 cursor-pointer group"
    >
      <span
        className={`h-1 w-full bg-white rounded transition-all duration-300 
          ${open ? "rotate-45 translate-y-2.5" : ""}`}
      />
      <span
        className={`h-1 w-full bg-white rounded transition-all duration-300 
          ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`h-1 w-full bg-white rounded transition-all duration-300 
          ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
      />
    </button>
  )
}
