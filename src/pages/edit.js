import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import http from '../http'
export default function Edit(props) {
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
const handleChange=(event) =>{
    const name =event.target.name;
    const value =event.target.value;
    setInputs(values =>({...values,[name]:value}))
}

const submitForm = ()=>{
    http.post('/product',inputs).then((res)=>{
        navigate('/');
    })
}
    return(
        <div>
            <h2>Add New Product</h2>
            <div className="card" >
                <div className="card-body">
                    <label>Product Name</label>
                    <input type="text" className="form-control" name="Product_name" value={inputs.Product_name || ''} onChange={handleChange}/>
                    <label>Category</label>
                    <input type="text" className="form-control" name="Category" value={inputs.Category || ''} onChange={handleChange}/>
                    <label>Price</label>
                    <input type="number" className="form-control" name="Price" value={inputs.Price || ''} onChange={handleChange}/>
                    <label>Discount</label>
                    <input type="number" className="form-control" name="Discount" value={inputs.Discount || ''} onChange={handleChange}/>
                    <button type="button" className="btn btn-info mt-2" onClick={submitForm}> Save</button>
                </div>
            </div>
        </div>
    )
}