import { MainSection } from "@/ui/home/main-section"
import { OurCourse } from "@/entities/our-course/ui"
import { AboutSection } from "@/ui/home/about-school"
import { Reviews } from "@/ui/home/reviews"
import { WillFit } from "@/ui/home/will-fit"

export default function Home() {
  return (
    <div>
      <MainSection />
      <div className="container">
        <OurCourse className="pt-14" />
        <AboutSection />
        <Reviews className="pt-[100px]" />
        <WillFit className="pt-[100px]" />
      </div>
    </div>
  )
}
