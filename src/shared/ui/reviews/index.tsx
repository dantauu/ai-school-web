"use client"
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
    <div className="flex flex-col 1295:gap-9 gap-15">
      <div className="585:flex-row flex flex-col 585:items-center justify-between">
        <h3 className="585:text-[45px] text-[32px]">{title}</h3>
        <p>*Все отзывы размещены с согласия учеников</p>
      </div>
      <div className="grid grid-cols-2 gap-4 1295:flex 1295:flex-nowrap 1070:justify-between 1070:gap-7">
        {reviews.map((item, i) => (
          <div
            key={item.id}
            className={`1070:w-auto 1070:h-[500px] w-full h-[335px]  rounded-xl overflow-hidden ${
              (i + 1) % 2 === 0 ? "1070:mt-0" : "-mt-8"
            }`}
          >
            <iframe
              className="w-full h-full"
              src="https://dzen.ru/embed/vmUT235lTAFc?from_block=partner&from=zen&mute=0&autoplay=0&tv=0"
              allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <ButtonGradientBlue className="w-full h-[50px]">
        Ещё отзывы
      </ButtonGradientBlue>
    </div>
  )
}
