import React,{useState} from 'react';
import './App.css'
export default function Myname(){
  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return[
    <div>
      <h1>{like}</h1>
      <button onClick={()=>{
        setLike(like+1)
      }}>LIKE</button>

      <button onClick={()=>{
        setdislike(dislike-1)
        if (dislike===0){
          setLike(0)
        }

      }}>DISLIKE</button>
    </div>

  ]
}