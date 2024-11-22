const Cart=[];
const handleCart = (state = Cart, action)=>{
const product = action.payload;
switch(action.type){

    case "ADDITEM":
        const exist = state.find((x)=> x.id === product.id);
        if(exist){
            return state.map((x)=> x.id === product.id ? {...x,qty: x.qty+1}:x)
        }else{
            const product = action.payload;
            return [...state,{...product,qty:1}]
        }
        break

    case "DELITEM":
        const exist1 = state.find((x)=> x.id === product.id);
        if(exist1.qty === 1){
            return state.filter((x)=>x.id !== exist1.id)
        } else{
            return state.map((x)=> x.id === product.id ? {...x,qty:x.qty-1}:x)
        }
        break


    case "ADDID":
            const existid = state.find((x)=> x.id === product.id);
            if(existid){
                return state.map((x)=> x.id === product.id ? {...x,qty : x.qty}:x)
            }else{
                const product = action.payload;
                return [...state,{...product,qty:1}]
            }
            break
    
            
    // case "DELID":
    //         const existid1 = state.find((x)=> x.id === product.id);
    //         if(existid1.qty >= 1){
    //             return state.filter((x)=>x.id !== existid1.id)
    //         }
    //         break
    default:
            return state
            break

}
}
export default handleCart;