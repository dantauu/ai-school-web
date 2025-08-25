import { StudyMain } from "@/ui/home/about-school/study-main"
import { PracticeStudy } from "@/ui/home/about-school/practice study"

export const AboutSection = () => {
  return (
    <div className="flex h-full flex-col less-desctop:gap-10 gap-2">
      <StudyMain />
      <PracticeStudy />
    </div>
  )
}
