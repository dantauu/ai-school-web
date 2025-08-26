"use client"
import { useState } from "react"
import { Radio } from "@/shared/ui/checkboxes/radio"

export const LanguageFilter = () => {
  const [checkedItems, setCheckedItems] = useState<string>("any")


  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] bg-[#18336d]">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="any"
          name="language"
          checked={checkedItems === "any"}
          onChange={() => setCheckedItems("any")}
        />
        <p>Любой</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="russia"
          name="russia"
          checked={checkedItems === "russia"}
          onChange={() => setCheckedItems("russia")}
        />
        <p>Только на русском</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="english"
          name="english"
          checked={checkedItems === "english"}
          onChange={() => setCheckedItems("english")}
        />
        <p>Только на английском</p>
      </label>
    </div>
  )
}
