"use client"

import freeLiveImage from "@/assets/images/free-live.png"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

const liveListData = [
  { id: 1, text: "Познакомишься с экспертами и кураторами" },
  { id: 2, text: "Увидишь, как устроено обучение изнутри" },
  { id: 3, text: "Разберёшься, подойдёт ли тебе этот формат" },
  { id: 4, text: "Получишь ответы на все вопросы" },
  { id: 5, text: "Поймёшь, как именно ты сможешь применять AI на практике" },
]

export const FreeLiveSection = () => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="less-desctop:flex-row flex flex-col w-full justify-between items-stretch gap-4 530:p-7 p-5 rounded-[15px] gradient-dark-blue-vertical">
        <div className="flex flex-1 gap-3 flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="max-w-[640px] 530:text-[47px] text-[32px] 530:leading-11 leading-8">
              Присоединяйся к{" "}
              <span className="text-gradient-white">бесплатному</span> вводному
              эфиру
            </h3>
            <p className="530:text-[22px] text-[18px] 530:leading-normal leading-5 pt-2">
              Чтобы понять, куда ты идёшь и с кем будешь учиться.
              <br /> На эфире ты:
            </p>
            <ul className="flex flex-col gap-1.5 pl-4 pt-3">
              {liveListData.map((item) => (
                <li
                  key={item.id}
                  className="530:text-[17.8px] text-[16px] 530:leading-normal leading-5 list-disc"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <ButtonGradientWhite
            onClick={() => dispatch(openFormModal())}
            className="less-desctop:w-[240px] w-full h-[50px] text-black"
          >
            Записаться
          </ButtonGradientWhite>
        </div>
        <div className="flex flex-col">
          <img className="w-full h-full" src={freeLiveImage.src} />
          <div className="flex flex-col gap-2 bg-[#308dde] p-5 rounded-[14px]">
            <p className="font-medium leading-5">
              Эфир — это не продажа, а честный взгляд на обучение.
            </p>
            <p className="leading-5">
              Без обёрток. С примерами, кейсами и живым общением.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
