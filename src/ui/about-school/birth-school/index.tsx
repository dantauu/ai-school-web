import { CardBlur } from "@/shared/ui/cards/card-blur"
import SvgBook from "@/assets/icons/Book"
import SvgMaster from "@/assets/icons/Master"
import SvgHeart from "@/assets/icons/Heart"

const itemsBirthSchool = [
  { id: 1, text: "Курсы где нет воды", icon: <SvgBook /> },
  {
    id: 2,
    text: "Практикующие лекторы, которые сами в теме",
    icon: <SvgMaster />,
  },
  {
    id: 3,
    text: "Обучение, в котором ты не будешь один на один",
    icon: <SvgHeart />,
  },
]

export const BirthSchoolSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="530:text-[45px] 530:leading-10 text-[32px] max-w-[620px] leading-9">
        AI-school by Grafov появилась{" "}
        <span className="text-gradient-white">не ради хайпа на нейросетях</span>
      </h1>
      <div>
        <CardBlur
          className="w-full flex gap-5 justify-between overflow-x-auto"
          classItem="530:max-w-[510px] 530:h-[220px] h-auto w-[308px] 530:w-full shrink-0"
          classText="530:text-[24px] text-[19px] max-w-[430px]"
          items={itemsBirthSchool}
        />
      </div>
    </div>
  )
}
