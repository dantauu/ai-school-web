import arrow from "@/assets/images/arrow.svg"
import Button from "@/shared/ui/buttons"

export const WantTry = () => {
  return (
    <div className="w-full 1070:h-[160px] h-full 1070:gap-10 1070:flex-row flex flex-col items-center justify-center gap-3 1070:p-0 p-5 border border-white rounded-[15px] gradient-dark-blue">
      <p className="1070:text-[48px] text-[32px]">Хочешь <span className="text-gradient-white">попробовать</span> ?</p>
      <img className="hidden 1510:flex" src={arrow.src} />
      <div className="1070:flex-row 1070:w-auto w-full flex flex-col gap-3">
        <Button
          className="1070:w-[180px] w-full h-[50px] text-black gradient-white"
          variant="gradient"
        >
          Выбери курс
        </Button>
        <Button className="1070:w-[250px] w-full h-[50px] gradient-blue" variant="gradient">
          Помогите с выбором
        </Button>
      </div>
    </div>
  )
}
