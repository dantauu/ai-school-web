import { afterCourseItems } from "@/lib/data/more-course/career-start"
import { AfterCourse } from "@/shared/ui/more-course/after-course"

export const AfterCourseSection = () => {
  return (
    <div className="flex flex-col gap-3 1070:p-5 p-3 rounded-[12px] border border-white">
      <h3 className="530:text-[42px] text-[29px]">После курса:</h3>
      <div className="1070:flex-row flex flex-col justify-between gap-3">
        {afterCourseItems.map((item) => (
          <AfterCourse key={item.id} text={item.text} number={item.number} />
        ))}
      </div>
    </div>
  )
}
