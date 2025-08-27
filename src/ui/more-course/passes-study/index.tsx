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
      <h3 className="text-[42px]">
        <span className="text-gradient-white">Как проходит</span> обучение:
      </h3>
      <div className="1155:flex-col flex justify-between flex-row gap-4 overflow-x-auto">
        <CardBlur
          classItem="1155:w-full w-fit pr-40"
          className="flex justify-between gap-5 w-full shrink-0"
          items={passesItemsOne}
        />
        <CardBlur
          classItem="1155:w-full w-fit pr-40"
          className="flex justify-between gap-5 w-full shrink-0"
          items={passesItemsTwo}
        />
      </div>
    </div>
  )
}
