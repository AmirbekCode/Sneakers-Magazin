 import avatar from './avatar.jpg'
 
 function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav-item">
             <img src=""  className="logo" />
             <ul>
               <li>
                 <a href="#">Collections</a>
                 <span></span>
               </li>
               <li>
                 <a href="#">Men</a> 
                 <span></span>
               </li>
               <li>
                 <a href="#">Women</a>
                 <span></span>
               </li>
               <li>
                 <a href="#">About</a>
                 <span></span>
               </li>
               <li>
                 <a href="#">Contact</a>
                 <span></span>
               </li>
             </ul>
        </div>
        <div className="profile-section">
          <i class="fa-solid fa-cart-shopping"></i>
          <img src={avatar} alt="" className="profilephoto" />
        </div>
      </div>
    </div>
  );
}

export default App;
