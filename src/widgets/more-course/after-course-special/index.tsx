import { AfterCourse } from "@/shared/ui/more-course/after-course"
import { afterCourseSpecialItems } from "@/lib/data/more-course/for-special"

export const AfterSpecialSection = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-[12px] gradient-grey border border-white">
      <h3 className="530:text-[42px] text-[32px]">После курса:</h3>
      <div className="1070:flex-row flex flex-col justify-between gap-3">
        {afterCourseSpecialItems.map((item) => (
          <AfterCourse key={item.id} text={item.text} number={item.number} />
        ))}
      </div>
    </div>
  )
}
