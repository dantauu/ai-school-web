import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { RoadAiSection } from "@/ui/more-course/road-ai"
import { WhyHereSection } from "@/ui/more-course/why-here"
import { KidsSection } from "@/ui/more-course/kids"
import { Skills } from "@/shared/ui/more-course/skills"
import { resultKidsList, skillsKidsList } from "@/lib/data/more-course/for-kids"
import { CouchKidsSection } from "@/widgets/more-course/couch-kids"
import { ReviewsSection } from "@/shared/ui/reviews"
import { PriceSection } from "@/shared/ui/more-course/price"
import { FirstStepSection } from "@/ui/more-course/first-step"
import { QuestionsKids } from "@/widgets/questions/questions-kids"
import { reviewsKids, reviewsParents } from "@/lib/data/reviews"
import reviewKidOne from "@/assets/images/kid-1.png"
import reviewKidTwo from "@/assets/images/kid-2.png"
import parentOne from "@/assets/images/parent-1.png"
import parentTwo from "@/assets/images/parent-2.png"

export const KidsPage = () => {
  return (
    <div className="container mx-auto">
      <Breadcrumbs
        className="py-[30px]"
        location={"Курс «AI для подростков и детей»"}
      />
      <div className="flex flex-col 530:gap-20 gap-15">
        <RoadAiSection />
        <WhyHereSection />
        <KidsSection />
        <Skills
          likeText={"Идеальный старт: от хобби — к первому заработку."}
          titleLeft={"Что в итоге?"}
          className="gradient-purple"
          skillsItems={skillsKidsList}
          resultItems={resultKidsList}
        />
        <CouchKidsSection
          description={
            "Профессионалы, которые умеют объяснять сложно — просто."
          }
        />
        <ReviewsSection
          title={
            <>
              Что говорят <span className="text-gradient-white">дети</span>
            </>
          }
          reviews={reviewsKids}
          reviewImages={[{ src: reviewKidOne.src }, { src: reviewKidTwo.src }]}
        />
        <ReviewsSection
          title={
            <>
              А вот{" "}
              <span className="text-gradient-white">мнение родителей</span>
            </>
          }
          reviews={reviewsParents}
          reviewImages={[{ src: parentOne.src }, { src: parentTwo.src }]}
        />
        <PriceSection price={"100 000"} />
        <FirstStepSection />
        <QuestionsKids />
      </div>
    </div>
  )
}
