import { CardsHowStudy } from "@/ui/home/how-study/cards"
import purpleLeft from "@/assets/backgrounds/purple-left.svg"

export const HowStudySection = () => {
  return (
    <div className="relative flex flex-col gap-5">
      <div>
        <p className="text-[21px] text-[#fff6]">Как приходит обучение</p>
        <h3 className="585:text-[45px] text-[32px] leading-9 585:leading-11">
          Учи, пробуй, <span className="text-gradient-white">создавай</span>,
          зарабатывай
        </h3>
        <p className="pt-3 text-[18.5px]">
          Онлайн-платформа + ИИ + живые кураторы
        </p>
      </div>
      <CardsHowStudy />
      <div className="absolute 830:-top-50 top-15 -z-5">
        <img src={purpleLeft.src} />
      </div>
    </div>
  )
}
