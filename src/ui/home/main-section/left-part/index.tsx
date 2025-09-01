"use client"

import SvgTicket from "@/assets/icons/Ticket"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { useRouter } from "next/navigation"

export const LeftPartMain = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col h-full justify-between">
      <h3 className="w-[330px] less-desctop:leading-12 leading-8 text-[32px] less-desctop:text-[45px] pb-30 less-desctop:pb-0">
        Стань тем, кого ищут на рынке
      </h3>
      <div className="flex flex-col gap-5">
        <h1 className="less-desctop:text-[65px] less-desctop:leading-normal less-desctop:max-w-full max-w-[310px] leading-10 text-[40px]">
          AI-school by Grafov
        </h1>
        <p className="max-w-[540px] text-[21px] leading-6.5">
          Современная онлайн-школа, где ты быстро и понятно освоишь нейросети,
          ботов, AI-инструменты и начнёшь больше зарабатывать
        </p>
        <div className="less-desctop:flex-row less-desctop:w-[490px] less-desctop:h-[56px] lesh-full less-desctop:py-0 py-3 w-full h-full flex flex-col 530:items-center 585:px-0 px-3 justify-center less-desctop:rounded-full rounded-[10px] gap-2 bg-blur-bg">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <SvgTicket />
            </div>
            <p>Твой билет в цифровую эпоху</p>
          </div>
          <ButtonGradientWhite
            onClick={() => router.push("/course")}
            className="585:w-[190px] w-full h-[45px] text-[16px] text-black"
          >
            Выбрать свой курс
          </ButtonGradientWhite>
        </div>
      </div>
    </div>
  )
}
