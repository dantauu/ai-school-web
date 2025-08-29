type couchProps = {
  img: string
  name: string
  direction: string
  message?: string
}

export const Couch = ({ img, direction, message, name }: couchProps) => {
  return (
    <div
      className={`1155:w-[430px] 1155:h-[707px] w-[320px] flex flex-col choose:shrink shrink-0 ${message ? "h-[555px]" : "h-[445px]"}`}
    >
      <img
        className="w-full 1155:h-[450px] h-[324px] object-cover rounded-[12px]"
        src={img}
      />
      <div
        className={`w-full flex flex-col gap-3 bg-blur-bg p-3 rounded-[12px] ${message ? "1155:h-[255px] min-h-[230px]" : "h-fit"}`}
      >
        <div
          className={`1155:h-fit flex flex-col gap-2 bg-[#F5F5F526] rounded-[9px] px-4 p-1 ${message ? "min-h-[102px]" : "h-full"}`}
        >
          <p className="text-[21px]">{name}</p>
          <p className="1155:text-[18px] text-[15.2px] max-w-[311px]">
            {direction}
          </p>
        </div>
        {message && (
          <p className="px-2 max-w-[310px] 1155:text-[21px] text-[17px]">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
