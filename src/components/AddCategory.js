import React, {useState} from 'react';
import PropTypes from 'prop-types'
const AddCategory = ({setcategories}) => {
  //LOGICA PARA TRABAJAR LOS IMPUTS
    const [inputValue, setinputValue] = useState('');
   //FUNCION QUE MANEJA LA CAJA DE TEXTO 
     const handleInputChange =(e)=>{
        setinputValue(e.target.value)
    }
   //FUNCION QUE MANEJA EL ENTER
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        if (inputValue.trim().length >2) {
            setcategories(cats =>[ inputValue, ...cats]);
            setinputValue('');
        }else{

        }
       
    }


    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} 
        onChange={handleInputChange}
        />
        
    </form>
  )
}

AddCategory.propTypes ={
    setcategories: PropTypes.func.isRequired
    
}
export default AddCategory;