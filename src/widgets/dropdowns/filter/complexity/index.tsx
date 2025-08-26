"use client"
import { Radio } from "@/shared/ui/checkboxes/radio"
import { useState } from "react"
import SvgSearch from "@/assets/icons/Search"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

export const ComplexityFilter = () => {
  const [selected, setSelected] = useState<string>("any")
  const isMedia = useMediaQuery("(max-width: 975px)")

  return (
    <div className="flex flex-col gap-3 w-full p-3 rounded-[10px] 975:bg-[#18336d]">
      {isMedia && (
        <>
          <p className="text-[24px]">Уровень сложности</p>
          <div className="flex items-center gap-2 bg-[#fff2] w-full h-[48px] px-2 rounded-[10px]">
            <SvgSearch />
            <input className="w-full h-full" placeholder="Уровень сложности" />
          </div>
        </>
      )}
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
