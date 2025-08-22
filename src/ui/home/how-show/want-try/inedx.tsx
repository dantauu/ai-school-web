import arrow from "@/assets/images/arrow.svg"
import Button from "@/shared/ui/buttons"

export const WantTry = () => {
  return (
    <div className="w-full h-[160px] flex items-center justify-center gap-10 border border-white rounded-[15px] gradient-dark-blue">
      <p className="text-[48px]">Хочешь попробовать ?</p>
      <img src={arrow.src} />
      <div className="flex gap-3">
        <Button
          className="w-[180px] h-[50px] text-black gradient-white"
          variant="gradient"
        >
          Выбери курс
        </Button>
        <Button className="w-[250px] h-[50px] gradient-blue" variant="gradient">
          Помогите с выбором
        </Button>
      </div>
    </div>
  )
}
