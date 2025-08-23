import { FormRequest } from "@/shared/ui/form"
import { cn } from "@/lib/utils/cn"

type FormRequestWidgetProps = {
  text: string
  description: string
  classText?: string
}

const FormRequestWidget = ({
  text,
  description,
  classText,
}: FormRequestWidgetProps) => {
  return (
    <div className="relative left-0 -mx-[50px] w-screen h-[450px] flex items-center justify-center gap-30 bg-blur-bg">
      <div>
        <h3 className={cn("text-[39px]", classText)}>{text}</h3>
        <p className="w-[535px] text-[17px]">{description}</p>
      </div>
      <FormRequest />
    </div>
  )
}

export default FormRequestWidget
