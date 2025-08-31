import SvgVideoStudy from "@/assets/icons/VideoStudy"
import SvgPractice from "@/assets/icons/Practice"
import SvgMaster from "@/assets/icons/Master"
import SvgPeoples from "@/assets/icons/Peoples"
import SvgPencil from "@/assets/icons/Pencil"
import SvgRobot from "@/assets/icons/Robot"
import SvgDoubleChat from "@/assets/icons/DoubleChat"
import SvgBook from "@/assets/icons/Book"
import { CardBlur } from "@/shared/ui/cards/card-blur"

const dataCardsOne = [
  { id: 1, icon: <SvgVideoStudy />, text: "Видеоуроки" },
  { id: 2, icon: <SvgPractice />, text: "Практика в каждом модуле" },
  { id: 3, icon: <SvgMaster />, text: "Мастер-классы" },
  {
    id: 4,
    icon: <SvgPeoples />,
    text: "Хакатоны и командные проекты под руководством экспертов",
  },
]

const dataCardsTwo = [
  {
    id: 1,
    icon: <SvgPencil />,
    text: "Лаборатории по созданию собственных AI-проектов",
  },
  { id: 2, icon: <SvgRobot />, text: "Личный AI-ассистент" },
  { id: 3, icon: <SvgDoubleChat />, text: "Чат с кураторами" },
  { id: 4, icon: <SvgBook />, text: "Проекты и обратная связь" },
]

export const CardsHowStudy = () => {
  return (
    <div className="less-desctop:flex-col less-desctop:gap-3 flex flex-row gap-3 less-desctop:overflow-hidden overflow-x-auto">
      <CardBlur
        className="flex justify-between gap-3 shrink-0"
        classItem="less-desctop:w-full less-desctop:min-w-fit w-[300px] less-desctop:h-[180px] h-[170px] pr-5"
        classText="max-w-[453px] less-desctop:text-[25px] text-[20px]"
        items={dataCardsOne}
      />
      <CardBlur
        className="flex justify-between gap-3 shrink-0"
        classItem="w-full less-desctop:h-[180px] h-[170px] pr-5"
        classText="max-w-[453px] less-desctop:text-[25px] text-[20px]"
        items={dataCardsTwo}
      />
    </div>
  )
}
