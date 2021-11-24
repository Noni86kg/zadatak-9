import "./Products.css"
import ProductsTop from './ProductsTop'
import Carts from './Carts'

const Products = ({filterItems, ddlHandler, data, setData, handleAddProduct, handleDetails, filteredData, setFilteredData, cartItems}) => {
        return (
                <main>
                    <ProductsTop filterItems={filterItems} ddlHandler={ddlHandler} data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData}/>
                    <section className="carts">
                      <Carts data={data} handleAddProduct={handleAddProduct} handleDetails={handleDetails} cartItems={cartItems}/>
                    </section>
                    
                </main>
            )
}

export default Products
