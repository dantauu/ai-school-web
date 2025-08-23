import SvgCourse from "@/assets/icons/Course"
import Button from "@/shared/ui/buttons"

const itemLeftPart = [
  { id: 1, text: "Курсы", icon: <SvgCourse /> },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
  { id: 4, text: "Вопрос-ответ" },
]

export const LeftPartFooter = () => {
  return (
    <div>
      <div className="1510:flex-row flex flex-col 1510:gap-9 1510:items-center gap-4">
        <h1 className="530:text-[32px] text-center text-[15px]">
          AI-school by Grafov
        </h1>
        <div className="1510:flex-row flex flex-col gap-5">
          {itemLeftPart.map((item) => (
            <Button
              className="w-full 530:border-none border-b border-[#ffffff3d] pb-2"
              key={item.id}
              variant="default"
            >
              {item.icon}
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
