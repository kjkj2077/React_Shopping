import React, { useEffect, useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { ProductCard } from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
export const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] =useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q")|| "";
    console.log('쿼리값',searchQuery)
    let url = `https://my-json-server.typicode.com/kjkj2077/React_Shopping_mall/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
    console.log("data", data)
  }
  useEffect(() => {
    getProducts()
  }, [query])
  return (
    <div className='app'>
      <Container id="productAll-container">
        <Row>
          {productList.map((menu)=>(
            <Col lg ={3} md={6}><ProductCard item={menu}/></Col>
          ))}
        </Row>        
      </Container>
    </div>
  )
}
