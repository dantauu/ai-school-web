import { LeftPartFooter } from "@/widgets/layout/footer/left-part"
import { RightPartFooter } from "@/widgets/layout/footer/right-part"
import { cn } from "@/lib/utils/cn"
import { Faq } from "@/widgets/layout/footer/faq"

export const Footer = ({ className }: { className: string }) => {
  return (
    <footer className="container ">
      <div
        className={cn(
          "1510:flex-row 1510h:h-[158px] h-full flex flex-col justify-between relative left-0 -mx-[40px] px-10 py-5 w-screen border-b gap-5 border-white bg-blur-bg",
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
