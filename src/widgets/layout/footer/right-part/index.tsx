import Button from "@/shared/ui/buttons"
import SvgTelegram from "@/assets/icons/Telegram"
import Link from "next/link"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

const itemRightPart = [
  {
    id: 1,
    title: "+7 987 654-32-10",
    description: "Вопросы по покупке и содержанию курсов",
  },
  {
    id: 2,
    title: "help@email.com",
    description: "Вопросы по учебному процессу",
  },
]

export const RightPartFooter = () => {
  return (
    <div className="830:flex-row flex flex-col gap-5">
      <div className="830:flex-row flex flex-col gap-8">
        {itemRightPart.map((item) => (
          <div key={item.id}>
            <p className="830:text-[25px] text-[20px] text-gradient-white">
              {item.title}
            </p>
            <p className="max-w-[168px]">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          className="w-[50px] h-[50px] rounded-full gradient-white"
          variant="default"
        >
          <SvgTelegram />
        </Button>
        <Link className="flex-1" href={"/course"}>
          <ButtonGradientWhite
            className="830:w-[191px] w-full h-[50px] gradient-white text-black"
          >
            Выбрать курс
          </ButtonGradientWhite>
        </Link>
      </div>
    </div>
  )
}
