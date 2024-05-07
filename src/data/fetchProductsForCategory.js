async function fetchProductsForCategory(category) {
    const url = "https://fakestoreapi.com/products/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      return products.filter((product) => {
        return product.category == category.toLowerCase();
      });
    } catch (e) {
      console.error("Error fetching products", e.message);
      return [];
    }
  }
  
  export default fetchProductsForCategory;
  