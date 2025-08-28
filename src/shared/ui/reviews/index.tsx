"use client"
import { Play } from "@/shared/ui/buttons/play"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import React from "react"

type Review = {
  id: number
  video: string
}

type ReviewsProps = {
  reviews: Review[]
  title: string | React.ReactNode
}

export const ReviewsSection = ({ reviews, title }: ReviewsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="585:flex-row flex flex-col 585:items-center justify-between">
        <h3 className="585:text-[45px] text-[32px]">{title}</h3>
        <p>*Все отзывы размещены с согласия учеников</p>
      </div>
      <div className="flex 1070:overscroll-x-none overflow-x-auto 1070:justify-center  gap-7">
        {reviews.map((item, i) => (
          <div
            key={item.id}
            className={`relative 1070:w-auto 1070:h-auto w-[160px] h-[335px] 1070:shrink shrink-0 rounded-xl overflow-hidden ${
              (i + 1) % 2 === 0 ? "1070:mt-8 mt-0" : ""
            }`}
          >
            <Play className="absolute inset-0 flex items-center justify-center" />
            <img src={item.video} alt="" />
          </div>
        ))}
      </div>
      <ButtonGradientBlue className="w-full h-[50px]">
        Ещё отзывы
      </ButtonGradientBlue>
    </div>
  )
}
