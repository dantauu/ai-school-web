import { StudyMain } from "@/ui/home/about-school/study-main"
import { PracticeStudy } from "@/ui/home/about-school/practice study"

export const AboutSection = () => {
  return (
    <div className="flex h-full flex-col gap-10">
      <StudyMain />
      <PracticeStudy />
    </div>
  )
}
