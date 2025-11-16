import { redirect } from "react-router-dom";

const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

export async function GetComments({ params }) {
  try {
    const res = await fetch(`${URL}/posts/${params.id}/comments`, {
      mode: "cors",
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function AddComment({ params, request }) {
  const formData = await request.formData();
  const { name, comment } = Object.fromEntries(formData);

  try {
    const res = await fetch(`${URL}/posts/${params.id}/comments`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, content: comment }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
