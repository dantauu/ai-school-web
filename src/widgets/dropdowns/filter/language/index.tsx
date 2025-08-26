"use client"
import { useState } from "react"
import { Radio } from "@/shared/ui/checkboxes/radio"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

export const LanguageFilter = () => {
  const [checkedItems, setCheckedItems] = useState<string>("any")
  const isMedia = useMediaQuery("(max-width: 975px)")

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] 975:bg-[#18336d]">
      {isMedia && <p className="text-[24px]">Язык</p>}
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
