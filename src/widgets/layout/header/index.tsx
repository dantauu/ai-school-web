"use client"
import Button, {
  ButtonGradientBlue,
  ButtonGradientHover,
} from "@/shared/ui/buttons"
import SvgCourse from "@/assets/icons/Course"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import BurgerMenu from "@/ui/menu"
import React, { useEffect, useState } from "react"
import { MenuModal } from "@/widgets/modals/menu-modal"

const items = [
  { id: 1, text: "Курсы", icon: <SvgCourse /> },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
]

const Header = () => {
  const isMedia = useMediaQuery("(max-width: 940px")
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [open])
  return (
    <header className="flex items-center justify-between">
      <div className="container flex items-center justify-between">
        <h1 className="relative z-7 530:text-[30px] text-[16.5px]">
          AI-School by Grafov
        </h1>
        {!isMedia && (
          <div className="flex gap-8">
            {items.map((item) => (
              <div key={item.id}>
                <Button variant="default">
                  {item.icon}
                  {item.text}
                </Button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-3">
          {/*<LangToggle />*/}
          {!isMedia && (
            <ButtonGradientBlue className="w-[170px] h-[56px]">
              Записаться
            </ButtonGradientBlue>
          )}
          <ButtonGradientHover />
          {isMedia && <BurgerMenu toggle={handleOpen} open={open} />}
        </div>
      </div>
      {open && <MenuModal />}
    </header>
  )
}

export default Header
