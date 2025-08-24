import SvgCourse from "@/assets/icons/Course"
import Button from "@/shared/ui/buttons"
import SvgTelegram from "@/assets/icons/Telegram"

const itemLeftPart = [
  { id: 1, text: "Курсы", icon: <SvgCourse /> },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
  { id: 4, text: "Вопрос-ответ" },
  { id: 5, icon: <SvgTelegram /> },
]

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

export const MenuModal = () => {
  return (
    <div className="fixed z-5 flex flex-col gap-10 w-full h-full lef-0 top-0 gradient-dark-blue-vertical px-4">
      <div className="1510:flex-row pt-30 flex flex-col 1510:gap-9 1510:items-center gap-4">
        <div className="1510:flex-row flex flex-col gap-5">
          {itemLeftPart.map((item) => (
            <Button
              className="w-full 530:border-none border-b border-[#ffffff3d] pb-2"
              key={item.id}
              variant="default"
            >
              <span
                className={`${item.id === 5 && "flex items-center justify-center w-[50px] h-[50px] rounded-full gradient-white"}`}
              >
                {item.icon}
              </span>
              {item.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="1510:flex-row flex flex-col gap-8">
        {itemRightPart.map((item) => (
          <div key={item.id}>
            <p className="text-[25px] text-gradient-white">{item.title}</p>
            <p className="max-w-[168px]">{item.description}</p>
          </div>
        ))}
        <Button className="w-full h-[50px] gradient-blue" variant="gradient">
          Записаться
        </Button>
      </div>
    </div>
  )
}
