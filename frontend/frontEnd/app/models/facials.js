export async function getFacials() {
    const response = await fetch(
      `${process.env.API_URL}/facials/?populate=images`
    );
    const data = await response.json();
    return data;
  }