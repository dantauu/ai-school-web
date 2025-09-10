import { ReviewsSection } from "@/shared/ui/reviews"
import { StartSection } from "@/ui/more-course/start"
import { Skills } from "@/shared/ui/more-course/skills"
import { resultList, skillsList } from "@/lib/data/more-course/career-start"
import { PassesStudySection } from "@/ui/more-course/passes-study"
import { AfterCourseSection } from "@/widgets/more-course/after-course"
import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { CouchSection } from "@/widgets/more-course/couch"
import { PriceSection } from "@/shared/ui/more-course/price"
import { ImportantSection } from "@/shared/ui/more-course/important"
import { reviewsHome } from "@/lib/data/reviews"

export const CareerStartPage = () => {
  return (
    <div className="mx-auto container">
      <Breadcrumbs
        className="py-[30px]"
        location={"Карьерный старт в AI"}
      />
      <div className="flex flex-col 530:gap-25 gap-15">
        <StartSection />
        <Skills
          likeText={
            "Прямое применение AI в профессии уже после первых занятий."
          }
          titleLeft={"Что вы освоите:"}
          className="gradient-cold-blue"
          skillsItems={skillsList}
          resultItems={resultList}
        />
        <PassesStudySection />
        <AfterCourseSection />
        <CouchSection
          description={
            "Наставники, которые помогут тебе освоить AI и применить в жизни"
          }
        />
        <ReviewsSection
          title={
            <>
              Отзывы <span className="text-gradient-white">о курсе</span>
            </>
          }
          reviews={reviewsHome}
        />
        <PriceSection price={"60 000"} />
        <ImportantSection />
      </div>
    </div>
  )
}
