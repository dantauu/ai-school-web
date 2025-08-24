import Button from "@/shared/ui/buttons"

export const Faq = () => {
  return (
    <div className="530:pt-0 pt-10 530:flex-row 530:gap-0 gap-10 flex-col h-[56px] flex justify-between items-center px-[20px]">
      <Button className="text-[19px] 530:text-[16.5px]" variant="default">
        Политика конфиденциальности
      </Button>
      <Button className="text-[19px] 530:text-[16.5px]" variant="default">
        Пользовательское соглашение
      </Button>
      <Button className="text-[19px] 530:text-[16.5px]" variant="default">
        @AI−school by Grafov
      </Button>
    </div>
  )
}
