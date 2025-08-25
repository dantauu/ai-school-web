import { DirectionFilter } from "@/widgets/dropdowns/filter/direction"
import { ComplexityFilter } from "@/widgets/dropdowns/filter/complexity"
import { LanguageFilter } from "@/widgets/dropdowns/filter/language"
import { PopulationFilter } from "@/widgets/dropdowns/filter/population"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import Button from "@/shared/ui/buttons"
import SvgCross from "@/assets/icons/Cross"
import { Dispatch, SetStateAction } from "react"

const filterComponents = [
  { id: 1, component: <DirectionFilter /> },
  { id: 2, component: <ComplexityFilter /> },
  { id: 3, component: <LanguageFilter /> },
  { id: 4, component: <PopulationFilter /> },
]

export const FilterModal = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-[#38FCFE]/30 backdrop-blur-xs" />

      <div className="relative -bottom-7 z-50 h-[80vh] mx-auto mt-40 rounded-t-xl bg-[#324673] pb-20 p-2 overflow-y-auto">
        <div className="flex justify-between items-center px-2 pt-2">
          <h3 className="text-white text-[21px] mb-4">Фильтр</h3>
          <Button onClick={() => setOpen(false)} variant="default">
            <SvgCross className="w-7 h-7 mb-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-5 shrink-0">
          {filterComponents.map((item) => (
            <div className="border-b border-[#ffffff33] pb-2" key={item.id}>
              {item.component}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5 pt-10">
          <ButtonGradientWhite className="h-[50px] text-black">
            Применить
          </ButtonGradientWhite>
          <ButtonGradientBlue className="h-[50px]">Сбросить</ButtonGradientBlue>
        </div>
      </div>
    </div>
  )
}
