"use client"
import SvgCourse from "@/assets/icons/Course"
import Button from "@/shared/ui/buttons"
import { useRouter } from "next/navigation"

const itemLeftPart = [
  { id: 1, text: "Курсы", icon: <SvgCourse />, path: "/course" },
  { id: 2, text: "О школе", path: "/about-school" },
  { id: 3, text: "Контакты", path: "/contacts" },
  { id: 4, text: "Вопрос-ответ", path: "/questions" },
]

export const LeftPartFooter = () => {
  const router = useRouter()
  return (
    <div>
      <div className="830:flex-row flex flex-col 1510:gap-9 830:items-center gap-4">
        <h1 className="530:text-[32px] text-center text-[15px]">
          AI-school by Grafov
        </h1>
        <div className="830:flex-row flex flex-col gap-5">
          {itemLeftPart.map((item) => (
            <Button
              className="w-full 830:border-none border-b border-[#ffffff3d] pb-2"
              key={item.id}
              variant="default"
              onClick={() => router.push(item.path)}
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
