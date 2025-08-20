import Button from "@/shared/ui/buttons/button"
import SvgTicket from "@/assets/icons/Ticket";

export const LeftPart = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <h3 className="w-[300px] leading-12 text-[42px]">
        Стань тем, кого ищут на рынке
      </h3>
      <div className="flex flex-col gap-5">
        <h1 className="text-[60px]">AI-school by Grafov</h1>
        <p className="w-[540px] text-[21px]">
          Современная онлайн-школа, где ты быстро и понятно освоишь нейросети,
          ботов, AI-инструменты и начнёшь больше зарабатывать
        </p>
        <div className="w-[490px] h-[56px] flex items-center justify-center rounded-full gap-2 bg-blur-bg">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <SvgTicket />
          </div>
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
