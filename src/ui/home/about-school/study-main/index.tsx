"use client"
import SvgBrain from "@/assets/icons/Brain"
import SvgChat from "@/assets/icons/Chat"
import aboutImage from "@/assets/images/about-school.png"
import { CardBlur } from "@/shared/ui/cards/card-blur"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

const items = [
  { id: 1, icon: <SvgBrain />, text: "Курсы направленные на практику" },
  { id: 2, icon: <SvgChat />, text: "Помогаем в процессе обучения" },
]

export const StudyMain = () => {
  return (
    <div className="choose:flex-row flex flex-col items-stretch justify-between choose:h-[530px] h-full">
      <div className="flex flex-col gap-5 justify-between">
        <div>
          <h3 className="pb-3 text-[27px]">О школе</h3>
          <h3 className="max-w-[570px] pb-8 text-[45px] leading-12">
            <span className="text-gradient-white">Практичное обучение</span> по
            AI направлениям
          </h3>
          <CardBlur
            items={items}
            classItem="shrink-0"
            className="overflow-x-auto flex gap-5"
          />
        </div>
        <ButtonGradientWhite className="w-full h-[50px] text-black">
          Подробнее
        </ButtonGradientWhite>
      </div>

      <div className="flex items-center">
        <img src={aboutImage.src} alt="О школе" />
      </div>
    </div>
  )
}
