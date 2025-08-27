import { KidsBottom } from "@/ui/more-course/kids/bottom"
import { KidsTop } from "@/ui/more-course/kids/top"

export const KidsSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <KidsTop />
      <KidsBottom />
    </div>
  )
}
