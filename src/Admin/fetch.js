
export const fetchData= async ()=>{
    try{
        let res = await fetch("https://backend-airbnb-stqx.onrender.com/api/locations");
        let data= await res.json();
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
    


}