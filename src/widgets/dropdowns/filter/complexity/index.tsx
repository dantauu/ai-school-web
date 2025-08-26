"use client"
import { Radio } from "@/shared/ui/checkboxes/radio"
import { useState } from "react"

export const ComplexityFilter = () => {
  const [selected, setSelected] = useState<string>("any")

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] bg-[#18336d]">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="any"
          name="complexity"
          checked={selected === "any"}
          onChange={() => setSelected("any")}
        />
        <p>Любой</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="beginner"
          name="complexity"
          checked={selected === "beginner"}
          onChange={() => setSelected("beginner")}
        />
        <p>Для новичка</p>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          id="pro"
          name="complexity"
          checked={selected === "pro"}
          onChange={() => setSelected("pro")}
        />
        <p>Для специалистов</p>
      </label>
    </div>
  )
}
