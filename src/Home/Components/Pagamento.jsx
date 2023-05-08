import Styles from "../Components/Pagamento.module.css"


function Pagamento (){
    return(
        <div className={Styles.Pagamento}>

            <div className={Styles.card}>

                <div className={Styles.Textos}>

                <h2>Pague pelo celular</h2>

                <p>Aproxime seu celular, ou smartwatch, da maquininha e faça compras sem tirar o cartão da carteira.</p>

                <button ClassName={Styles.botao4}>
                    saiba mais
                </button>

                </div>
            </div>
        </div>
    )
}
export default Pagamento