import SvgPlay from "@/assets/icons/Play"

type PlayProps = {
  className?: string
  onClick?: () => void
}

export const Play = ({ className, onClick }: PlayProps) => {
  return (
    <div onClick={onClick} className={className}>
      <button className="flex justify-center items-center w-[56px] h-[56px] cursor-pointer border border-white rounded-full gradient-dark-blue">
        <SvgPlay />
      </button>
    </div>
  )
}
