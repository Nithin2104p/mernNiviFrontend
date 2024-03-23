import React, { useEffect } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {
    const [popularProducts, setPopularProduct] = useState([])
    useEffect(() => {
        fetch('https://canteen-evz0.onrender.com/popularinwomen')
            .then((response) => response.json())
            .then((data) => setPopularProduct(data));
    }, [])


    return (
        <div className='popular'>
            <h1>AfterNoon Specials</h1>
            <hr />
            <div className="popular-item  mar">
                {popularProducts.map((item, i) => {
                    let image = <img src={item.image} alt="" />
                    // Include the image variable here
                    return (
                        <div className='return'>
                            <Link to={`/product/${item.id}`}>{image}</Link>
                            <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}><h3>{item.name} </h3></Link>
                            <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', textAlign: 'center' }}><Item key={i} id={item.id} new_price={<p><b> Price : {item.new_price} /-</b></p>} old_price={<p>Old price :{item.old_price} /-</p>} /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular
