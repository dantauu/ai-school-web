import { ReviewsSection } from "@/ui/home/reviews"
import { StartSection } from "@/ui/more-course/start"
import { Skills } from "@/shared/ui/more-course/skills"
import { resultList, skillsList } from "@/lib/data/more-course/start"
import { PassesStudySection } from "@/ui/more-course/passes-study"
import { AfterCourseSection } from "@/widgets/more-course/after-course"
import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { CouchSection } from "@/widgets/more-course/couch"
import { PriceSection } from "@/shared/ui/more-course/price"
import { ImportantSection } from "@/shared/ui/more-course/important"

export const CareerStartPage = () => {
  return (
    <>
        <Breadcrumbs className="py-[30px] px-[40px]" location={"Карьерный старт в AI"} />
      <div className="flex flex-col gap-25 container">
        <StartSection />
        <Skills
          likeText={
            "Идеально, если вы хотите сменить профессию, войти в digital, освоить рынок будущего уже сейчас"
          }
          titleLeft={"Что вы освоите:"}
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
        <ReviewsSection />
        <PriceSection price={"60 000"} />
        <ImportantSection />
      </div>
    </>
  )
}
