import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.cofig';
import { useContext } from 'react';
import { Authcontext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const RightsideNav = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const { user } = useContext(Authcontext);

    const handleGoogleLogIN = ()=> {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);   
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubLogIn = () => {
        signInWithPopup(auth,gitHubProvider )
        .the(result => {
            const user=result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {
                !user && <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl">Login with</h2>
                <button onClick={handleGoogleLogIN} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button onClick={handleGithubLogIn} className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
                </button>
            </div>
            }
            <div className='p-4 mb-6'>
                <h2 className="text-2xl mb-4">Follow us</h2>
                <Link to='https://www.facebook.com/mdrabbi.sarkar.921' className='p-4 flex text-lg items-center border rounded-t-lg' ><FaFacebookF className='mr-3'></FaFacebookF> Facebook</Link>
                <Link to='https://twitter.com/Rabbi88846241' className='p-4 flex text-lg items-center border rounded-t-lg' ><FaTwitter className='mr-3'></FaTwitter>Twitter</Link>
                <Link to='https://www.instagram.com/mdrabbi.sarkar.921/' className='p-4 flex text-lg items-center border rounded-t-lg' ><FaInstagram className='mr-3'></FaInstagram>Isntagram</Link>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl">Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
                
            </div>
            
        </div>
    );
};

export default RightsideNav;