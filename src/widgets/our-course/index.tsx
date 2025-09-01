"use client"
import { courses } from "@/lib/data/course"
import { OurCourseLayout } from "@/shared/ui/cards/our-course"
import { cn } from "@/lib/utils/cn"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { useRouter } from "next/navigation"
import purpleRight from "@/assets/backgrounds/purple-right.svg"

type OurCourseProps = {
  className?: string
  hasTittle?: boolean
  hasButton?: boolean
}

export const OurCourseSection = ({
  hasTittle = true,
  hasButton = true,
  className,
}: OurCourseProps) => {
  const router = useRouter()
  return (
    <div
      className={cn(
        "flex flex-col 975:gap-7 less-desctop:mt-0 mt-7",
        className
      )}
    >
      {hasTittle && <h3 className="530:text-[40px] text-[32px]">Наши курсы</h3>}
      <div className="relative z-4 flex flex-col gap-10">
        <div className="absolute -z-2 975:-top-50 top-100 w-full h-full">
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
