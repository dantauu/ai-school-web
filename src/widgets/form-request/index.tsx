import { FormRequest } from "@/shared/ui/form"
import { cn } from "@/lib/utils/cn"
import { ReactNode } from "react"

type FormRequestWidgetProps = {
  text: string | ReactNode
  description: string
  classText?: string
}

const FormRequestWidget = ({
  text,
  description,
  classText,
}: FormRequestWidgetProps) => {
  return (
    <div className="relative form:flex-row flex flex-col items-center justify-center left-0 -mx-[40px] w-screen py-10 form:gap-30 gap-5 bg-blur-bg">
      <div>
        <h3 className={cn("text-[39px]", classText)}>{text}</h3>
        <p className="w-[535px] text-[17px]">{description}</p>
      </div>
      <FormRequest />
    </div>
  )
}

export default FormRequestWidget
