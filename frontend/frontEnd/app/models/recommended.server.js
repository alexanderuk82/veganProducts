export async function getRecommended() {
  const response = await fetch(
    `${process.env.API_URL}/recommendeds/?populate=images`
  );
  const data = await response.json();
  console.log(data); 
  return data;
}
