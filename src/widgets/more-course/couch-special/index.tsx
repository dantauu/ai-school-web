import { Couch } from "@/shared/ui/cards/couch"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { couchSpecialItems } from "@/lib/data/more-course/for-special"

export const CouchSpecialSection = ({
  description,
}: {
  description: string
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[42px]">
        Наши <span className="text-gradient-white">преподаватели</span>
      </h3>
      <p className="text-[18px]">{description}</p>
      <div className="flex items-center gap-2">
        {couchSpecialItems.map((item) => (
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
