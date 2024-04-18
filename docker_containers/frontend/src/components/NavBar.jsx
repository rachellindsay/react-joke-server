import { NavLink } from 'react-router-dom'
import "./styles.css"

const NavBar = () => {
    const linkClass = ({isActive}) => isActive
    ? <div style={{ color: 'red' }}></div>
    : <div style={{ color: 'lightslategray' }}></div>

    return (
       <ul className="navigation" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            backgroundColor: "var(--accent-color)",
            color: "var(--text-accent-color)",
            listStyleType: "none",
       }}>
            <li style={{
               padding: "0.3rem 0.4rem",
               fontSize: "1.2rem", 
               textDecoration: "none",
               textAlign: "center",
               textWrap: "nowrap",
            }}>
                <NavLink to="/">
                    <span>jokes</span>
                </NavLink>
            </li>
            <li style={{
               padding: "0.3rem 0.4rem",
               fontSize: "1.2rem", 
               textDecoration: "none",
               textAlign: "center",
               textWrap: "nowrap",
            }}>
                <NavLink to="/submit">
                    <span>share joke</span>
                    
                </NavLink>
            </li>
            <li style={{
               padding: "0.3rem 0.4rem",
               fontSize: "1.2rem", 
               textDecoration: "none",
               textAlign: "center",
               textWrap: "nowrap",
            }}>
                <NavLink to="/approve">
                    <span>approve joke</span>
                    
                </NavLink>
            </li>
            <li style={{
               padding: "0.3rem 0.4rem",
               fontSize: "1.2rem", 
               textDecoration: "none",
               textAlign: "center",
               textWrap: "nowrap",
            }}>
                <NavLink to="/about">
                    <span>about</span>
                    
                </NavLink>
            </li>
           

       </ul>
        
    )
}
export default NavBar