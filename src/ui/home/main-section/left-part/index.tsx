import Button from "@/shared/ui/buttons/button"

export const LeftPart = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <h3 className="w-[300px] leading-12 text-[42px]">
        Стань тем, кого ищут на рынке
      </h3>
      <div>
        <h1 className="text-[60px]">AI-school by Grafov</h1>
        <p className="w-[540px] text-[21px]">
          Современная онлайн-школа, где ты быстро и понятно освоишь нейросети,
          ботов, AI-инструменты и начнёшь больше зарабатывать
        </p>
        <div className="w-[470px] h-[56px] flex items-center justify-center rounded-full gap-2 bg-blur-bg">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <p>Твой билет в цифровую эпоху</p>
          <Button
            variant="gradient"
            className="w-[190px] h-[45px] text-[16px] gradient-white text-black"
          >
            Выбрать свой курс
          </Button>
        </div>
      </div>
    </div>
  )
}
