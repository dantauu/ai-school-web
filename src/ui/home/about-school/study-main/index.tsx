import SvgBrain from "@/assets/icons/Brain"
import SvgChat from "@/assets/icons/Chat"
import Button from "@/shared/ui/buttons"
import aboutImage from "@/assets/images/about-school.png"
import { CardBlur } from "@/shared/ui/cards/card-blur"

const items = [
  { id: 1, icon: <SvgBrain />, text: "Курсы направленные на практику" },
  { id: 2, icon: <SvgChat />, text: "Помогаем в процессе обучения" },
]

export const StudyMain = () => {
  return (
    <div className="flex items-stretch justify-between h-[530px]">
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="pb-3 text-[27px]">О школе</h3>
          <h3 className="w-[570px] pb-8 text-[45px] leading-12">
            <span className="text-gradient-white">Практичное обучение</span> по AI направлениям
          </h3>
          <CardBlur items={items} className="flex gap-5" />
        </div>
        <Button
          className="gradient-white w-full h-[50px] text-black"
          variant="gradient"
        >
          Подробнее
        </Button>
      </div>

      <div className="flex items-center">
        <img src={aboutImage.src} alt="О школе" />
      </div>
    </div>
  )
}
