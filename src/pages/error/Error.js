import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "Error";
  let message = "Bir hata oluştu. Tekrar deneyiniz.";

  if (error.status === 404) {
    title = "Not Found Error";
    message = "Aradığınız sayfa bulunamadı.";
  }

  if (error.status === 500) {
    message = error.data;
  }

  return (
    <div id="error">
      <h1>Not Found</h1>
      <p>Kaynak bulunamadı.</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}
