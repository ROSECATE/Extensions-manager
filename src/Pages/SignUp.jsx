import {useState } from 'react'
import { Link} from 'react-router-dom';
import { GiRank3 ,} from "react-icons/gi";
import { FaUser , FaLock} from 'react-icons/fa';
import { AiOutlineFieldNumber } from "react-icons/ai";

import axios from 'axios';



const Signup = () => {

  const [svc_no, setServiceNumber] = useState("")
  const [rank, setRank] = useState("")
  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  console.log(svc_no)
  console.log(rank)
  console.log(user)
  console.log(username)
  console.log(password)

  const handleSubmit = () =>{
    const SignUpData ={svc_no:svc_no, rank:rank,name:user, username:username,password:password}

    alert(JSON.stringify(SignUpData))
  }
 
  return (
    <div className='wrapper'>
    
          <form className='form'>
            <div className='header'>
            <div className='text'>SIGN UP</div>
              <div className='underline'></div>
            
            </div>
              
              <div className='input-box'>
              <input type='text' name='svc_no' placeholder='Service Number' 
              value={svc_no}
               onChange={(e)=>setServiceNumber(e.target.value)}
              /> <AiOutlineFieldNumber className='icon'/><br></br><br></br>
              </div>
              <div className='input-box'>
              <input type='text' name='rank' placeholder='Rank' 
              value={rank}
               onChange={(e)=>setRank(e.target.value)}
              /> <GiRank3 className='icon'/><br></br><br></br>
              </div>
              <div className='input-box'>
              <input type='text' name='name' placeholder='Name' 
              value={user}
               onChange={(e)=>setUser(e.target.value)}
              /> <FaUser className='icon'/><br></br><br></br>
              </div><div className='input-box'>
              <input type='text' name='username' placeholder='Username' 
              value={username}
               onChange={(e)=>setUsername(e.target.value)}
              /> <FaUser className='icon'/><br></br><br></br>
              </div>
  
              <div className='input-box'>
              <input type='password' name='password' placeholder='Enter Password' 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} />
              <FaLock className='icon' /><br></br>
              </div><br></br>
              
              <div className='remember-forgot'>
                  <a href='#'>Forgot Password?</a><br></br>
              </div>
              
              <div  className='submit-container'>
                <input className='submit' type="button"
                 onClick={handleSubmit} 
                 value="Login"/>
          
              </div>
             
              <div className='register-link'>
                  <p>Already Have An Account? <Link to="Login"> Login</Link></p>
                  
              </div>
  
  
          </form>
        
      </div>
  )
}

export default Signup

