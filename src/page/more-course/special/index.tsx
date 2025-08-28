import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { SpecialSection } from "@/ui/more-course/special"
import { Skills } from "@/shared/ui/more-course/skills"
import {
  resultListSpecial,
  skillsListSpecial,
} from "@/lib/data/more-course/for-special"
import { SpecialStudySection } from "@/ui/more-course/passes-study-special"
import { AfterSpecialSection } from "@/widgets/more-course/after-course-special"
import { AiStandardSection } from "@/ui/more-course/ai-standart"
import { CouchSpecialSection } from "@/widgets/more-course/couch-special"
import { ReviewsSection } from "@/shared/ui/reviews"
import { PriceSection } from "@/shared/ui/more-course/price"
import { ImportantSection } from "@/shared/ui/more-course/important"
import { reviewsHome } from "@/lib/data/reviews"

export const SpecialPage = () => {
  return (
    <div>
      <Breadcrumbs
        className="py-[30px] px-[40px]"
        location={"Курс «AI для специалистов и предпринимателей»"}
      />
      <div className="flex flex-col gap-25 container">
        <SpecialSection />
        <Skills
          likeText={
            "Прямое применение AI в профессии уже после первых занятий."
          }
          titleLeft={"Что вы освоите:"}
          className="gradient-cold-blue"
          skillsItems={skillsListSpecial}
          resultItems={resultListSpecial}
        />
        <SpecialStudySection />
        <AfterSpecialSection />
        <AiStandardSection />
        <CouchSpecialSection
          description={
            "Практики, которые сами используют нейросети каждый день — в бизнесе, маркетинге, дизайне и технологиях."
          }
        />
        <ReviewsSection title={
          <>
            Отзывы <span className="text-gradient-white">о курсе</span>
          </>
        } reviews={reviewsHome} />
        <PriceSection price={"100 000"} />
        <ImportantSection />
      </div>
    </div>
  )
}
