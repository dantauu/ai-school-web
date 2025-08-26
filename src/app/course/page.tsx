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

const filterComponents: Record<number, React.ReactNode> = {
  1: <DirectionFilter />,
  2: <ComplexityFilter />,
  3: <LanguageFilter />,
  4: <PopulationFilter />,
}

const Course = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page") ?? 1)
  return (
    <div className="container">
      <Breadcrumbs location={"Курсы"} />
      <h3 className="text-[60px]">Наши курсы</h3>
      <div className="flex gap-5">
        {filterItems.map((item) => (
          <FilterItem key={item.id} text={item.text}>
            {filterComponents[item.id]}
          </FilterItem>
        ))}
      </div>
      <OurCourseSection hasTittle={false} hasButton={false} className="py-10" />
      <Pagination totalPages={3} currentPage={page} perPage={1} />
    </div>
  )
}

export default Course
