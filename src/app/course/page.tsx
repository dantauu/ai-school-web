import { CoursePage } from "@/screens/course"
import { Suspense } from "react"

const Course = () => {
  return (
    <Suspense>
      <CoursePage />
    </Suspense>
  )
}
export default Course
