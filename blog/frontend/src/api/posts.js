const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

export function DeletePost(postId, header) {
  fetch(`${URL}/posts/${postId}`, {
    method: "DELETE",
    mode: "cors",
    headers: { ...header, "Content-Type": "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error(`HTTP error. Status: ${res.status}`);
    return res.json();
  });
}
