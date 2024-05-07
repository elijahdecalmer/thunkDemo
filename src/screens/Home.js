import { View, Text } from "react-native"
import { useSelector } from "react-redux"
import { loadCategoryProducts, selectProdList } from "../data/productSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const Home = () => {
    const dispatch = useDispatch();
    const categories =  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]
    
    const prodList = useSelector(selectProdList)
    
    const handleCategoryPress = (category) => {
        dispatch(loadCategoryProducts(category))
    }

    return(
        <View style={{flex: true, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {categories.map((category)=>(
                <Text style={{padding: 10}} onPress={() => handleCategoryPress(category)}>{category}</Text>
            ))}
            {prodList?.allProducts?.map((product, index)=>(
                <Text key={index}>
                    {product?.title}
                </Text>
            ))}

        </View>
    )



}

export default Home;