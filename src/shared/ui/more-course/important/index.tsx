import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const ImportantSection = () => {
  return (
    <div className="form:flex-row flex flex-col items-center justify-between gap-2 form:px-30 px-4 py-8 border border-white rounded-[12px] gradient-dark-blue">
      <div>
        <h3 className="830:text-[42px] text-[24px] 830:leading-normal leading-7 pb-3">
          Важное — не цена, а{" "}
          <span className="text-gradient-white">результат</span>
        </h3>
        <p className="max-w-[750px] text-[25px] leading-7">
          Ты получаешь не просто знания, а новые навыки, примеры работ и
          понимание, как зарабатывать с AI.
        </p>
      </div>
      <ButtonGradientWhite className="form:max-w-[340px] w-full h-[44px] text-black">
        Записаться на курс
      </ButtonGradientWhite>
    </div>
  )
}
