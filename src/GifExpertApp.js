import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp =()=>{
 
    const [categories, setcategories] = useState([ 'One Punch']);
    
    //ONCLICK
    // const handleAdd =(e)=>{
    //     setcategories([...categories, 'Nuevo Valor']);
    // }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setcategories={setcategories}/>
            <hr/>

            <ol>
                {categories.map(category =>
                    <GifGrid 
                        key={category}
                        category={category}/>  
                )
                }
                    

            </ol>
           
           
        </> 
    )

   
} 

export default GifExpertApp;