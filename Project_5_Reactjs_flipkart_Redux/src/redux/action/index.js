export const addcart =(product) =>{
    return{
        type : "ADDITEM",
        payload :product
    }
}
export const delcart =(product)=>{
    return{
        type :"DELITEM",
        payload :product
    }
}
export const idaddcart =(product) =>{
    return{
        type : "ADDID",
        payload :product
    }
}
// export const iddelcart =(product)=>{
//     return{
//         type :"DELID",
//         payload :product
//     }
// }
