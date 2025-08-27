import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const ImportantSection = () => {
  return (
    <div className="flex items-center justify-between px-30 py-8 border border-white rounded-[12px] gradient-dark-blue">
      <div>
        <h3 className="text-[42px]">Важное — не цена, а <span className="text-gradient-white">результат</span></h3>
        <p className="max-w-[750px] text-[25px]">Ты получаешь не просто знания, а новые навыки, примеры работ и понимание, как зарабатывать с AI.</p>
      </div>
      <ButtonGradientWhite className="max-w-[340px] w-full h-[44px] text-black">Записаться на курс</ButtonGradientWhite>
    </div>
  )
}