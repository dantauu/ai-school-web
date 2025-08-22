import { CardsHowStudy } from "@/ui/home/how-study/cards"

export const HowStudySection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-[21px] text-[#fff6]">Как приходит обучение</p>
        <h3 className="text-[45px]">Учи, пробуй, создавай, зарабатывай</h3>
        <p className="text-[18px]">Онлайн-платформа + ИИ + живые кураторы</p>
      </div>
      <CardsHowStudy />
    </div>
  )
}
