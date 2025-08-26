import { QuestionsSection } from "@/ui/home/questions"
import Breadcrumbs from "@/shared/ui/breadcrumbs"

export const QuestionsPage = () => {
  return (
    <div className="flex flex-col gap-10 pt-[20px] container">
      <Breadcrumbs location={"Вопрос-ответ"} />
      <QuestionsSection />
    </div>
  )
}