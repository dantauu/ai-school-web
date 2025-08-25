import { cn } from "@/lib/utils/cn"
import Link from "next/link"

type BreadcrumbsProps = {
  location: string
  className?: string
}

const Breadcrumbs = ({ location, className }: BreadcrumbsProps) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <Link href="/" className="text-[#fff6]">
        Главная
      </Link>
      <p>/</p>
      <p className="border-b">{location}</p>
    </div>
  )
}
export default Breadcrumbs
