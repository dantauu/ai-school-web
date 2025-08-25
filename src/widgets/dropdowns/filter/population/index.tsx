"use client"
import { Checkbox } from "@/shared/ui/checkboxes/checkbox"
import { useState } from "react"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

export const PopulationFilter = () => {
  const [checkedItems, setCheckedItems] = useState<string>("population")
  const isMedia = useMediaQuery("(max-width: 975px)")

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] 975:bg-[#18336d]">
      {isMedia && <p className="text-[24px]">Сортировать:</p>}
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="population"
          checked={checkedItems === "population"}
          onChange={() => setCheckedItems("population")}
        />
        <p>По популярности</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="age"
          checked={checkedItems === "age"}
          onChange={() => setCheckedItems("age")}
        />
        <p>По возрасту цены</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="price"
          checked={checkedItems === "price"}
          onChange={() => setCheckedItems("price")}
        />
        <p>По убыванию цены</p>
      </label>
    </div>
  )
}
