import React from 'react'
import './ProductsTop.css'
import Select from 'react-select'

const ProductsTop = ({filterItems, ddlHandler, data, setData, filteredData, setFilteredData}) => {
    const categories = [ "all","electronics","jewelery","men's clothing","women's clothing"]

    const options = [
        { value: 'up', label: 'Price: Low to Hight' },
        { value: 'down', label: 'Price: Hight to Low' },
      ]

    return (

        <nav>
            <div className="main-top">
                <h3>Select filter:</h3>
                <h3>Sort by:</h3>
            </div>
            <div className="main-top-filters">
                <div className="btn-container">
                  {categories.map((category, index) => {
                    return (
                      <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)} > {category} </button>
                    )
                  })}
                </div>

                <div className="btn-container-drop-down">
                <Select options={options} onChange={ddlHandler} /> 
                </div>
            </div>
        </nav>
    )
}

export default ProductsTop
