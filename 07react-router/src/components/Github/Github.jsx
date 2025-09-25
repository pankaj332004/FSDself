
import { useEffect, useState } from "react"


function Github() {
    
    const [data, setData] = useState([])
    useEffect(() => {
     const getData = async()=>{
      const response = await fetch('https://api.github.com/users/Rajsingh6389')
      return response.json()}
      getData().then((res)=>setData(res))
      console.log(data)
     },[]);
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>

  )
}
export default Github




