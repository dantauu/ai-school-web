import { MainSection } from "@/ui/home/main-section"
import { OurCourseSection } from "@/entities/home/our-course/ui"
import { AboutSection } from "@/ui/home/about-school"
import { ReviewsSection } from "@/ui/home/reviews"
import { WillFitSection } from "@/ui/home/will-fit"
import { ResultSection } from "@/ui/home/result"
import { PracticeToolsSection } from "@/ui/home/tools"
import { TheyChooseSection } from "@/ui/home/they-choose"
import { FormRequestSection } from "@/ui/home/form-request"
import {HowStudySection} from "@/ui/home/how-study/inedx";

export default function Home() {
  return (
    <div>
      <MainSection />
      <div className="container">
        <OurCourseSection className="pt-14" />
        <AboutSection />
        <ReviewsSection className="pt-[100px]" />
        <WillFitSection className="pt-[100px]" />
        <ResultSection className="pt-[110px]" />
        <PracticeToolsSection className="pt-[112px]" />
        <TheyChooseSection className="pt-[100px]" />
      </div>
      <FormRequestSection className="pt-[110px]" />
        <HowStudySection className="pt-[110px]" />
    </div>
  )
}
