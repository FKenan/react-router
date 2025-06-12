import { Outlet } from "react-router";

export default function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        dignissimos ab numquam, nam ratione eaque autem, est repellat libero,
        quia saepe doloremque sit assumenda. Dolor!
      </p>
      <Outlet />
    </div>
  );
}
