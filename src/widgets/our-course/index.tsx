"use client"
import { courses } from "@/lib/data/course"
import { OurCourseLayout } from "@/shared/ui/cards/our-course"
import { cn } from "@/lib/utils/cn"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

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
  return (
    <div
      className={cn(
        "flex flex-col 975:gap-7 less-desctop:mt-0 mt-7",
        className
      )}
    >
      {hasTittle && <h3 className="530:text-[40px] text-[32px]">Наши курсы</h3>}
      <div className="flex flex-col gap-10">
        {courses.map((item) => (
          <OurCourseLayout
            id={item.id}
            title={item.title}
            countCourse={item.countCourse}
            img={item.img}
            description={item.description}
            descriptionAbout={item.descriptionAbout}
            list={item.list}
            price={item.price}
            titleAbout={item.titleAbout}
            key={item.id}
          />
        ))}
      </div>
      {hasButton && (
        <ButtonGradientWhite className="w-full h-[50px] text-black 975:mt-0 mt-4">
          Посмотреть все курсы
        </ButtonGradientWhite>
      )}
    </div>
  )
}
