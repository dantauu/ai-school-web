"use client"

import { WillFitCard } from "@/shared/ui/cards/will-fit"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import Link from "next/link"

export const WillFitSection = () => {
  return (
    <div className="flex flex-col 585:gap-9 gap-5">
      <div className="530:flex-row flex flex-col justify-between 530:items-center">
        <h3 className="585:text-[45px] text-[32px] 530:pb-0 pb-3">
          Кому подойдёт
        </h3>
        <Link href={"/course"}>
          <ButtonGradientWhite className="530:w-[220px] w-full h-[50px] text-black">
            Посмотреть курсы
          </ButtonGradientWhite>
        </Link>
      </div>
      <WillFitCard />
    </div>
  )
}
