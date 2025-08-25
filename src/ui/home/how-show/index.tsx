"use client"

import howShowImage from "@/assets/images/how-show.png"
import { Play } from "@/shared/ui/buttons/play"
import { WantTry } from "@/ui/home/how-show/want-try/inedx"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

export const HowShowSection = () => {
  return (
    <div>
      <div className="flex flex-col 1510:gap-30 gap-15">
        <div className="w-full h-auto 1510:gap-0 gap-10 1510:flex-row flex flex-col justify-between p-7 border rounded-[15px] border-white gradient-grey">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="max-w-[600px] 1510:text-[48px] text-[32px]">
              Как выглядит обучение внутри ?
            </h3>
            <p className="text-[20px]">1 минута - и ты всё поймёшь</p>
            <ButtonGradientBlue className="1510:w-[240px] w-full h-[50px]">
              Смотреть
            </ButtonGradientBlue>
          </div>
          <div className="relative">
            <img src={howShowImage.src} />
            <Play className="absolute inset-0 flex justify-center items-center" />
          </div>
        </div>
        <WantTry />
      </div>
    </div>
  )
}
