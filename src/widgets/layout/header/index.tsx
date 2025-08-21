import Button from "@/shared/ui/buttons/button"
import SvgCourse from "@/assets/icons/Course"

const items = [
  { id: 1, text: "Курсы", icon: <SvgCourse /> },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
]

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[30px]">AI-School by Grafov</h1>
      <div className="flex gap-8">
        {items.map((item) => (
          <div key={item.id}>
            <Button variant="default">
              {item.icon}
              {item.text}
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        {/*<LangToggle />*/}
        <Button className="w-[170px] h-[56px] gradient-blue" variant="gradient">
          Записаться
        </Button>
        <Button variant="blur" className="w-[130px] h-[56px] rounded-[27px]">
          Войти
        </Button>
      </div>
    </div>
  )
}

export default Header
