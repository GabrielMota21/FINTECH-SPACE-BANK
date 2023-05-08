import Styles from "./Section.module.css"
import voltar from "../../imagens/voltar.png"
import {Link} from "react-router-dom"



function Section (){
    return(
        <div className={Styles.Login}>

            <div className={Styles.branco}>
                <Link to="/">
                <img className={Styles.voltar} src={voltar} alt="" />
                </Link>
            </div>
            <div className={Styles.Esquerdo}>
                <p>VOLTAR </p>
            </div>
            <div className={Styles.Direita}>
                    <h2>LOGIN</h2>

                    <div className={Styles.cpf}>
                    <p>CPF:</p>
                   <input type="number" /> 
                   </div>

                    <div className={Styles.senha}>
                    <p>Senha:</p>
                   <input type="password" />
                    </div>

                    <div className={Styles.lembrar}>
                    <input type="checkbox" />
                    Lembrar-me
                    </div>

                    <div className={Styles.acessar}>
                        <button>
                            ACESSAR
                        </button>

                        <p>Esqueceu Senha</p>
                    </div>
            </div>
        </div>
    )
}
export default Section