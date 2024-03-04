import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

function SignUp() {

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    });

    return (
        <div>
        <h2>SignUp</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <NavLink to="/Login">Login here</NavLink></p>
      </div>
  )
}

export default SignUp