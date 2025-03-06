import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const [username, setUsername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error,seterror] = useState(false)
  const navigate = useNavigate

  const handleRegister = async () =>{
    try {
      const res = await axios.post(URl + "/api/auth/register",{
      username,email,password })
      setUsername(res.data.username)
      setemail(res.data.email)
      setpassword(res.data.password)
      seterror(false)
      navigate("/login")

    } catch (err) {
      seterror(false)
      console.log(err);
       
    }


  }

  return (
    <div>
      <div className='flex items-center justify-between px-6 md:px-[200px] py-4' >
   <h1 className='text-lg md:text-xl font-extrabold'>
    <Link to="/">Blogosphere</Link>

   </h1>
   <h3>
    <Link to="/login">Login</Link>
    </h3>     

      </div>
      <div className='w-full flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w[25%]'>
     <h1 className='text-xl font-bold text-left'>
      Create an Account
      </h1>    

        </div>

      </div>

    </div>
  )
}

export default Register