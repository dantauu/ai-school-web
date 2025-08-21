import SvgBrain from "@/assets/icons/Brain"
import SvgChat from "@/assets/icons/Chat"
import Button from "@/shared/ui/buttons/button"
import aboutImage from "@/assets/images/about-school.png"

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
            Практичное обучение по AI направлениям
          </h3>
          <div className="flex gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-[410px] h-[220px] flex flex-col justify-center gap-3 border bg-blur-bg border-white rounded-[15px] p-5"
              >
                {item.icon}
                <p className="text-[28px]">{item.text}</p>
              </div>
            ))}
          </div>
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
