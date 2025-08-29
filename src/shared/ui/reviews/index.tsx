"use client"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import React, { useState } from "react"

type Review = {
  id: number
  video: string
}

type ReviewsProps = {
  reviews: Review[]
  title: string | React.ReactNode
}

export const ReviewsSection = ({ reviews, title }: ReviewsProps) => {
  const [visibleCount, setVisibleCount] = useState(6)
  const [allReviews, _setAllReviews] = useState(reviews)

  const loadMoreReviews = () => {
    setVisibleCount((prevCount) => prevCount + 6)
  }

  const displayedReviews = allReviews.slice(0, visibleCount)

  return (
    <div className="flex flex-col 1295:gap-9 gap-15">
      <div className="585:flex-row flex flex-col 585:items-center justify-between">
        <h3 className="585:text-[45px] text-[32px] 585:leading-10 leading-8 pb-2">
          {title}
        </h3>
        <p>*Все отзывы размещены с согласия учеников</p>
      </div>
      <div className="grid grid-cols-2 gap-4 1070:grid-cols-2 1295:grid-cols-6">
        {displayedReviews.map((item, i) => (
          <div
            key={item.id}
            className={`w-full h-[335px] 1070:h-[500px] rounded-xl overflow-hidden ${(i + 1) % 2 === 0 ? "1070:mt-0" : "-mt-8"}`}
          >
            <iframe
              className="w-full h-full"
              src={item.video}
              allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {visibleCount < allReviews.length && (
        <ButtonGradientBlue
          className="w-full h-[50px]"
          onClick={loadMoreReviews}
        >
          Ещё отзывы
        </ButtonGradientBlue>
      )}
    </div>
  )
}
