import { CardBlur } from "@/shared/ui/cards/card-blur"
import SvgBook from "@/assets/icons/Book"
import SvgMaster from "@/assets/icons/Master"
import SvgPractice from "@/assets/icons/Practice"
import SvgPeoples from "@/assets/icons/Peoples"
import SvgHeadphones from "@/assets/icons/Headphones"
import SvgDiamond from "@/assets/icons/Diamond"

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
  { id: 3, icon: <SvgDiamond />, text: "Тесты, челленджи, квизы" },
]

export const PassesStudySection = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="830:text-[42px] text-[32px]">
        <span className="text-gradient-white">Как проходит</span> обучение:
      </h3>
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
    </div>
  )
}
