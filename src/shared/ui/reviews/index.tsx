"use client"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import React, { useRef, useState } from "react"
import { Play } from "@/shared/ui/buttons/play"
import review1 from "@/assets/images/reviews-1.png"
import review2 from "@/assets/images/reviews-2.png"

type Review = {
  id: number
  video: string
}

type ReviewsProps = {
  reviews: Review[]
  title: string | React.ReactNode
  reviewImages?: { src: string }[]
}

export const ReviewsSection = ({
  reviews,
  title,
  reviewImages = [{ src: review1.src }, { src: review2.src }],
}: ReviewsProps) => {
  const [visibleCount, setVisibleCount] = useState(6)
  const [allReviews, _setAllReviews] = useState(reviews)

  const loadMoreReviews = () => {
    setVisibleCount((prevCount) => prevCount + 6)
  }
  const displayedReviews = allReviews.slice(0, visibleCount)
  const videoRef = useRef<(HTMLVideoElement | null)[]>([])
  const [isPlaying, setIsPlaying] = useState<number>()

  const handlePlay = (id: number, index: number) => {
    const currentVideo = videoRef.current[index]

    if (isPlaying !== null) {
      const prevIndex = displayedReviews.findIndex(
        (item) => item.id === isPlaying
      )
      const prevVideo = videoRef.current[prevIndex]
      if (prevVideo && prevVideo !== currentVideo) {
        prevVideo.pause()
        prevVideo.currentTime = 0
      }
    }
    if (currentVideo) {
      currentVideo.play()
      setIsPlaying(id)
    }
  }

  return (
    <div className="flex flex-col 1295:gap-9 gap-15">
      <div className="585:flex-row flex flex-col 585:items-center justify-between">
        <h3 className="585:text-[45px] text-[32px] 585:leading-10 leading-8 pb-2">
          {title}
        </h3>
        <p>*Все отзывы размещены с согласия учеников</p>
      </div>
      <div className="grid grid-cols-2 gap-4 830:grid-cols-2 975:grid-cols-6">
        {displayedReviews.map((item, i) => (
          <div
            key={item.id}
            onClick={() => handlePlay(item.id, i)}
            className={`relative w-full h-fit rounded-[27px] overflow-hidden cursor-pointer ${(i + 1) % 2 === 0 ? "1070:mt-0" : "-mt-8"}`}
          >
            <video
              ref={(el) => {
                videoRef.current[i] = el
              }}
              className="w-fit h-full rounded-[25px]"
              src="/video/example.mp4"
              controls={isPlaying === item.id}
            />
            {isPlaying !== item.id && (
              <>
                <img
                  src={reviewImages[i % reviewImages.length].src}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={`Preview ${i + 1}`}
                />
                <Play className="absolute inset-0 flex items-center justify-center" />
              </>
            )}
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
