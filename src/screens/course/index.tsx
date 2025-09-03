"use client"
import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { FilterItem } from "@/shared/ui/filters/filter-item/inedx"
import { filterItems } from "@/lib/data/filter"
import { DirectionFilter } from "@/widgets/dropdowns/filter/direction"
import { OurCourseSection } from "@/widgets/our-course"
import { ComplexityFilter } from "@/widgets/dropdowns/filter/complexity"
import { LanguageFilter } from "@/widgets/dropdowns/filter/language"
import { PopulationFilter } from "@/widgets/dropdowns/filter/population"
import { Pagination } from "@/shared/ui/pagination"
import { useSearchParams } from "next/navigation"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { useEffect, useState } from "react"
import { FilterModal } from "@/widgets/modals/filter"
import Button from "@/shared/ui/buttons"
import SvgFilter from "@/assets/icons/Filter"
import FormRequestWidget from "@/widgets/form-request"

const filterComponents: Record<number, React.ReactNode> = {
  1: <DirectionFilter />,
  2: <ComplexityFilter />,
  3: <LanguageFilter />,
  4: <PopulationFilter />,
}

export const CoursePage = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page") ?? 1)
  const isMedia = useMediaQuery("(max-width: 975px)")
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [open])
  return (
    <div>
      <div className="container flex flex-col gap-4">
        <Breadcrumbs className="pt-5" location={"Курсы"} />
        <h3 className="975:text-[60px] text-[40px]">Наши курсы</h3>
        {isMedia ? (
          <Button
            className="flex items-center w-full h-[60px] justify-between bg-blur-bg rounded-[10px] px-3 cursor-pointer"
            variant="default"
            onClick={() => setOpen((prev) => !prev)}
          >
            <p>Настроить фильтры</p>
            <SvgFilter />
          </Button>
        ) : (
          <div className="flex gap-5">
            {filterItems.map((item) => (
              <FilterItem
                icon={item.id === 4 && <SvgFilter />}
                key={item.id}
                text={item.text}
              >
                {filterComponents[item.id]}
              </FilterItem>
            ))}
          </div>
        )}
        <OurCourseSection
          hasTittle={false}
          hasButton={false}
          className="less-desctop:py-10 pb-5"
        />
      </div>
      <Pagination totalPages={3} currentPage={page} perPage={1} />
      {open && <FilterModal setOpen={setOpen} />}
      <FormRequestWidget
        className="mt-20"
        text={
          <>
            Готовы <span className="text-gradient-white">прокачаться</span> в
            AI?
          </>
        }
        description={
          "Оставь заявку — наш специалист подскажет, какой курс подходит именно тебе, ответит на все вопросы и поможет стартовать без стресса."
        }
      />
    </div>
  )
}
