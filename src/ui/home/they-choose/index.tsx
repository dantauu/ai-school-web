import { TheyChooseLeft } from "@/ui/home/they-choose/left-part"
import { TheyChooseRight } from "@/ui/home/they-choose/right-part"

export const TheyChooseSection = () => {
  return (
    <div>
      <h3 className="585:text-[45px] text-[32px] pb-5">Нас выбирают</h3>
      <div className="flex flex-col less-desctop:flex-row gap-4 justify-between chooseitems-center">
        <TheyChooseLeft />
        <TheyChooseRight />
      </div>
    </div>
  )
}
