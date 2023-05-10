import Styles from "./Header.module.css"
import Logo from "../../imagens/Logo.png"
import  { Link } from "react-router-dom"

function Header (){
    return(
        <div className={Styles.Header}>
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>
            
            <p>PARA VOCÊ</p>
            <p>PARA SUA EMPRESA </p>
            <p>AJUDA</p>
            <p>SOBRE NÓS</p>

            <p className={Styles.cliente}>ÁREA DO CLIENTE</p>

            <button  className={Styles.botao1}>
               <Link className={Styles.login} to="/login">
               Login
               </Link>
            </button>
            
        </div>
    )

}
export default Header