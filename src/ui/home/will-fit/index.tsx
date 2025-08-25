"use client"

import { WillFitCard } from "@/shared/ui/cards/will-fit"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const WillFitSection = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="530:flex-row flex flex-col justify-between 530:items-center">
        <h3 className="585:text-[45px] text-[32px]">Кому подойдёт</h3>
        <ButtonGradientWhite className="530:w-[220px] w-full h-[50px] text-black">
          Посмотреть курсы
        </ButtonGradientWhite>
      </div>
      <WillFitCard />
    </div>
  )
}
