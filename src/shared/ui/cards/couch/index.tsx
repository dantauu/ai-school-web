type couchProps = {
  img: string
  name: string
  direction: string
  message?: string
}

export const Couch = ({ img, direction, message, name }: couchProps) => {
  return (
    <div className="max-w-[430px] max-h-[707px] flex flex-col choose:shrink shrink-0">
      <img
        className="975:max-w-[410px] 975:max-h-[454px] max-w-[308px] max-h-[324px]"
        src={img}
      />
      <div className="975:max-w-full max-w-[308px] flex flex-col gap-3 bg-blur-bg p-3 rounded-[12px]">
        <div className="975:max-w-full max-w-[308px] flex flex-col gap-2 bg-[#F5F5F526] rounded-[9px] p-1">
          <p className="text-[21px]">{name}</p>
          <p className="text-[18px] max-w-[311px]">{direction}</p>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}
