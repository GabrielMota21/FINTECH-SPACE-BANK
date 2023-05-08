import Styles from "../Components/Produto.module.css"
import cartoes from "../../imagens/cartoes1.png"

function Produto (){
    return(
        <div className={Styles.Area}>
            <div className={Styles.TextosProdutos}>

                <h2>Nossos Produto</h2>

                <p>Conheça já os nossos cartões!Personalize seu cartãos seu jeito!</p>

                <button className={Styles.botao3}>
                    PEÇA JÁ O SEU!
                </button>

            </div>

            <div className={Styles.cartoes}>
                <img src={cartoes} alt="" />
            </div>
        </div>
    )
}
export default Produto