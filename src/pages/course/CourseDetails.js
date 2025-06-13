import { useLoaderData, useRouteLoaderData } from "react-router";

export default function CourseDetailsPage() {
  // const { courseId } = useParams();  => url den gelen parametreyi alma.
  // const course = useLoaderData();   => route ta verilen loader fonksiyonundan gelen veriyi alma.

  const course = useRouteLoaderData("course-details"); // course-details id si ile tanımlanan route un loader ından gelen veriyi alma.

  return (
    <>
      <div className="course-details">
        <h1>{course.title}</h1>
        <div className="course-desc">
          <img src={`http://localhost:5000/images/${course.image}`} alt="" />
          <div>{course.description}</div>
          <div className="icons">
            <span>
              <i className="fa-regular fa-user">{course.users}</i>
            </span>
            <span>
              <i className="fa-regular fa-thumps-up">{course.likes}</i>
            </span>
            <span>
              <i className="fa-regular fa-comment">{course.comments}</i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// route tanımı yaparken loader verdiğimiz alandaki parametreler (url parametreleri :id gibi) loader a verilen fonksiyona params olarak gelir.
export async function courseDetailsLoader({ params }) {
  const { courseId } = params; // urlden gelen courseId parametresini alıyoruz.
  const response = await fetch("http://localhost:5000/courses/" + courseId);
  return response.json();
}
