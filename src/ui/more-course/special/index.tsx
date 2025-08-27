
import { SpecialBottom } from "@/ui/more-course/special/bottom"
import { SpecialTop } from "@/ui/more-course/special/top"

export const SpecialSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SpecialTop />
      <SpecialBottom />
    </div>
  )
}
