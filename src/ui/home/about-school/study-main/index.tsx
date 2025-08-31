"use client"
import SvgBrain from "@/assets/icons/Brain"
import SvgChat from "@/assets/icons/Chat"
import aboutImage from "@/assets/images/about-school.png"
import { CardBlur } from "@/shared/ui/cards/card-blur"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import Link from "next/link"
import purpleLeft from "@/assets/backgrounds/purple-left.svg"

const items = [
  { id: 1, icon: <SvgBrain />, text: "Курсы направленные на практику" },
  { id: 2, icon: <SvgChat />, text: "Помогаем в процессе обучения" },
]

export const StudyMain = () => {
  return (
    <div className="less-desctop:flex-row flex flex-col items-stretch justify-between choose:h-[530px] h-full 585:gap-0 gap-5">
      <div className="flex flex-col gap-5 justify-between">
        <div>
          <h3 className="pb-3 530:text-[27px] text-[20px]">О школе</h3>
          <h3 className="530:text-[45px] text-[32px] max-w-[570px] pb-8 530:leading-12 leading-10">
            <span className="text-gradient-white">Практичное обучение</span> по
            AI направлениям
          </h3>
          <div className="relative">
            <CardBlur
              items={items}
              classItem="less-desctop:shrink less-desctop:w-full shrink-0 w-[308px] 975:h-auto h-fit"
              classText="less-desctop:text-[28px] max-w-full text-[20px]"
              className="overflow-x-auto flex justify-between gap-3"
            />
            <div className="absolute w-full h-full less-desctop:-top-40 less-desctop:left-50 -top-15 -z-5">
              <img src={purpleLeft.src} />
            </div>
          </div>
        </div>
        <Link href={"/about-school"}>
          <ButtonGradientWhite className="w-full h-[50px] text-black">
            Подробнее
          </ButtonGradientWhite>
        </Link>
      </div>

      <div className="flex">
        <img className="w-full" src={aboutImage.src} alt="О школе" />
      </div>
    </div>
  )
}
