import { LeftPartFooter } from "@/widgets/layout/footer/left-part"
import { RightPartFooter } from "@/widgets/layout/footer/right-part"
import { cn } from "@/lib/utils/cn"
import { Faq } from "@/widgets/layout/footer/faq"

export const Footer = ({ className }: { className: string }) => {
  return (
    <div>
      <div
        className={cn(
          "h-[158px] flex justify-between relative left-0 -mx-[40px] px-10 pt-5 w-screen border-b border-white bg-blur-bg",
          className
        )}
      >
        <LeftPartFooter />
        <RightPartFooter />
      </div>
      <Faq />
    </div>
  )
}
