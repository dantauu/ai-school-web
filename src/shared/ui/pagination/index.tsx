import { cn } from "@/lib/utils/cn"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { type MouseEvent, useCallback } from "react"
import Link from "next/link"
import SvgArrowLeft from "@/assets/icons/ArrowLeft"
import SvgArrowRight from "@/assets/icons/ArrowRight"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

type PaginationProps = {
  className?: string
  totalPages: number
  currentPage: number
  perPage: number
}

export const Pagination = ({
  className,
  totalPages,
  currentPage,
}: PaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(pageNumber))
    return `${pathname}?${String(params)}`
  }

  const handlePageClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, pageNumber: number) => {
      e.preventDefault()
      const url = createPageURL(pageNumber)
      router.push(url)
    },
    [router, pathname, searchParams]
  )

  const renderPageNumbers = () => {
    const pages = []

    pages.push(
      <PageButton
        key={1}
        pageNumber={1}
        isCurrent={currentPage === 1}
        href={createPageURL(1)}
        onClick={(e) => handlePageClick(e, 1)}
      />
    )

    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    if (currentPage <= 2) {
      startPage = 2
      endPage = Math.min(totalPages - 1, 3)
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3)
      endPage = totalPages - 1
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          pageNumber={i}
          isCurrent={currentPage === i}
          href={createPageURL(i)}
          onClick={(e) => handlePageClick(e, i)}
        />
      )
    }

    if (endPage < totalPages - 1) {
      pages.push(<Ellipsis key="ellipsis-2" />)
    }

    if (totalPages > 1) {
      pages.push(
        <PageButton
          key={totalPages}
          pageNumber={totalPages}
          isCurrent={currentPage === totalPages}
          href={createPageURL(totalPages)}
          onClick={(e) => handlePageClick(e, totalPages)}
        />
      )
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav className={cn("flex items-center justify-center", className)}>
      <div className="flex items-center gap-5">
        <Link
          href={createPageURL(currentPage > 1 ? currentPage - 1 : currentPage)}
          onClick={(e) =>
            currentPage > 1 && handlePageClick(e, currentPage - 1)
          }
          aria-disabled={currentPage <= 1}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-colors",
            currentPage <= 1
              ? "cursor-not-allowed opacity-50"
              : "hover:border-red-600 hover:text-red-600"
          )}
        >
          <span className="sr-only">Предыдущая страница</span>
          <ButtonGradientBlue className="flex items-center justify-center w-[56px] h-[48px] rounded-full">
            <SvgArrowLeft />
          </ButtonGradientBlue>
        </Link>

        <div className="flex gap-2 items-end">{renderPageNumbers()}</div>

        <Link
          href={createPageURL(
            currentPage < totalPages ? currentPage + 1 : currentPage
          )}
          onClick={(e) =>
            currentPage < totalPages && handlePageClick(e, currentPage + 1)
          }
          aria-disabled={currentPage >= totalPages}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-colors",
            currentPage >= totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:text-yellow"
          )}
        >
          <span className="sr-only">Следующая страница</span>
          <ButtonGradientBlue className="flex items-center justify-center w-[56px] h-[48px] rounded-full">
            <SvgArrowRight />
          </ButtonGradientBlue>
        </Link>
      </div>
    </nav>
  )
}

const PageButton = ({
  pageNumber,
  isCurrent,
  href,
  onClick,
}: {
  pageNumber: number
  isCurrent: boolean
  href: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-blur-bg text-[18px] text-white font-medium transition-colors",
      isCurrent
        ? "text-black bg-white"
        : "hover:border-red-600 hover:text-black"
    )}
    aria-current={isCurrent ? "page" : undefined}
  >
    {pageNumber}
  </Link>
)

const Ellipsis = () => (
  <span className="flex h-7 w-6 items-center justify-center text-white text-[20px]">
    ...
  </span>
)
