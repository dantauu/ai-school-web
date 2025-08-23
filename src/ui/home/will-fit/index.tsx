import { WillFitCard } from "@/shared/ui/cards/will-fit"
import Button from "@/shared/ui/buttons"

export const WillFitSection = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex justify-between items-center">
        <h3 className="text-[45px]">Кому подойдёт</h3>
        <Button
          className="w-[220px] h-[50px] text-black gradient-white"
          variant="gradient"
        >
          Посмотреть курсы
        </Button>
      </div>
      <WillFitCard />
    </div>
  )
}
