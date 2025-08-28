import { Couch } from "@/shared/ui/cards/couch"
import { couchKidsItems } from "@/lib/data/more-course/for-kids"

export const CouchKidsSection = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="530:text-[42px] text-[32px] 530:leading-normal leading-7 pb-2">
        Наши <span className="text-gradient-white">преподаватели</span>
      </h3>
      <p className="text-[18px]">{description}</p>
      <div className="flex items-center gap-2 overflow-x-auto">
        {couchKidsItems.map((item) => (
          <Couch
            key={item.id}
            name={item.name}
            img={item.img}
            direction={item.direction}
          />
        ))}
      </div>
    </div>
  )
}
