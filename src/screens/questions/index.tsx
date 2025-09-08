import { QuestionsSection } from "@/widgets/questions"
import Breadcrumbs from "@/shared/ui/breadcrumbs"
import blue from "@/assets/backgrounds/blue.svg"

export const QuestionsPage = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -z-2 975:-bottom-250 -bottom-130">
          <img src={blue.src} />
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-[20px] container">
        <Breadcrumbs location={"Вопрос-ответ"} />
        <QuestionsSection />
      </div>
    </>
  )
}
