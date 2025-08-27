import { ReviewsSection } from "@/ui/home/reviews"
import { StartSection } from "@/ui/more-course/start"
import { Skills } from "@/shared/ui/more-course/skills"
import { resultList, skillsList } from "@/lib/data/more-course/start"
import { PassesStudySection } from "@/ui/more-course/passes-study"

export const CoursePage = () => {
  return (
    <div className="flex flex-col gap-25 container">
      Course
      <StartSection />
      <Skills
        likeText={
          "Идеально, если вы хотите сменить профессию, войти в digital, освоить рынок будущего уже сейчас"
        }
        titleLeft={"Что вы освоите:"}
        skillsItems={skillsList}
        resultItems={resultList}
      />
      <PassesStudySection />
      <ReviewsSection />
    </div>
  )
}
