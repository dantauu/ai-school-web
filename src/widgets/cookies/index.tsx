"use client"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import Button from "@/shared/ui/buttons"
import SvgCross from "@/assets/icons/Cross"
import { useState } from "react"

export const Cookies = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => {
    setShow(false)
  }
  if (!show) return
  return (
    <div className="max-w-[565px] fixed bottom-15 530:flex-row flex flex-col items-center justify-center gap-4 -translate-x-1/2 left-1/2 rounded-[20px] border border-[#ffffff70] p-3.5 bg-[#031C52]">
      <p className="max-w-[290px] min-w-[290px]">
        Мы используем только необходимые куки, чтобы сайт работал хорошо
      </p>
      <div onClick={handleClose} className="flex items-center w-full gap-4">
        <ButtonGradientBlue className="530:w-[60px] w-full h-[40px]">
          Ок
        </ButtonGradientBlue>
        <Button onClick={handleClose} variant="default">
          <SvgCross className="530:w-auto 530:h-auto w-[23px] h-[23px]" />
        </Button>
      </div>
    </div>
  )
}
