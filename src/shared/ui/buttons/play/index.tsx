import SvgPlay from "@/assets/icons/Play"

export const Play = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <button className="flex justify-center items-center w-[56px] h-[56px] cursor-pointer border border-white rounded-full gradient-dark-blue">
        <SvgPlay />
      </button>
    </div>
  )
}
