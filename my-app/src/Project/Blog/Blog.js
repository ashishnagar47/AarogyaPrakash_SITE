import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Blog=()=> {
  const [data,setData]=useState([])
  useEffect(()=>{
    // console.log(r.body)
    fetch('/allBlog')
    .then(res=>res.json())
    .then(result=>{
      // console.log(result.Blog)
      setData(result.Blog)
    })
  },[])

  // const Treat=(id)=>{
  //   // const [treat,setTreat]=useState([])
  //   console.log("I am here")
  //     fetch('/treat?id='+id)
  //     .then(res=>res.json())
  //     .then(result=>{
  //       const newData=data.map(item=>{
  //         if(item._id==result._id){
  //             return result
  //         }
  //         else{
  //             return item
  //         }
  //     })
  //     // setData(newData)
  //       setData(newData)
  //     })
  //     }
    
  
  return (
    <div className='Blog' style={{textAlign:"center"}}>

      <div className="sidebar">
      <a className="active"><b>Blogs</b></a>
      {
        data.slice(-1000).reverse().map(item=>{
          return(
          <Link className='text-wrap' to={"/bl/"+item._id}   key={item.title}>
            <b>{item.title}</b></Link>
          )
        })
      }
      </div>


      {
        data.slice(-1000).reverse().map(item=>{
          return(
          <div className="col d-flex justify-content-center" key={item._id}>
          <div className="card" style={{maxWidth:"800px", marginTop:"100px"}}>
            <img src={item.picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text" style={{overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitLineClamp: "3",WebkitBoxOrient: "vertical",}}>{item.body}</p>

              {/* <p className="card-text" >{item.body}</p> */}

              <Link to={"/bl/"+item._id} className="card-link">Read More</Link>
            </div>
          </div>
          </div>
          )
        }) 
      }

    </div>
  )
}

export default Blog