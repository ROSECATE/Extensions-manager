import { NavLink,Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <div className='root-layout'>
    <header>
    <h3>EXTENSION MANAGER</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Login">Login</NavLink>
        <NavLink to="SignUp">SignUp</NavLink>
        <NavLink to="Help">Help</NavLink>
        <NavLink to="SidebarData"></NavLink>

       

      </nav>
    </header>
    <main>
        <Outlet/>
    </main>
   </div>
   
  )
}

export default RootLayout
