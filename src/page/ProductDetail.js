import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Container, Dropdown, Button } from 'react-bootstrap';
export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams() //:id값 리턴시켜줌.
  const getProductDetail = async () => {
    // let url = `http://localhost:3004/products/${id}`
    let url = `https://my-json-server.typicode.com/kjkj2077/React_Shopping_mall/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail()

  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img} />
          </Col>
          <Col>
            <div id='Detail'>{product?.title}</div>
            <div id='Detail' className='choice'>{product?.choice == true
              ? 'Conscious choice'
              : '  '}</div>
            <div id='Detail'>₩{product?.price}</div>
            <Dropdown id='Detail'>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Size list
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button id='Detail-Button' variant="dark">Add</Button>
            <div id='Detail'>Stranger Things x H&M. 자수 장식이 있는 부드러운 울 혼방 펠트 소재의 얇은 패딩 베이스볼 재킷. 골지로 마감된 하프넥.
              스냅버튼 클로저. 스냅버튼으로 여닫는 사선 방향의 옆면 웰트포켓. 히든 스냅버튼으로 여닫는 내부 포켓.
              와이드한 골지 소맷단과 아랫단. 새틴 소재의 다이아몬드 퀼팅 안감 부착.</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
