import {useEffect,useState} from 'react';
import {getProductCategories, getProducts } from './api';
import {ProductCard} from "./ProductCard";
import { Input } from "./components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const ProductsList=()=>{
    const[products,setProducts]=useState([])
    const[productcategory,setProductCategory]=useState([])
    const[selectedCategory,setSelectedCategory]=useState([])
    const[search,setSearch]=useState('')
    const fetchProductsData= async()=>{
        const data = await getProducts();
        setProducts(data);
    };
    const fetchCategoryData= async()=>{
        const data = await getProductCategories();
        setProductCategory(data);
    };


    useEffect(()=>{
        fetchProductsData();
        fetchCategoryData();
    },[]);// component did mount

    console.log(search)
    const filteredProducts=products.filter((product)=>{
        console.log("PRODUCT",product);
        return product.title.includes(search);
        
    });
    console.log(productcategory)
    const filteringProducts=productcategory.filter((category)=>{
        console.log("CAATEGORIES",category);

        return category.includes(search);
        
    });
   console.log(selectedCategory);
   
   


    return(
        <>
        <Input
        autofocus
        className="my-2 mx-auto w-1/2 h-10"
         placeholder='Search Products'
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value);
        }}
        />
        <button>Search</button>

        <Select onValueChange={(selectedVal)=>{
            setSelectedCategory(selectedVal);
        }

        }>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a category" />
  </SelectTrigger>
  <SelectContent>


    {
        filteringProducts.map((category)=>{
            return(
                <SelectItem key={category} value={category}>{category}</SelectItem>
            );
        })
    }
    

  </SelectContent>
</Select>

      


        
        <div className="grid grid-cols-5 gap-4 p-2" >
            {filteredProducts.map((product)=>{
                return(
                    <ProductCard
                    key={product.id}
                    imageUrl={product.image}
                    price={product.price}
                    title={product.title}
                    
                    />
                );  
            })}
            
            
           
            
          
        </div>
        </>
    );  
};
export default ProductsList;