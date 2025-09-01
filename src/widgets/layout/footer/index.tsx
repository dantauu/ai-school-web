import { LeftPartFooter } from "@/widgets/layout/footer/left-part"
import { RightPartFooter } from "@/widgets/layout/footer/right-part"
import { cn } from "@/lib/utils/cn"
import { Faq } from "@/widgets/layout/footer/faq"

export const Footer = ({ className }: { className: string }) => {
  return (
    <footer>
      <div
        className={cn(
          "1510:flex-row 1510h:h-[158px] h-full flex flex-col 830:items-center items-stretch justify-between 830:px-10 px-5 py-5 w-full border-b gap-5 border-white bg-blur-bg",
          className
        )}
      >
        <LeftPartFooter />
        <RightPartFooter />
      </div>
      <Faq />
    </footer>
  )
}
