"use client"
import { OurCourseLayout, OurCourseProps } from "@/shared/ui/cards/our-course"
import { cn } from "@/lib/utils/cn"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { useRouter } from "next/navigation"
import purpleRight from "@/assets/backgrounds/purple-right.svg"
import { useEffect, useState } from "react"

type CourseProps = {
  className?: string
  hasTittle?: boolean
  hasButton?: boolean
}

export const OurCourseSection = ({
  hasTittle = true,
  hasButton = true,
  className,
}: CourseProps) => {
  const router = useRouter()
  const [courses, setCourses] = useState<OurCourseProps[]>([])

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/mocks/courses.json")
        const data = await res.json()
        setCourses(data)
      } catch (e) {
        console.error(e)
      }
    }

    fetchCourses()
  }, [])
  return (
    <div
      className={cn(
        "flex flex-col 975:gap-7 less-desctop:mt-0 mt-7",
        className
      )}
    >
      {hasTittle && (
        <h3 className="530:text-[40px] text-[32px] 975:pb-0 pb-5.5">
          Наши курсы
        </h3>
      )}
      <div className="relative z-4 flex flex-col gap-10">
        <div className="absolute -z-2 975:-top-50 top-100">
          <img src={purpleRight.src} />
        </div>
        {courses.map((item) => (
          <OurCourseLayout key={item.id} {...item} />
        ))}
      </div>
      {hasButton && (
        <ButtonGradientWhite
          onClick={() => router.push("/course")}
          className="w-full h-[50px] text-black 975:mt-0 mt-4"
        >
          Посмотреть все курсы
        </ButtonGradientWhite>
      )}
    </div>
  )
}
