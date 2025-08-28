import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const RoadAiSection = () => {
  return (
    <div className="975:flex-row flex flex-col items-center justify-between gap-4 975:px-15 px-2 py-10 border border-[#7D87A5] rounded-[12px] gradient-dark-blue">
      <div>
        <h3 className="830:text-[42px] text-[24px] less-desctop:leading-normal leading-9">
          Курс, с которого у твоего ребёнка начнётся путь в AI
        </h3>
        <p className="text-[18px] pt-4">
          Не про теорию. Про навыки, которые нужны уже сейчас
        </p>
      </div>
      <ButtonGradientWhite className="975:w-[220px] w-full h-[50px] text-black">
        Задать вопрос
      </ButtonGradientWhite>
    </div>
  )
}
