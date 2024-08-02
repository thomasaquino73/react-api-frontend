import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";
export default function Home() {

const [product,setProduct] = useState([]);

useEffect(()=>{
    fetchAllProduct();
},[]);

const fetchAllProduct=()=>{
    http.get('/product').then(res=>{
        setProduct(res.data);
    })
}
const deleteProduct = (id) =>{
    http.delete('/product/'+id).then(res=>{
        fetchAllProduct();
    })
}
    return(
        <div>
            <h2>Product List</h2>
            <table className="table">
                <thead>
                <tr>
                    <td></td>
                    <td>Product Name</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Discount</td>
                    <td>Action</td>
                </tr>
                </thead>
                    <tbody>
                      {product.map((prod,index)=>(
                        <tr key={prod.id}>
                            <td>{++index}</td>
                            <td>{prod.Product_name}</td>
                            <td>{prod.Category}</td>
                            <td>{prod.Price}</td>
                            <td>{prod.Discount}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname:"/edit/"+prod.id }}> Edit</Link>
                                <Link className="btn btn-primary" to={{ pathname:"/view/"+prod.id }}> View</Link>
                                <button type="button" className="btn btn-danger" onClick={()=>{deleteProduct(prod.id)}}> Delete</button>
                            </td>
                        </tr>
                      ))}  
                    </tbody>
            </table>

        </div>
    )

}