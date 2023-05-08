export async function getMoistures() {
  const response = await fetch(
    `${process.env.API_URL}/moiustures/?populate=images`
  );
  const data = await response.json();
  return data;
}
export async function getMoistureItem({ url }) {
  const response = await fetch(
    `${process.env.API_URL}/moiustures?filters[url]=${url}&populate=images`
  );
  return await response.json();
}
