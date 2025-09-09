"use client"

import howShowImage from "@/assets/images/how-show.png"
import { Play } from "@/shared/ui/buttons/play"
import { WantTry } from "@/ui/home/how-show/want-try/inedx"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { useEffect, useRef, useState } from "react"

export const HowShowSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play()
    }
  }, [isPlaying])

  return (
    <div>
      <div className="flex flex-col 1510:gap-30 gap-15">
        <div className="w-full h-auto 1510:gap-0 gap-5 1510:flex-row flex flex-col justify-between 830:p-7 p-3 border rounded-[15px] border-white gradient-grey">
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="585:text-[48px] text-[32px] max-w-[600px] 585:leading-12 leading-8">
              Как выглядит обучение внутри?
            </h3>
            <p className="text-[20px]">1 минута - и ты всё поймёшь</p>
            <ButtonGradientBlue
              onClick={handlePlay}
              className="1510:w-[240px] w-full h-[50px]"
            >
              Смотреть
            </ButtonGradientBlue>
          </div>

          <div className="relative w-full max-w-[600px]">
            {!isPlaying ? (
              <>
                <img
                  className="w-full rounded-[15px]"
                  src={howShowImage.src}
                  alt="Как выглядит обучение"
                />
                <Play
                  onClick={handlePlay}
                  className="absolute inset-0 z-10 flex justify-center items-center cursor-pointer"
                />
              </>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-[337px] rounded-[15px]"
                src="/video/example.mp4"
                controls
              />
            )}
          </div>
        </div>

        <WantTry />
      </div>
    </div>
  )
}
