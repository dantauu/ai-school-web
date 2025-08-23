import Button from "@/shared/ui/buttons"
import howShowImage from "@/assets/images/how-show.png"
import { Play } from "@/shared/ui/buttons/play"
import { WantTry } from "@/ui/home/how-show/want-try/inedx"

export const HowShowSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-30">
        <div className="w-full h-[480px] flex justify-between p-7 border rounded-[15px] border-white gradient-grey">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="max-w-[600px] text-[48px]">
              Как выглядит обучение внутри ?
            </h3>
            <p className="text-[20px]">1 минута - и ты всё поймёшь</p>
            <Button
              className="w-[240px] h-[50px] gradient-blue"
              variant="gradient"
            >
              Смотреть
            </Button>
          </div>
          <div className="relative">
            <img src={howShowImage.src} />
            <Play className="absolute inset-0 flex justify-center items-center" />
          </div>
        </div>
        <WantTry />
      </div>
    </div>
  )
}
