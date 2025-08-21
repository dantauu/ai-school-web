import { MainSection } from "@/ui/home/main-section"
import { OurCourseSection } from "@/entities/home/our-course/ui"
import { AboutSection } from "@/ui/home/about-school"
import { ReviewsSection } from "@/ui/home/reviews"
import { WillFitSection } from "@/ui/home/will-fit"

export default function Home() {
  return (
    <div>
      <MainSection />
      <div className="container">
        <OurCourseSection className="pt-14" />
        <AboutSection />
        <ReviewsSection className="pt-[100px]" />
        <WillFitSection className="pt-[100px]" />
      </div>
    </div>
  )
}
