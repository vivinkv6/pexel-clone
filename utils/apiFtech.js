const axios=require('axios');

const apiFetch=async(url)=>{
    const res=await axios.get(url,{
        headers:{
            Authorization:process.env.API_KEY
        }
    })
    
    return res;
}

module.exports=apiFetch;