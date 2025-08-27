type AfterCourseProps = {
  number: string
  text: string
}
export const AfterCourse = ({ number, text }: AfterCourseProps) => {
  return (
    <div className="w-full p-5 bg-blur-bg rounded-[12px] border border-[#ffffff45]">
      <div className="flex flex-col gap-3">
        {number}
        <p className="max-w-[340px] text-[21px]">{text}</p>
      </div>
    </div>
  )
}
