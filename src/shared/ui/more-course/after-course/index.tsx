type AfterCourseProps = {
  number: string
  text: string
}
export const AfterCourse = ({ number, text }: AfterCourseProps) => {
  return (
    <div className="w-full 1070:p-5 p-3 bg-blur-bg rounded-[12px] border border-[#ffffff45]">
      <div className="flex flex-col gap-3">
        {number}
        <p className="max-w-[340px] 830:text-[21px] text-[19px] leading-6">
          {text}
        </p>
      </div>
    </div>
  )
}
