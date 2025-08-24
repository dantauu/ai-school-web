import { CardsHowStudy } from "@/ui/home/how-study/cards"

export const HowStudySection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-[21px] text-[#fff6]">Как приходит обучение</p>
        <h3 className="leading-11 text-[45px]">
          Учи, пробуй, <span className="text-gradient-white">создавай</span>,
          зарабатывай
        </h3>
        <p className="pt-3 text-[18.5px]">
          Онлайн-платформа + ИИ + живые кураторы
        </p>
      </div>
      <CardsHowStudy />
    </div>
  )
}
