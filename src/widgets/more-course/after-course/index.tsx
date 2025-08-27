import { afterCourseItems } from "@/lib/data/more-course/start"
import { AfterCourse } from "@/shared/ui/more-course/after-course"

export const AfterCourseSection = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-[12px] gradient-grey border border-white">
      <h3 className="text-[42px]">После курса:</h3>
      <div className="flex justify-between gap-3">
        {afterCourseItems.map((item) => (
          <AfterCourse key={item.id} text={item.text} number={item.number} />
        ))}
      </div>
    </div>
  )
}
