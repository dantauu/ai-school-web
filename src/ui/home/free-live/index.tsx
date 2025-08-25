"use client"

import freeLiveImage from "@/assets/images/free-live.png"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

const liveListData = [
  { id: 1, text: "Познакомишься с экспертами и кураторами" },
  { id: 2, text: "Увидишь, как устроено обучение изнутри" },
  { id: 3, text: "Разберёшься, подойдёт ли тебе этот формат" },
  { id: 4, text: "Получишь ответы на все вопросы" },
  { id: 5, text: "Поймёшь, как именно ты сможешь применять AI на практике" },
]

export const FreeLiveSection = () => {
  return (
    <>
      <div className="less-desctop:flex-row flex flex-col w-full justify-between items-stretch gap-4 p-7 rounded-[15px] gradient-dark-blue-vertical">
        <div className="flex flex-1 gap-3 flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="max-w-[640px] leading-11 530:text-[47px] text-[32px]">
              Присоединяйся к{" "}
              <span className="text-gradient-white">беслатному</span> вводному
              эфиру
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-[22px] leading-7">
                Чтобы понять, куда ты идёшь и с кем будешь учиться.
              </p>
              <p className="leading-4 text-[22px]">На эфире ты:</p>
            </div>
            <ul className="flex flex-col gap-3 pl-4 pt-3">
              {liveListData.map((item) => (
                <li
                  key={item.id}
                  className="530:text-[17.8px] text-[19px] list-disc"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <ButtonGradientWhite className="less-desctop:w-[240px] w-full h-[50px] text-black">
            Записаться
          </ButtonGradientWhite>
        </div>
        <div className="flex flex-col">
          <img className="w-full h-full" src={freeLiveImage.src} />
          <div className="bg-[#308dde] p-5 rounded-[14px]">
            <p className="font-bold">
              Эфир — это не продажа, а честный взгляд на обучение.
            </p>
            <p>Без обёрток. С примерами, кейсами и живым общением.</p>
          </div>
        </div>
      </div>
    </>
  )
}
