import { Link, useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData(); // React Router'ın useLoaderData hook'u ile coursesLoader'dan gelen veriyi alıyoruz.

  return (
    <>
      <h1>Courses</h1>
      <div id="courses">
        {courses.map((item) => (
          <div key={item.id} className="card">
            <img src={`http://localhost:5000/images/${item.image}`} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={"/courses/" + item.id}>Detay</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLoader() {
  const response = await fetch("http://localhost:5000/courses");
  return response.json();
}
