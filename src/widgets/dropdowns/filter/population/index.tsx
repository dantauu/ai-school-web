"use client"
import { Checkbox } from "@/shared/ui/checkboxes/checkbox"
import { useState } from "react"

export const PopulationFilter = () => {
  const [checkedItems, setCheckedItems] = useState<string>("population")

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] bg-[#18336d]">
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
