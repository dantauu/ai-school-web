import { Couch } from "@/shared/ui/cards/couch"
import { couchItems } from "@/lib/data/more-course/career-start"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"

export const CouchSection = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="530:text-[42px] 530:text-left text-center text-[32px] leading-9">
        Наши <span className="text-gradient-white">преподаватели</span>
      </h3>
      <p className="text-[18px]">{description}</p>
      <div className="flex justify-between items-center gap-2 overflow-x-auto">
        {couchItems.map((item) => (
          <Couch
            key={item.id}
            name={item.name}
            img={item.img}
            direction={item.direction}
            message={item.message}
          />
        ))}
      </div>
      <ButtonGradientWhite className="mt-3 w-full h-[50px] text-black">
        Посмотреть подробную программу
      </ButtonGradientWhite>
    </div>
  )
}
