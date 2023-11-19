 import { Link } from 'react-router-dom';

 const Navbar= () => {
    return (
<nav className="navbar">
    <h1>My Blogs</h1>
    <div className="links">
        <Link to="/" style={{
            color:"white",
            backgroundColor: 'rgb(36, 11, 202)',
            borderRadius: '8px'}}>Home</Link>
        <Link to="/create" style={{
            color:"white",
            backgroundColor: 'rgb(36, 11, 202)',
            borderRadius: '8px'

        }}>New Blog</Link>
    </div>
</nav>
      );
}
 
export default Navbar;