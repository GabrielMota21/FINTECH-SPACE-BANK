import Styles from "../Components/Footer.module.css"
import logo from "../../imagens/Logo.png"

import link from "../../imagens/linkedin.png"
import facebook from "../../imagens/facebook 1.png"
import instagram from "../../imagens/instagram 1.png"
import youtube from "../../imagens/youtube.png"
import twitter from "../../imagens/twitter.png"

function Footer (){
    return(
        <div className={Styles.Footer}>

            <div className={Styles.principal}>

                <div className={Styles.Endereco}>
                <img className={Styles.logofooter} src={logo} alt="" />

                <p>Avenida Brigadeiro Faria Lima, nº 54786, Jardim Paulistano, São Paulo, SP - CEP 01452-001</p>
                </div>

                <div className={Styles.importantes}>

                <h2>Documentos importantes</h2>

                <p>Correspondentes Bancarios</p>
                <p>Agentes Space </p>
                <p>Tarifas</p>

                </div>

                <div className={Styles.seguranca}>
                    <h2>Segurança</h2>

                    <p>Política de privacidade</p>
                    <p>Telefones úteis </p>
                    <p>Imprensa </p>
                </div>

                <div className={Styles.icones}>

                    <img className={Styles.img} src={link} alt="" />
                    <img className={Styles.img} src={facebook} alt="" />
                    <img className={Styles.img} src={instagram} alt="" />
                    <img className={Styles.img} src={youtube} alt="" />
                    <img className={Styles.img} src={twitter} alt="" />
                </div>

            </div>

            <p className={Styles.p}>© 2023 Banco SPACE  S.A. CNPJ 98.863.312/0001-23</p>


        </div>
    )
}
export default Footer 