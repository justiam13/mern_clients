import '../style.css'
import {Link} from 'react-router-dom'
export default function Header(){
 return(
 <div className="header">
 <h3>FlipKart</h3>
 <ul>
 <li>
 <Link to="/register">Home</Link>
 </li>
<li><Link to="/login">Login</Link></li>
 <li><Link to="/register">Register</Link></li>
 </ul>
 </div>
 
 
 )
}