export default async function deleteServerImage(image) {
    const result = await fetch(`/api/images/${image}/delete-image`, {
      method: "delete",
    });
    const body = await result.json();
    console.log(body);
  }