export async function generateDescription(name: string) {
  try {
    const response = await fetch("/api/generate-description", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate description");
    }

    const data = await response.json();
    return data.description;
  } catch (error) {
    console.log(error);
    return null;
  }
}
