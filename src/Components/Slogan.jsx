import Mulher from "../imagens/MulherSlogan.png"
import Styles from "./Slogan.module.css"

function Slogan(){
    return(
        <div className={Styles.Slogan}>
            <h3>Fintech feita para você, pensando em tudo o que você precisa.</h3>

            <img className={Styles.Mulher} src={Mulher} alt="" />
        </div>
    )
}
export default Slogan