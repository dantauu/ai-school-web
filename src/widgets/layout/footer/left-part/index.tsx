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
      <div className="1510:flex-row flex flex-col items-center 1510:gap-9 gap-4">
        <h1 className="text-[32px]">AI-school by Grafov</h1>
        <div className="1510:flex-row flex flex-col gap-5">
          {itemLeftPart.map((item) => (
            <Button key={item.id} variant="default">
              {item.icon}
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
