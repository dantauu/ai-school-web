import SvgBook from "@/assets/icons/Book"
import SvgSuiteCase from "@/assets/icons/SuiteCase"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import SvgBrainSchema from "@/assets/icons/BrainSchema"

const itemsDifference = [
  {
    id: 1,
    text: "Учим так, чтобы понял даже новичок, но не заскучал и эксперт",
    icon: <SvgBook className="min-w-[27px] min-h-[27px]" />,
  },
  {
    id: 2,
    text: "Строим курс как систему: от первых шагов до прокачанного портфолио",
    icon: <SvgSuiteCase className="min-w-[27px] min-h-[27px]" />,
  },
  {
    id: 3,
    text: "Используем передовые AI-решения внутри самого обучения",
    icon: <SvgBrainSchema className="min-w-[27px] min-h-[27px]" />,
  },
]

export const DifferenceSection = () => {
  return (
    <div className="1070:flex-row flex flex-col gap-5 justify-between">
      <div className="flex flex-col gap-5 w-full gradient-dark-blue-vertical rounded-[15px] p-5">
        <div className="flex flex-col gap-2">
          <p className="530:text-[45px] text-[32px]">Чем отличаемся?</p>
          <p className="max-w-[465px] text-[19px]">
            AI-school by Grafov — это не про «посмотреть пару видео».{" "}
            <span className="text-gradient-white">
              Это место, где ты встаёшь на рельсы новой профессии
            </span>
            , с поддержкой и с пониманием, куда ты идёшь.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {itemsDifference.map((item) => (
            <div
              className="w-full flex items-center gap-4 rounded-[12px] p-2 bg-[#1b72bd]"
              key={item.id}
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-5 gradient-purple rounded-[15px] p-5">
        <div className="flex flex-col gap-4">
          <p className="530:text-[35px] 530:leading-9 leading-7 text-[25px] max-w-[590px]">
            Мы уже учим тех, кого завтра{" "}
            <span className="text-gradient-white">
              будут называть экспертами
            </span>
          </p>
          <p className="text-[19px]">Хочешь быть среди них? Присоединяйся.</p>
        </div>
        <ButtonGradientBlue className="w-full h-[50px]">
          Начать учиться
        </ButtonGradientBlue>
      </div>
    </div>
  )
}
