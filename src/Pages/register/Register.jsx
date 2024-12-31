import { Link } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";


const Register = () => {
const {creatuser}=useContext(Authcontext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target
        const name=form.name.value
        const photo=form.photo.value
        const email=form.email.value
        const password=form.password.value
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        // const photo = form.get('photo');
        // const email = form.get('email');
        // const password = form.get('password');
        // const name =e.terget.name.value;

        console.log(name,photo,email,password);
        creatuser(email,password)
        .then(result =>{
          console.log(result.user)
          e.target.reset();
          sendEmailVerification(result.user)
          .then(() => {
            alert('Plz chect yout email and verify access')
          })

        })
        .catch(error =>{
          console.log(error);
        })
    }
    
    return (
        <div>
            <Navbar></Navbar>
           

           <div>
                <h2 className="text-2xl my-10 text-center">Register</h2>
           <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Photo URL</span>
             </label>
             <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
           </div>
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
             <button className="btn btn-primary">Register</button>
           </div>
         </form>
         <p className="text-center mt-4">Already have an accout<Link className="text-blue-600 font-bold" to = '/login'>Login</Link></p>
           </div>
        </div>
    );
};

export default Register;