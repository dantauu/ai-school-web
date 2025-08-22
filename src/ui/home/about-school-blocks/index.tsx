import Button from "@/shared/ui/buttons"

export const SchoolBlocksSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[45px]">О школе</h3>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-4 p-8 gradient-dark-blue rounded-[15px]">
          <p className="max-w-[500px] text-[34px]">
            Забудь «как раньше» — учись по‑новому
          </p>
          <p className="max-w-[637px] text-[18px]">
            Платформа, где обучение подстроено под реальность: быстро, понятно,
            по делу
          </p>
          <Button
            className="w-full h-[50px] text-black gradient-white"
            variant="gradient"
          >
            Записаться на курс
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 gradient-purple-reverse rounded-[15px]">
          <p className="text-[34px]">Быстрый апгрейд твоих скиллов</p>
          <p className="max-w-[637px] text-[18px]">
            Нейросети, no-code, AI-ассистенты — максимум пользы за минимум
            времени
          </p>
          <Button
            className="w-full h-[50px] text-white gradient-blue"
            variant="gradient"
          >
            О школе и подходе
          </Button>
        </div>
      </div>
    </div>
  )
}
