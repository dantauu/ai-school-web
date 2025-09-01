import arrow from "@/assets/images/arrow.svg"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import Link from "next/link"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"
import purpleRight from "@/assets/backgrounds/purple-right.svg"

export const WantTry = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="relative w-full 1070:h-[160px] h-full 1070:gap-10 1070:flex-row flex flex-col items-center justify-center gap-3 1070:p-0 p-5 border border-[#7f7f7f] rounded-[15px] gradient-dark-blue">
      <p className="1070:text-[48px] text-[32px] 1070:leading-10 leading-8">
        Хочешь <span className="text-gradient-white">попробовать</span> ?
      </p>
      <img className="hidden 1510:flex" src={arrow.src} />
      <div className="1070:flex-row 1070:w-auto w-full flex flex-col gap-3">
        <Link href={"/course"}>
          <ButtonGradientWhite className="1070:w-[180px] w-full h-[50px] text-black">
            Выбери курс
          </ButtonGradientWhite>
        </Link>
        <ButtonGradientBlue
          onClick={() => dispatch(openFormModal())}
          className="1070:w-[250px] w-full h-[50px]"
        >
          Помогите с выбором
        </ButtonGradientBlue>
      </div>
      <div className="absolute -z-5 1155:-top-95 -top-20">
        <img src={purpleRight.src} />
      </div>
    </div>
  )
}
