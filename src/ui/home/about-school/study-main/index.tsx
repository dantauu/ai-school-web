import SvgBrain from "@/assets/icons/Brain"
import SvgChat from "@/assets/icons/Chat"
import Button from "@/shared/ui/buttons/button"
import aboutImage from "@/assets/images/about-school.png"

export const StudyMain = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h3>О школе</h3>
        <h3>Практичное обучение по AI направлениям</h3>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 border border-white">
            <SvgBrain />
            <p>Курсы направленные на практику</p>
          </div>
          <div className="flex flex-col gap-3 border border-white">
            <SvgChat />
            <p>Помогаем в процессе обучения</p>
          </div>
          <Button className="gradient-white" variant="gradient">
            Подробнее
          </Button>
        </div>
      </div>
      <div>
        <img src={aboutImage.src} />
      </div>
    </div>
  )
}
