import { Background } from "@/ui/home/main-section/background"
import { LeftPartMain } from "@/ui/home/main-section/left-part"
import { RightPartMain } from "@/ui/home/main-section/right-part"

export const MainSection = () => {
  return (
    <div>
      <div className="container relative h-[980px]">
        <div className="pt-[120px] flex justify-between h-[780px]">
          <LeftPartMain />
          <RightPartMain />
        </div>
      </div>
      <Background />
    </div>
  )
}
