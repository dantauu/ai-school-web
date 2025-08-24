"use client"

import { WillFitCard } from "@/shared/ui/cards/will-fit"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const WillFitSection = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="530:flex-row flex flex-col justify-between 530:items-center">
        <h3 className="text-[45px]">Кому подойдёт</h3>
        <ButtonGradientWhite
          className="w-[220px] h-[50px] text-black"
        >
          Посмотреть курсы
        </ButtonGradientWhite>
      </div>
      <WillFitCard />
    </div>
  )
}
