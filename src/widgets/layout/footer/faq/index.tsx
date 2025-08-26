import Link from "next/link"

export const Faq = () => {
  return (
    <div className="530:pt-0 pt-10 530:flex-row 530:gap-0 gap-10 flex-col h-[56px] flex justify-between items-center px-[20px]">
      <Link href="/faq" className="text-[19px] 530:text-[16.5px]">
        Политика конфиденциальности
      </Link>
      <Link href="/" className="text-[19px] 530:text-[16.5px]">
        Пользовательское соглашение
      </Link>
      <Link href="/" className="text-[19px] 530:text-[16.5px]">
        @AI−school by Grafov
      </Link>
    </div>
  )
}
