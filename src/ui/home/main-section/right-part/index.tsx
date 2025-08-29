"use client"

import SvgStudy from "@/assets/icons/Study"
import SvgTools from "@/assets/icons/Tools"
import avatar1 from "@/assets/images/avatar-1.png"
import avatar2 from "@/assets/images/avatar-2.png"
import avatar3 from "@/assets/images/avatar-3.png"
import avatar4 from "@/assets/images/avatar-4.png"
import avatar5 from "@/assets/images/avatar-5.png"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { useState } from "react"

const data = [
  {
    id: 1,
    icon: <SvgStudy />,
    title: "Учись быстро, используй сразу",
    text: "Быстрый вход - мощный старт",
  },
  {
    id: 2,
    icon: <SvgTools />,
    title: "Инструменты делают работу за тебя",
    text: (
      <>
        &#34;Боты, нейросети и крутые AI-
        <br />
        фишки&#34;
      </>
    ),
  },
]

const avatars = [
  { id: 1, image: avatar1 },
  { id: 2, image: avatar2 },
  { id: 3, image: avatar3 },
  { id: 4, image: avatar4 },
  { id: 5, image: avatar5 },
]

export const RightPartMain = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="flex flex-col less-desctop:gap-15">
      <div className="flex flex-col 830:flex-row less-desctop:flex-col 830:items-stretch items-center justify-between h-auto gap-5 pb-10 830:pl-0 less-desctop:pb-0">
        {data.map((item) => (
          <div className="flex w-[355px] gap-3" key={item.id}>
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#145A96] rounded-full mt-2">
              {item.icon}
            </div>
            <div className="flex flex-col leading-8">
              <p className="max-w-[258px] 830:text-[25px] text-[18.5px] 830:leading-normal leading-6">
                {item.title}
              </p>
              <p className="830:text-[20px] text-[18.5px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center less-desctop:justify-between gap-3 h-full less-desctop:items-stretch">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-5">
            {avatars.map((item) => (
              <img key={item.id} src={item.image.src} />
            ))}
          </div>
          <p>10 000+ учеников</p>
        </div>
        <div className="flex flex-col gap-3 w-full less-desctop:w-[415px] less-desctop:h-[250px] bg-blur-bg rounded-[19px] p-2">
          <iframe
            className="w-full h-full rounded-[12px]"
            src={`https://dzen.ru/embed/vmUT235lTAFc?from_block=partner&from=zen&mute=0&autoplay=0&tv=0`}
            allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
            allowFullScreen
          ></iframe>
          <ButtonGradientBlue className="w-full min-h-[48px]">
            Посмотреть как это работает
          </ButtonGradientBlue>
        </div>
      </div>
    </div>
  )
}
