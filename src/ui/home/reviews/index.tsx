import reviewOne from "@/assets/images/reviews-1.png"
import reviewTwo from "@/assets/images/reviews-2.png"
import { cn } from "@/lib/utils/cn"
import { Play } from "@/shared/ui/buttons/play"
import Button from "@/shared/ui/buttons"

const video = [
  { id: 1, video: reviewOne.src },
  { id: 2, video: reviewTwo.src },
  { id: 3, video: reviewOne.src },
  { id: 4, video: reviewTwo.src },
  { id: 5, video: reviewOne.src },
  { id: 6, video: reviewTwo.src },
]

export const ReviewsSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[45px]">Отзывы</h3>
        <p>*Все отзывы размещены с согласия учеников</p>
      </div>
      <div className="flex 1070:overscroll-x-none overflow-x-auto 1070:justify-center  gap-7">
        {video.map((item, i) => (
          <div
            key={item.id}
            className={`relative 1070:w-auto 1070:h-auto w-[160px] h-[335px] 1070:shrink shrink-0 rounded-xl overflow-hidden ${
              (i + 1) % 2 === 0 ? "1070:mt-8 mt-0" : ""
            }`}
          >
            <Play className="absolute inset-0 flex items-center justify-center" />
            <img src={item.video} alt="" />
          </div>
        ))}
      </div>
      <Button className="w-full h-[50px] gradient-blue" variant="gradient">
        Ещё отзывы
      </Button>
    </div>
  )
}
