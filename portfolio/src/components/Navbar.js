const Navbar = () => {
    return ( 
        <nav className="navbar">
           <h1> Vaibhav /></h1>
            <div className="links">
                <a href="/">About</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
              
                <a href="/contact" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius : "8px"
                }}>Contact</a> 

            </div>              
        </nav>
     );
}
 
export default Navbar;