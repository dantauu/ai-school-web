"use client"
import { Checkbox } from "@/shared/ui/checkboxes/checkbox"
import { useState } from "react"

export const LanguageFilter = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const handleChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: e.target.checked,
    }))
  }

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] bg-[#18336d]">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="any"
          checked={checkedItems["any"] || false}
          onChange={handleChange("any")}
        />
        <p>Любой</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="beginner"
          checked={checkedItems["beginner"] || false}
          onChange={handleChange("beginner")}
        />
        <p>Только на русском</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox
          id="pro"
          checked={checkedItems["pro"] || false}
          onChange={handleChange("pro")}
        />
        <p>Только на английском</p>
      </label>
    </div>
  )
}
