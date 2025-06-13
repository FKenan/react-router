import { Form, redirect } from "react-router";
import CourseForm from "./CourseForm";

export default function CourseCreatePage() {
  return <CourseForm method="POST" />;
}
