import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate()
    
    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
        axios.get('https://server-login-and-signup-1.onrender.com/auth/verify')
        .then(res=>{
            if(res.data.status){

            }else{
                navigate('/home', { replace: true })
            }
        })
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>Dashboard</h1>
      <Link to="/home" className="btn btn-primary">Home</Link>
    </div>
  )
}

export default Dashboard