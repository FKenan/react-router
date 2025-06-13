import { useRouteLoaderData } from "react-router";

export default function CourseEditPage() {
  const course = useRouteLoaderData("course-details");

  return <div>CourseEdit : {course.title}</div>;
}
