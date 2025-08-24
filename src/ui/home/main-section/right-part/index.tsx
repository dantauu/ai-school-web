"use client"

import SvgStudy from "@/assets/icons/Study"
import SvgTools from "@/assets/icons/Tools"
import avatar1 from "@/assets/images/avatar-1.png"
import avatar2 from "@/assets/images/avatar-2.png"
import avatar3 from "@/assets/images/avatar-3.png"
import avatar4 from "@/assets/images/avatar-4.png"
import avatar5 from "@/assets/images/avatar-5.png"
import videoFrame from "@/assets/images/frame-video.png"
import { ButtonGradientBlue } from "@/shared/ui/buttons"

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
    text: "Боты, нейросети и крутые AI-фишки",
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
  return (
    <div className="flex flex-col less-desctop:gap-15">
      <div className="flex flex-row less-desctop:h-auto h-[162px] less-desctop:flex-col overflow-x-auto gap-5 pb-10 less-desctop:pb-0">
        {data.map((item) => (
          <div className="flex gap-3 shrink-0" key={item.id}>
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#145A96] rounded-full mt-2">
              {item.icon}
            </div>
            <div className="flex flex-col leading-8">
              <p className="w-[258px] text-[25px]">{item.title}</p>
              <p className="w-[330px] text-[20px]">{item.text}</p>
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
        <div className="flex flex-col gap-3 max-w-[415px] bg-blur-bg rounded-[19px] p-2">
          <img src={videoFrame.src} />
          <ButtonGradientBlue className="w-full h-[48px]">
            Посмотреть как это работает
          </ButtonGradientBlue>
        </div>
      </div>
    </div>
  )
}
