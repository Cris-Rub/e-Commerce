import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductContext = createContext()

function ProductProvider (props) {
  const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'
  const [productList, setProductList] = useState([])
  const [loadingStatus, setLoadingStatus] = useState(true)

  /* Se obtienen los productos de la API */
  useEffect(() => {
    axios
      .get(`${BASE_URL}item`)
      .then(({ data }) => {
        setProductList(data)
        setLoadingStatus(false)
        // console.log(productList)
      })
      .catch((error) => console.log(error))
  }, [])

  /* Los valores que contiene el contexto */
  const value = {
    productList,
    setLoadingStatus,
    loadingStatus
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}
