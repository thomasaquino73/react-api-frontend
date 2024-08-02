import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import http from '../http'

export default function View(props) {
const navigate=useNavigate();
const [inputs,setInputs]=useState({});
const {id}=useParams();
useEffect(()=>{
    fetchAllProduct();
},[]);
const fetchAllProduct=()=>{
    http.get('/product/'+id+'/edit').then((res)=>{
        setInputs({
            Product_name:res.data.Product_name,
            Category:res.data.Category,
            Price:res.data.Price,
            Discount:res.data.Discount,
        });
    });
}
    return(
        <div>
            <h2>Add New Product</h2>
            <div className="card" >
                <div className="card-body">
                    <label>Product Name</label>
                    <input type="text" className="form-control" disabled name="Product_name" value={inputs.Product_name || ''} />
                    <label>Category</label>
                    <input type="text" className="form-control" disabled name="Category" value={inputs.Category || ''} />
                    <label>Price</label>
                    <input type="number" className="form-control" disabled name="Price" value={inputs.Price || ''} />
                    <label>Discount</label>
                    <input type="number" className="form-control" disabled name="Discount" value={inputs.Discount || ''} />
                </div>
            </div>
        </div>
    )
}