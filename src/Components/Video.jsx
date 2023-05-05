import Styles from "./Video.module.css"
import Iphone from "../imagens/Iphone.png"
function Video(){
    return(
        <div className={Styles.Video}>

            <div>

            <img className={Styles.iphone} src={Iphone} alt="" />

            </div>

            <div className={Styles.Textos}>

            <h2>Suas escolhas  inteligentes merecem um cartão inteligente</h2>

            <button className={Styles.Botao2}>
                Peça sem anuidade!
            </button>
            </div>  
          
        </div>
    )
}
export default Video