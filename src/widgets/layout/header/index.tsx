"use client"
import Button from "@/shared/ui/buttons"
import SvgCourse from "@/assets/icons/Course"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import SvgMenu from "@/assets/icons/Menu"

const items = [
  { id: 1, text: "Курсы", icon: <SvgCourse /> },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
]

const Header = () => {
  const isMedia = useMediaQuery("(max-width: 940px")
  return (
    <header className="flex items-center justify-between">
      <div className="container flex items-center justify-between">
        <h1 className="530:text-[30px] text-[16.5px]">AI-School by Grafov</h1>
        {!isMedia && (
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
        )}
        <div className="flex items-center gap-3">
          {/*<LangToggle />*/}
          {isMedia ? (
            <Button variant="default">
              <SvgMenu />
            </Button>
          ) : (
            <Button
              className="w-[170px] h-[56px] gradient-blue"
              variant="gradient"
            >
              Записаться
            </Button>
          )}
          <Button variant="blur" className="w-[130px] h-[56px] rounded-[27px]">
            Войти
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
