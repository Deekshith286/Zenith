export const getProducts = async (category = '') => {
    const url = category 
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products";
      
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };

export const getProductCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };
  export const getProductByCategories = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };
  export const getProductData = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };