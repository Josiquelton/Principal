import './App.js'
import './App.css'
import { FiAlignJustify } from "react-icons/fi";
import { GoArrowDown } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
function App() {
     { for(let i = 0; i < 1; i ++) {
          alert("seja bem vindo!")
      }
     }
     

     
  return (
    <>
    <nav className='navbar'>
    
      <ul className='nav-links-desktop'>
        <li><a href="https://login-hk17.vercel.app/">Login</a></li>
        <li><a href="https://sobre-ecru.vercel.app/">Sobre</a></li>
        <li><a href="https://contatos-delta.vercel.app/">Contatos</a></li>
      </ul>
      <button className='hamburger' id='hamburgerButton'>
      <FiAlignJustify/>
      </button>
      <div className='mobile-menu' id='mobileMenu'>
        <button className='close' id='closeButton'>
        <IoMdClose />
        </button>
        <ul className='nav-links-mobile'>
        <li><a href="https://login-hk17.vercel.app/">Login</a></li>
        <li><a href="https://sobre-ecru.vercel.app/">Sobre</a></li>
        <li><a href="https://contatos-delta.vercel.app/">Contatos</a></li>
      </ul>
      </div>
    </nav>
    <div className='container'>
      <h1>coloque os seus dados Aqui!<GoArrowDown /></h1>
      <form action="https://formspree.io/f/meoqqdrg" method="POST">
        <label>Nome</label><br/>
        <input type="text" placeholder='nome' required="required" name="name"/><br/>
        <label>Sobre Nome</label><br/>
        <input type="text" placeholder='sobre nome' required="required" name="surname"/><br/>
        <label>Email</label><br/>
        <input type="email" placeholder='email' required="required" name="email"/><br/>
        <label>Contato</label><br/>
        <input type="tel" placeholder='contato' maxLength={11} required="required" name="surname"/><br/>
        <textarea  placeholder='Escreva aqui sua sugestão!' maxLength={500} id="mensager" name="mensagem"></textarea><br/>
        <button type='submit' id="tosend">Enviar</button>
      </form>
    </div>
      
    
      
    </>
  )
}

export default App;
