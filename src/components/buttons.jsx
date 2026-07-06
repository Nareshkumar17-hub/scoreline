import { useReducer } from "react"; 


function Button({ clicktype , innercomponent , dispatch}) {

  return(

   <>
      <button onClick={() => dispatch({type : clicktype})} className=" active:bg-green-600 border-2 border-green-400 font-bold p-3 active:text-white rounded-full ">{innercomponent}</button>
   
   
   </>




  )




} 

export default Button