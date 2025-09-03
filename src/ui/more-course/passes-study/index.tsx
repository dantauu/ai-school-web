"use client"

import { CardBlur } from "@/shared/ui/cards/card-blur"
import SvgBook from "@/assets/icons/Book"
import SvgMaster from "@/assets/icons/Master"
import SvgPractice from "@/assets/icons/Practice"
import SvgPeoples from "@/assets/icons/Peoples"
import SvgHeadphones from "@/assets/icons/Headphones"
import SvgDiamond from "@/assets/icons/Diamond"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

const passesItemsOne = [
  { id: 1, icon: <SvgMaster />, text: "Видеоуроки" },
  {
    id: 2,
    icon: <SvgPractice />,
    text: "Практические ноутбуки с автопроверкой",
  },
  { id: 3, icon: <SvgBook />, text: "Тесты, челленджи, квизы" },
]
const passesItemsTwo = [
  {
    id: 1,
    icon: <SvgPeoples />,
    text: "Мини-командные и индивидуальные проекты",
  },
  {
    id: 2,
    icon: <SvgHeadphones />,
    text: "Практические ноутбуки с автопроверкой",
  },
  {
    id: 3,
    icon: <SvgDiamond />,
    text: "Финальные презентации с обратной связью от экспертов",
  },
]

export const PassesStudySection = () => {
  const isMedia = useMediaQuery("(max-width: 1155px)")
  return (
    <div className="flex flex-col gap-5">
      <h3 className="830:text-[42px] text-[32px] leading-8">
        <span className="text-gradient-white">Как проходит</span> обучение:
      </h3>
      {isMedia ? (
        <PassesStudyMobileSection />
      ) : (
        <div className="1155:flex-col flex flex-row gap-4 overflow-x-auto">
          <CardBlur
            classItem="w-full 1155:h-[220px] h-[150px]"
            className="flex gap-5 shrink-0 justify-between"
            classText="1155:text-[28px] text-[20px]"
            items={passesItemsOne}
          />
          <CardBlur
            classItem="w-full 1155:h-[220px] h-[150px]"
            className="flex gap-5 shrink-0 justify-between"
            classText="1155:text-[28px] text-[20px]"
            items={passesItemsTwo}
          />
        </div>
      )}
    </div>
  )
}
const itemsOneMobile = [
  {
    id: 1,
    icon: <SvgMaster className="w-[25px] h-[25x]" />,
    text: "Видеоуроки",
  },
  {
    id: 2,
    icon: <SvgPractice className="w-[25px] h-[25x]" />,
    text: "Практические ноутбуки с автопроверкой",
  },
]

const itemsTwoMobile = [
  {
    id: 1,
    icon: <SvgPeoples className="w-[25px] h-[25x]" />,
    text: "Мини-командные и индивидуальные проекты",
  },
  {
    id: 3,
    icon: <SvgBook className="w-[25px] h-[25x]" />,
    text: "Тесты, челленджи, квизы",
  },
]

const itemsThreeMobile = [
  {
    id: 2,
    icon: <SvgHeadphones className="w-[25px] h-[25x]" />,
    text: "Практические ноутбуки с автопроверкой",
  },
  {
    id: 3,
    icon: <SvgDiamond className="w-[25px] h-[25x]" />,
    text: "Финальные презентации с обратной связью от экспертов",
  },
]

const PassesStudyMobileSection = () => {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-x-auto">
        <CardBlur
          classItem="w-full h-[125px] p-2 gap-0"
          className="flex gap-2 shrink-0 justify-between"
          classText="text-[16px] leading-4.5"
          items={itemsOneMobile}
        />
        <CardBlur
          classItem="w-full h-[125px] p-2 gap-0"
          className="flex gap-2 shrink-0 justify-between"
          classText="text-[16px] leading-4.5"
          items={itemsTwoMobile}
        />
        <CardBlur
          classItem="w-full h-[125px] p-2 gap-0"
          className="flex gap-2 shrink-0 justify-between"
          classText="text-[16px] leading-4.5"
          items={itemsThreeMobile}
        />
      </div>
    </>
  )
}
