import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const RoadAiSection = () => {
  return (
    <div className="flex items-center justify-between px-30 py-10 border border-[#7D87A5] rounded-[12px] gradient-dark-blue">
      <div>
        <h3 className="text-[42px]">
          Курс, с которого у твоего ребёнка начнётся путь в AI
        </h3>
        <p className="text-[18px]">
          Не про теорию. Про навыки, которые нужны уже сейчас
        </p>
      </div>
      <ButtonGradientWhite className="w-[220px] h-[50px] text-black">
        Задать вопрос
      </ButtonGradientWhite>
    </div>
  )
}
