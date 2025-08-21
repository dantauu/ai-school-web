import { courses } from "@/lib/data/course"
import { OurCourseLayout } from "@/shared/ui/cards/our-course"
import { cn } from "@/lib/utils/cn"
import Button from "@/shared/ui/buttons"

export type ListItem = {
  id: number
  text: string
}

export type OurCourseProps = {
  id: number
  countCourse: number
  title: string
  list: ListItem[]
  price: string
  titleAbout: string
  descriptionAbout: string
  img: string
  description: string
}

export const OurCourseSection = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h3 className="text-[40px]">Наши курсы</h3>
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
      <Button
        className="w-full h-[50px] text-black gradient-white"
        variant="gradient"
      >
        Посмотреть все курсы
      </Button>
    </div>
  )
}
