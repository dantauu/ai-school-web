import { WillFitCard } from "@/shared/ui/cards/will-fit"
import Button from "@/shared/ui/buttons"
import { cn } from "@/lib/utils/cn"

export const WillFitSection = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col gap-9", className)}>
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
