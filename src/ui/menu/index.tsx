type BurgerMenuProps = {
  open: boolean
  toggle: () => void
}

export default function BurgerMenu({ open, toggle }: BurgerMenuProps) {
  return (
    <button
      onClick={toggle}
      className="relative z-7 flex flex-col justify-between w-7 h-5 cursor-pointer group"
    >
      <span
        className={`h-[3px] w-full bg-white rounded transition-all duration-300 
          ${open ? "rotate-45 translate-y-2.5" : ""}`}
      />
      <span
        className={`h-[3px] w-full bg-white rounded transition-all duration-300 
          ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`h-[3px] w-full bg-white rounded transition-all duration-300 
          ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`h-[3px] w-full bg-white rounded transition-all duration-300 
          ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
      />
    </button>
  )
}
