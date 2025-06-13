import { Form, Link, useLoaderData, useSubmit } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData(); // React Router'ın useLoaderData hook'u ile coursesLoader'dan gelen veriyi alıyoruz.
  const submit = useSubmit();

  function handleDelete(id) {
    const confirm = window.confirm("Silmek istediğinize emin misiniz?");
    if (confirm) {
      // form submit eder action urlsine gider delete action çalışır.
      submit(null, {
        method: "DELETE",
        action: "/courses/" + id + "/delete",
      });
    }
  }

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
              <Link to={item.id + "/edit"}>Edit</Link>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLoader() {
  const response = await fetch("http://localhost:5000/courses");

  if (!response.ok) {
    throw new Response("Kurs listesi yüklenemedi.", { status: 404 });
  }
  return response.json();
}
