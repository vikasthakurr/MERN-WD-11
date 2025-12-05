async function fetchData() {
  try {
    const data = await fetch("https://dummyjson.com/products");
    const response =  await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
