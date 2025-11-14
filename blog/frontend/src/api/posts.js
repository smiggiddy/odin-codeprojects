const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

export async function DeletePost(postId, header) {
  fetch(`${URL}/posts/${postId}`, {
    method: "DELETE",
    mode: "cors",
    headers: { ...header, "Content-Type": "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error(`HTTP error. Status: ${res.status}`);
    return res.json();
  });
}

export async function GetPosts() {
  try {
    const res = await fetch(`${URL}/posts`, { mode: "cors" });

    if (!res.ok) {
      throw new Response("Error", { status: 400 });
    }
    const posts = await res.json();
    return posts.posts;
  } catch (err) {
    console.log(err);
    throw new Error(`ERROR: Failed to fetch posts`);
  }
}

export async function GetPost({ params }) {
  try {
    const res = await fetch(`${URL}/posts/${params.id}/`, {
      mode: "cors",
    });
    if (!res.ok) {
      throw new Response("Error", { status: 400 });
    }
    const data = await res.json();
    if (data.post) {
      return data.post;
    }
  } catch (err) {
    console.log(err);
    throw new Error(`ERROR: Failed to fetch post`);
  }
}
