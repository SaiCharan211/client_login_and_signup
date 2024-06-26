import axios from 'axios'
import React,{useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import baseUrl from './UrlFile'

function Dashboard() {
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
        axios.get(`${baseUrl}/verify`)
        .then(res=>{
            if(res.data.status){

            }else{
                navigate('/home')
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