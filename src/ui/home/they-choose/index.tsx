import { TheyChooseLeft } from "@/ui/home/they-choose/left-part"
import { TheyChooseRight } from "@/ui/home/they-choose/right-part"

export const TheyChooseSection = () => {
  return (
    <div>
      <h3 className="pb-5 text-[45px]">Нас выбирают</h3>
      <div className="flex flex-col choose:flex-row gap-4 justify-between chooseitems-center">
        <TheyChooseLeft />
        <TheyChooseRight />
      </div>
    </div>
  )
}
