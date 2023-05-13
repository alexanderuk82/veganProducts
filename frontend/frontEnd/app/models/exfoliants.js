export async function getExfoliants() {
  const response = await fetch(
    `${process.env.API_URL}/exfoliants/?populate=images`
  );
  const data = await response.json();
  return data;
}
