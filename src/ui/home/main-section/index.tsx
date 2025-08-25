import { Background } from "@/ui/home/main-section/background"
import { LeftPartMain } from "@/ui/home/main-section/left-part"
import { RightPartMain } from "@/ui/home/main-section/right-part"

export const MainSection = () => {
  return (
    <div>
      <div className="container relative h-[980px]">
        <div className="less-desctop:pt-[120px] flex flex-col less-desctop:items-center less-desctop:flex-row less-desctop:justify-between h-[780px] gap-7">
          <LeftPartMain />
          <RightPartMain />
        </div>
      </div>
      <Background />
    </div>
  )
}
