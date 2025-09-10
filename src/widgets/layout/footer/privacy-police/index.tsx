import Link from "next/link"

export const Faq = () => {
  return (
    <div className="530:pt-0 pt-10 530:flex-row 530:gap-0 gap-10 flex-col h-[56px] flex justify-between items-center px-[20px]">
      <Link
        href="/privacy-policy"
        className="text-[15px] 530:text-[16.5px] text-[#a7a7a7]"
      >
        Политика конфиденциальности
      </Link>
      <Link href="/user-agreement" className="text-[15px] 530:text-[16.5px] text-[#a7a7a7]">
        Пользовательское соглашение
      </Link>
      <Link href="/" className="text-[15px] 530:text-[16.5px] text-[#a7a7a7]">
        @AI−school by Grafov
      </Link>
    </div>
  )
}
