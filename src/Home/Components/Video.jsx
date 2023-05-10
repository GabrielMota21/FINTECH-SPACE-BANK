import Styles from "./Video.module.css"
import Iphone from "../../imagens/spacecard.png"

function Video(){
    return(
        <div className={Styles.Video}>

            <div data-aos="fade-right" data-aos-once="false" data-aos-duration="2500">
 

            <img className={Styles.iphone} src={Iphone} alt="" />

            </div>

            <div className={Styles.Textos}>

            <h2>Suas escolhas  inteligentes merecem um cartão inteligente</h2>

            <button className={Styles.Botao2}>
                Peça sem anuidade!
            </button>
            </div>  
            <script>
                AOS.init();
            </script>
        </div>
        
    )
}
export default Video