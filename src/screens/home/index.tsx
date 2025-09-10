"use client"
import { MainSection } from "@/ui/home/main-section"
import { OurCourseSection } from "@/widgets/our-course"
import { AboutSection } from "@/ui/home/about-school"
import { ReviewsSection } from "@/shared/ui/reviews"
import { WillFitSection } from "@/ui/home/will-fit"
import { ResultSection } from "@/ui/home/result"
import { PracticeToolsSection } from "@/ui/home/tools"
import { TheyChooseSection } from "@/ui/home/they-choose"
import { FormRequestSection } from "@/ui/home/form-request"
import { HowStudySection } from "@/ui/home/how-study/inedx"
import { HowShowSection } from "@/ui/home/how-show"
import { QuestionsSection } from "@/widgets/questions"
import { FreeLiveSection } from "@/ui/home/free-live"
import { SchoolBlocksSection } from "@/ui/home/about-school-blocks"
import { RecordedForm } from "@/ui/home/record-form"
import { reviewsHome } from "@/lib/data/reviews"
import { Cookies } from "@/widgets/cookies"

export default function HomePage() {
  return (
    <div>
      <MainSection />
      <div className="container flex flex-col 830:gap-25 gap-15 mx-auto">
        <OurCourseSection className="pt-14" />
        <AboutSection />
        <ReviewsSection title={"Отзывы"} reviews={reviewsHome} />
        <WillFitSection />
        <ResultSection />
        <PracticeToolsSection />
        <TheyChooseSection />
      </div>
      <FormRequestSection />
      <div className="container flex flex-col 830:gap-25 gap-10 mx-auto">
        <HowStudySection />
        <HowShowSection />
        <QuestionsSection />
        <FreeLiveSection />
        <SchoolBlocksSection />
      </div>
      <RecordedForm />
      <Cookies />
    </div>
  )
}
