import { useEffect, useState } from 'react'
import ShopItem from './ShopItem'
import { Bars } from 'react-loader-spinner'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState([])

 
  useEffect(() => {
    setLoading(true)
    const response =fetch('https://course-api.com/react-store-products').then(res => res.json())
    setProducts(response)
    setLoadedProducts(createPagination(response))
    setLoading(false)
  }, []);

  const createPagination = (items, limit = 8, offset = 0) => {
    let arr = []
    items.forEach((item, index) => {
      if (index >= offset && index < offset + limit) {
        arr.push(item)
      }
    })
    return arr
  }

  const loadMore = () => {
    if (loadedProducts.length === products.length) return
    const newProducts = createPagination(products, 8, loadedProducts.length)
    setLoadedProducts([...loadedProducts, ...newProducts])
  }

  return (
    <>
      <section className='block h-auto'>
        <div className="container md:w-5/6 mx-auto px-2 md:px-0">
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
            <h2 className='text-5xl font-bold leading-tight '>Shop by Product</h2>
          </div>
          <div>
            <div className='flex flex-wrap'>
              {loading && (
                <div className="flex justify-center w-full my-10">
                  <Bars
                    color='red'
                    ariaLabel='loading'
                  />
                </div>
              )}
              {!!loadedProducts.length && loadedProducts?.map(product => (
                <ShopItem
                  key={product?.id}
                  {...product}
                />
              ))}
            </div>
            {loadedProducts.length !== products.length && (
              <button onClick={loadMore} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop;