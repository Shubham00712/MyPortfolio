import './navbar.css';
import logo from './user.png';
import icon from './menu.png';

function togglelist(){
    if(document.getElementById("togglelist").style.display==="none")
    {
    document.getElementById("togglelist").style.display="block";
}
    else{
        document.getElementById("togglelist").style.display="none";
    }
}

function NavBar(){
    return(<div className='main-nav'>
        <div className="navbar">
            <div className="left-nav"><img src={logo} alt ="profile"/><h3>Shubham Sharma</h3></div>
            <div className="right-nav">
            <div className="toggle" onClick={togglelist}><img src={icon} alt="toggle"/>
            </div>
                <ul className='sections'>
                    <li><a href="#about">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
        <div className='togglelist' id='togglelist'>
            <ul>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </ul>
    </div></div>
    )
}

export default NavBar;