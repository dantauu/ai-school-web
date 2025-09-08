import SvgCourse from "@/assets/icons/Course"
import Button from "@/shared/ui/buttons"
import SvgTelegram from "@/assets/icons/Telegram"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

const itemTopPart = [
  { id: 1, text: "Курсы", icon: <SvgCourse />, path: "/course" },
  { id: 2, text: "О школе", path: "/about-school" },
  { id: 3, text: "Контакты", path: "/contacts" },
  { id: 4, text: "Вопрос-ответ", path: "/questions" },
  { id: 5, icon: <SvgTelegram />, path: "/" },
]

const itemBottomPart = [
  {
    id: 1,
    title: "+7 987 654-32-10",
    link: "tel:+7987654-32-10",
    description: "Вопросы по покупке и содержанию курсов",
  },
  {
    id: 2,
    title: "help@email.com",
    link: "mailto:help@email.com",
    description: "Вопросы по учебному процессу",
  },
]

export const MenuModal = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const route = useRouter()
  const handleRoute = (path: string) => {
    route.push(path)
    setOpen(false)
  }
  const dispatch = useAppDispatch()
  const handleClick = () => {
    setOpen(false)
    dispatch(openFormModal())
  }
  return (
    <div className="fixed z-5 flex flex-col gap-10 w-full h-full lef-0 top-0 gradient-dark-blue-vertical px-4">
      <div className="1510:flex-row pt-30 flex flex-col 1510:gap-9 1510:items-center gap-4">
        <div className="1510:flex-row flex flex-col gap-5">
          {itemTopPart.map((item) => (
            <Button
              className="w-full 530:border-none border-b border-[#ffffff3d] pb-2"
              key={item.id}
              variant="default"
              onClick={() => handleRoute(item.path)}
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
      <div className="flex flex-col gap-4">
        {itemBottomPart.map((item) => (
          <div key={item.id}>
            <a href={item.link}>
              <p className="text-[21.5px] text-gradient-white">{item.title}</p>
            </a>
            <p className="max-w-[168px]">{item.description}</p>
          </div>
        ))}
        <Button
          onClick={handleClick}
          className="w-full h-[50px] gradient-blue"
          variant="gradient"
        >
          Записаться
        </Button>
      </div>
    </div>
  )
}
