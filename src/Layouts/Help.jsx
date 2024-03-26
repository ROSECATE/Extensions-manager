
import { NavLink, Outlet } from 'react-router-dom'

const Help= () => {
  return (
    <div className='help-layout'>
        <h2>HELP</h2>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nulla et aut iste maxime animi,
            deleniti quae dicta, officia dolore tenetur aliquid
             vitae esse tempora,
            
             earum provident! Maiores qui quasi nam.</p>
             <nav>
             <NavLink to='Faq'> View FAQ</NavLink>
             <NavLink to='contact'> Contact Us</NavLink>
    
             </nav>
            
            
             <Outlet />
      
    </div>
  )
}

export default Help
