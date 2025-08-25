import { FormRequest } from "@/shared/ui/form"
import { cn } from "@/lib/utils/cn"
import { ReactNode } from "react"

type FormRequestWidgetProps = {
  text: string | ReactNode
  description: string
  classText?: string
  className?: string
}

const FormRequestWidget = ({
  text,
  description,
  classText,
  className,
}: FormRequestWidgetProps) => {
  return (
    <div
      className={cn(
        `form:flex-row flex flex-col items-center justify-center w-full py-10 form:gap-30 gap-5 px-3 bg-blur-bg`,
        className
      )}
    >
      <div>
        <h3 className={cn("text-[39px]", classText)}>{text}</h3>
        <p className="max-w-[535px] text-[17px]">{description}</p>
      </div>
      <FormRequest />
    </div>
  )
}

export default FormRequestWidget
