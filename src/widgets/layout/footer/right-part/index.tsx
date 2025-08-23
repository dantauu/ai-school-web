import Button from "@/shared/ui/buttons"
import SvgTelegram from "@/assets/icons/Telegram"

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
    <div className="1510:flex-row flex flex-col gap-5">
      <div className="1510:flex-row flex flex-col gap-8">
        {itemRightPart.map((item) => (
          <div key={item.id}>
            <p className="text-[25px]">{item.title}</p>
            <p className="max-w-[168px]">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="1510:flex-row flex flex-col gap-4">
        <Button
          className="w-[50px] h-[50px] rounded-full gradient-white"
          variant="default"
        >
          <SvgTelegram />
        </Button>
        <Button
          className="w-[191px] h-[50px] gradient-white text-black"
          variant="gradient"
        >
          Выбрать курс
        </Button>
      </div>
    </div>
  )
}
