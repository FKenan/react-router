import React from "react";
import { Form, redirect, useNavigation } from "react-router";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"; // Formun submit edilirken true, haricinde false

  return (
    <Form method={method}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={data ? data.title : ""}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          required
          defaultValue={data ? data.image : ""}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          id="description"
          required
          rows={5}
          defaultValue={data ? data.description : ""}
        />
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Kayıt ediliyor..." : "Kaydet"}
      </button>
    </Form>
  );
}

export async function courseAction({ request, params }) {
  const data = await request.formData(); // Form verilerini alır.
  const method = request.method;

  let url = "http://localhost:5000/courses";

  if (method === "PUT") {
    const courseId = params.courseId;
    url += "/" + courseId; // PUT isteği için URL'yi günceller.
  }

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const response = await fetch(url, {
    method: method, // PUT veya POST metodunu kullanır.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.ok) {
    return redirect("/courses"); // Başarılı ise /courses sayfasına yönlendirir.
  }
}

export async function courseDeleteAction({ params, request }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:5000/courses/${courseId}`, {
    method: request.method, // DELETE metodunu kullanır.
  });

  if (response.ok) {
    return redirect("/courses"); // Başarılı ise /courses sayfasına yönlendirir.
  }
}
