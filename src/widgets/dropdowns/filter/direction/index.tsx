import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import SvgSearch from "@/assets/icons/Search"
import { useState } from "react"
import { Checkbox } from "@/shared/ui/checkboxes/checkbox"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

export const DirectionFilter = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const isMedia = useMediaQuery("(max-width: 975px)")

  const handleChange =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems((prev) => ({
        ...prev,
        [id]: e.target.checked,
      }))
    }
  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] 975:bg-[#18336d]">
      {isMedia && <p className="text-[24px]">Выбрать направление</p>}
      <div className="flex items-center gap-2 bg-[#fff2] w-full 975:h-[60px] h-[48px] px-2 rounded-[10px]">
        <SvgSearch />
        <input className="w-full h-full" placeholder="Найти направление" />
      </div>
      <div className="975:h-[90px] h-[100px] overflow-y-auto flex flex-col gap-2 scrollbar">
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            id="any1"
            checked={checkedItems["any1"] || false}
            onChange={handleChange("any1")}
          />
          <p>Направление</p>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            id="an2"
            checked={checkedItems["any2"] || false}
            onChange={handleChange("any2")}
          />
          <p>Направление</p>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            id="any3"
            checked={checkedItems["any3"] || false}
            onChange={handleChange("any3")}
          />
          <p>Направление</p>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            id="any4"
            checked={checkedItems["any4"] || false}
            onChange={handleChange("any4")}
          />
          <p>Направление</p>
        </label>
      </div>
      {!isMedia && (
        <ButtonGradientWhite className="w-full h-[50px] text-black">
          Применить
        </ButtonGradientWhite>
      )}
    </div>
  )
}
