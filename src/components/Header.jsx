const Header = () => {

 return (
   <>
     <header className="sticky flex justify-between items-center top-0 w-screen relative z-50 bg-blue-400 h-20">
       <div className="ml-4">
         <h1>CLEARVIEW</h1>
       </div>

       <nav className="mr-4 flex gap-x-2">
         <a>My Cities</a>

         <a>Search</a>
       </nav>
     </header>
   </>
 );
}

export default Header;