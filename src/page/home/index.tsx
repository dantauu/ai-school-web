import { MainSection } from "@/ui/home/main-section"
import { OurCourseSection } from "@/widgets/our-course"
import { AboutSection } from "@/ui/home/about-school"
import { ReviewsSection } from "@/ui/home/reviews"
import { WillFitSection } from "@/ui/home/will-fit"
import { ResultSection } from "@/ui/home/result"
import { PracticeToolsSection } from "@/ui/home/tools"
import { TheyChooseSection } from "@/ui/home/they-choose"
import { FormRequestSection } from "@/ui/home/form-request"
import { HowStudySection } from "@/ui/home/how-study/inedx"
import { HowShowSection } from "@/ui/home/how-show"
import { QuestionsSection } from "@/ui/home/questions"
import { FreeLiveSection } from "@/ui/home/free-live"
import { SchoolBlocksSection } from "@/ui/home/about-school-blocks"
import { RecordedForm } from "@/ui/home/record-form"

export default function HomePage() {
  return (
    <div>
      <MainSection />
      <div className="container flex flex-col gap-25">
        <OurCourseSection className="pt-14" />
        <AboutSection />
        <ReviewsSection />
        <WillFitSection />
        <ResultSection />
        <PracticeToolsSection />
        <TheyChooseSection />
      </div>
      <FormRequestSection />
      <div className="container flex flex-col gap-25">
        <HowStudySection />
        <HowShowSection />
        <QuestionsSection />
        <FreeLiveSection />
        <SchoolBlocksSection />
      </div>
      <RecordedForm />
    </div>
  )
}
