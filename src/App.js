import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Products from './components/Products'
import { Routes, Route } from "react-router-dom";
import Loading from './components/Loading'
import ShoppingCart from './components/ShoppingCart'
import Error404 from './components/Error';
import Details from './components/Details'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [details, setDetails] = useState(false)

  const handleDetails = () => {
    setDetails(true)
  }

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1} : item))
    } else {
      setCartItems([...cartItems, {...product, quantity:1 }])
    }
  }

  useEffect(() => {
    const localData = localStorage.getItem('cartItems')
    if (localData) {
      setCartItems (JSON.parse(localData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  })

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1} : item)
      )
    }
  }

  const handleSingleCartClearance = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }

  const handleCartClearance = () => {
    setCartItems([])
  }
  
  const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setLoading(false)
        setData(data)
        setFilteredData(data)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    useEffect(() => {
      fetchData()
    }, [])

    const ddlHandler = e => {

      if(e.value === "up") {
        data.sort((a, b) => {
          if (a.price > b.price) return 1
          if (a.price < b.price) return -1
        })
        setData(data)
        filteredData.sort((a, b) => {
          if (a.price > b.price) return 1
          if (a.price < b.price) return -1
        })
        setFilteredData(filteredData)
      }
      else if(e.value === "down") {
        data.sort((a, b) => {
          if (a.price > b.price) return -1
          if (a.price < b.price) return 1
        })
        setData(data)
        filteredData.sort((a, b) => {
          if (a.price > b.price) return -1
          if (a.price < b.price) return 1
        })
        setFilteredData(filteredData)
      }
    }

    const filterItems = (category) => {
      if (category === 'all') {
        setData(filteredData);
        return;
      }
      const newItems = filteredData.filter((cart) => cart.category === category);
      setData(newItems);
    };

    if(loading) {
      return (
        <>
          <Header cartItems={cartItems}/>
          <main>
            <Loading />
          </main>
        </>
      )
    } else {
    return (
      <>
        <Header cartItems={cartItems}/>
        <Routes >
          <Route path="/" element= {<Products filterItems={filterItems} ddlHandler={ddlHandler} data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData} handleAddProduct={handleAddProduct} cartItems={cartItems} handleDetails={handleDetails} />}/>
          <Route path="/details/:id" element={<Details filteredData={filteredData} details={details} handleAddProduct={handleAddProduct} cartItems={cartItems}/>} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} handleSingleCartClearance={handleSingleCartClearance}/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
  )}
}
export default App;

