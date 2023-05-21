import { useNavigate, useParams } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from '@reach/router';
function UpdateProduct() {
    const [productData, setProductData] = useState({});
    const [data2,SetData]=useState([]);
    const navigate=useNavigate();
    const {id}=useParams();
    var dd={
        id:"",
        name: '',
        price:'',
        seller: '',
        description:'',
        status: ''
    }

    useEffect(()=>{
        
        if(sessionStorage.getItem("admin")===null){
            navigate("/admin_login");
        }
        
        axios.get("http://localhost:8081/getProduct/"+id)
        .then(resp=>setData({...data,id:resp.data.id,name:resp.data.name,price:resp.data.price,seller:resp.data.seller,description:resp.data.description,status:resp.data.status}));
        // console.log(data);
    },[])
    const [data, setData] = useState({
        id:"",
        name: "",
        price:"",
        seller: "",
        description:"",
        status: ""
      })
      const updateData = (event, property) => {
        const target = event.target
        console.log(target)
    
        event.preventDefault()
        setData((prevState) => ({
          ...prevState,
          [property]: event.target.value,
        }))
      }


      const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        axios.put("http://localhost:8081/addProduct",data)
        .then(resp=>alert("Medicine Updated"))
        navigate('/admin_home')
      }

    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light text-center" style={{background:'#ffbc6c'}}>
<Link to="/admin_home" className="navbar-brand mx-5 " href="#" style={{position:'relative',left:'7.5pc'}}><b>Medicare Admin</b></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
      <li className="nav-item"  style={{position:'relative',right:'-51.8pc'}}>
      <button className='btn btn-danger'  onClick={() => {
                    sessionStorage.removeItem("admin");
                    navigate("/admin_login");
                }}>Logout</button>
      </li>

    </ul>
  </div>
</nav>
        <div className='d-flex justify-content-center align-items-center' style={{ height: '37pc' }}>
        <div className='w-50 bg-white rounded' style={{ padding: '23px',border:'2px solid', overflowY: "scroll", height: "58%",position:'relative',top:'-30px' }}>
   <form>
                    <h2>Update Medicine</h2>
                    {/* <div className='mb-2'>
                        <label >Name</label>
                        <input type='text' placeholder='Enter Medicine Name' 
                         onChange={(e) => updateData(e, 'name')}
                         value={data.name}
                        className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label >Seller</label>
                        <input type='text' placeholder='Enter Medicine Seller' 
                         onChange={(e) => updateData(e, 'seller')}
                         value={data.seller}

                        className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label >Price</label>
                        <input type='text' placeholder='Enter Medicine Price' 
                         value={data.price}
                         onChange={(e) => updateData(e, 'price')}
                        className='form-control'/>
                    </div> */}
               
                    <div className='row'>
                    <div className='col mb-2'>
                        <label >Name</label>
                        <input type='text' placeholder='Enter Medicine Name' 
                         onChange={(e) => updateData(e, 'name')}
                         value={data.name}
                        className='form-control'/>
                    </div>
                    <div className=' col mb-2'>
                        <label >Seller</label>
                        <input type='text' placeholder='Enter Medicine Seller' 
                         onChange={(e) => updateData(e, 'seller')}
                         value={data.seller}

                        className='form-control'/>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col mb-2'>
                        <label >Price</label>
                        <input type='text' placeholder='Enter Medicine Price' 
                         onChange={(e) => updateData(e, 'price')}
                         value={data.price}

                        className='form-control'/>
                    </div>
                        <div className='col mb-2'>
                            <label >Description</label>
                            <input type='text' placeholder='Enter Medicine Description' 
                             onChange={(e) => updateData(e, 'description')}
                             value={data.description}

                            className='form-control'/>
                        </div>
                        </div>
                    
                    <div className='mb-2'>
                        <label >Status</label>
                        <input type='text' placeholder='Enter Medicine Status' 
                         value={data.status}
                         onChange={(e) => updateData(e, 'status')}
                        className='form-control'/>
                    </div>
                    {/* <div className='mb-2'>
                        <label >Description</label>
                        <input type='text' placeholder='Enter Medicine Description' 
                         value={data.description}
                         onChange={(e) => updateData(e, 'description')}
                        className='form-control'/>
                    </div> */}
                    <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default UpdateProduct;