import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../provider/AuthProvider";




const Login = () => {

const {signIn} = useContext(Authcontext);
 
const locatoin = useLocation();
const navigate = useNavigate();
console.log('location is',locatoin)

const handleLogin = e =>{
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = e.target
    const email=form.email.value
    const password=form.password.value
    
    // const email =e.target.email.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      navigate(location?.state ? location.state : '/')

    })
    .catch(error=>{
      console.log(error);
    })
}

    return (
        <div>
            <Navbar></Navbar>
           

        <div>
             <h2 className="text-2xl my-10 text-center">Login</h2>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not hava a accout <Link className="text-blue-600 font-bold" to = '/register'>Register</Link></p>
        </div>
           
        </div>
    );
};

export default Login;