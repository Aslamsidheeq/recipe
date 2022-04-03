import { useEffect } from "react";
import { useState } from "react";


function Popular() {

  const[popular,setPopular]=useState([]);

  //To work getPopular initially without calling ; useEffect.
  useEffect(() => {
    getPopular();
  }, []);
  
    const getPopular = async() => {
      // nine random popular dishes from spoonacular api
        const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=0a0e5b7573294e9b906ad1f0957f596c&number=9')
        const data = await api.json();
        
        //useState
        setPopular(data.recipes)
        console.log(popular)
      }
  return (
    <div>
     {
       popular.map((recipe)=>{
        return(
          //for unique key property
           <li key={recipe.id}>
            {recipe.title}
            </li>
        )
       })}
     
    </div>
  )
}

export default Popular