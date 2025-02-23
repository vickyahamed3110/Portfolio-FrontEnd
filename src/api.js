const backendUrl =  'https://portfolio-backend-vf80.onrender.com/send-mail'
const sendMailApi = async(userData)=>{
    console.log(userData)
    const response = await fetch(backendUrl,{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        }
    })
    return await response.json()
}
export default sendMailApi;