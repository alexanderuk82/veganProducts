export async function getMoistures() {
  const response = await fetch(
    `${process.env.API_URL}/moiustures/?populate=images`
  );
  const data = await response.json();
  return data;
}
