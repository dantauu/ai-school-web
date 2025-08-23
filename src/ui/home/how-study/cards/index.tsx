import SvgVideoStudy from "@/assets/icons/VideoStudy"
import SvgPractice from "@/assets/icons/Practice"
import SvgMaster from "@/assets/icons/Master"
import SvgPeoples from "@/assets/icons/Peoples"
import SvgPencil from "@/assets/icons/Pencil"
import SvgRobot from "@/assets/icons/Robot"
import SvgDoubleChat from "@/assets/icons/DoubleChat"
import SvgBook from "@/assets/icons/Book"
import { CardBlur } from "@/shared/ui/cards/card-blur"

const dataCards = [
  { id: 1, icon: <SvgVideoStudy />, text: "Видеоуроки" },
  { id: 2, icon: <SvgPractice />, text: "Практика в каждом модуле" },
  { id: 3, icon: <SvgMaster />, text: "Мастер-классы" },
  {
    id: 4,
    icon: <SvgPeoples />,
    text: "Хакатоны и командные проекты под руководством экспертов",
  },
  {
    id: 5,
    icon: <SvgPencil />,
    text: "Лаборатории по созданию собственных AI-проектов",
  },
  { id: 6, icon: <SvgRobot />, text: "Личный AI-ассистент" },
  { id: 7, icon: <SvgDoubleChat />, text: "Чат с кураторами" },
  { id: 8, icon: <SvgBook />, text: "Проекты и обратная связь" },
]

export const CardsHowStudy = () => {
  return (
    <div>
      <CardBlur
        className="flex 1510:flex-wrap gap-3 overflow-x-auto"
        classItem="w-fit h-[180px] pr-9 shrink-0"
        classText="max-w-[453px] text-[25px]"
        items={dataCards}
      />
    </div>
  )
}
