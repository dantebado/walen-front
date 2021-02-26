import React, { useEffect, useState } from 'react'
import { queryProducts } from '../../api/api'
import ProductGridComponent from '../products/ProductGridComponent'

export default function HomeProductsList() {
  const [products, setProducts] = useState({
    count: -1,
    results: []
  })
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(0)

  const fetchProducts = () => {
    setLoading(true)
    queryProducts(pageNumber)
    .then(page => {
      setProducts(page)
    })
    .catch(console.error)
    .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {
        loading ? (
          <p>Cargando</p>
        ) : (
          products.results.map((v, i, a) => (
            <div key={i} className="display-inline-block m-3">
              <ProductGridComponent product={v} />
            </div>
          ))
        )
      }
    </div>
  )
}