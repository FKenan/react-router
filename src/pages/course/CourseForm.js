import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { isRequiredCheck, isValidImage } from "../../utils/validation";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"; // Formun submit edilirken true, haricinde false
  const errors = useActionData();

  return (
    <Form method={method}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={data ? data.title : ""}
        />
        {errors && errors.title && <p>{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={data ? data.image : ""}
        />
        {errors && errors.image && <p>{errors.image}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows={5}
          defaultValue={data ? data.description : ""}
        />
        {errors && errors.description && <p>{errors.description}</p>}
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

  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const errors = {};

  if (!isRequiredCheck(formData.title)) {
    errors.title = "Title alanı zorunludur.";
  }

  if (!isValidImage(formData.image)) {
    errors.image = "Image alanı zorunlu ve resim uzantısı jpeg olmalıdır.";
  }

  if (!isRequiredCheck(formData.description)) {
    errors.description = "Description alanı zorunludur.";
  }

  if (Object.keys(errors).length > 0) {
    return errors; // Hatalar varsa geri döner. aşağıdaki kodlar çalışmaz.
  }

  const response = await fetch(url, {
    method: method, // PUT veya POST metodunu kullanır.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
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
