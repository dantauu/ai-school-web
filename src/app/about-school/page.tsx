import { DignitySection } from "@/ui/about-school/dignity"
import { BirthSchoolSection } from "@/ui/about-school/birth-school"
import { StudySection } from "@/ui/about-school/study"
import { IdeasSection } from "@/ui/about-school/idea"
import { WhyDoItSection } from "@/ui/about-school/why-do-it"
import { DifferenceSection } from "@/ui/about-school/difference"

const AboutSchool = () => {
  return (
    <div className="flex flex-col gap-15 975:pt-[70px] pt-[30px]">
      <DignitySection />
      <div className="flex flex-col gap-15 container">
        <BirthSchoolSection />
        <StudySection />
        <IdeasSection />
        <WhyDoItSection />
        <DifferenceSection />
      </div>
    </div>
  )
}

export default AboutSchool
