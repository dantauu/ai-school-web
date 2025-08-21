import { MainSection } from "@/ui/home/main-section"
import { OurCourse } from "@/entities/our-course/ui"
import { AboutSection } from "@/ui/home/about-school"

export default function Home() {
  return (
    <div>
      <MainSection />
      <OurCourse className="pt-14" />
      <AboutSection />
    </div>
  )
}
