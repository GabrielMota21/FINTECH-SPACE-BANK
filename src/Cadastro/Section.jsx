import Styles from "./Section.module.css"
import icone1 from "../imagens/apple-down.png"
import icone2 from "../imagens/playG.png"


function Section(){
    return(
        <div className={Styles.Section}>
                
                <h1> CADASTRE - SE </h1>
        <div className={Styles.principal}>
                <div className={Styles.esquerdo}>
                    <h2>UM <span className={Styles.verde}>BANCO DIGITAL COMPLETO </span> PARA VOCÊ RESOLVER TUDO EM UM SÓ LUGAR</h2>

                    <br />

                   <p className={Styles.p}>BAIXE AGORA MESMO O APP E ABRA SUA CONTA   :)</p>

                    <div className={Styles.icones }>
                        <img className={Styles.icone1}  src={icone1} alt="" />
                        <img className={Styles.icone2}  src={icone2} alt="" />
                    </div>
            </div>
            <div className={Styles.direito}>
                    
                    <div className={Styles.formulario} data-aos="fade-left" data-aos-duration="3000">

                    <div className={Styles.vagabundagem}>
                       <div className={Styles.celular}>
                         <label className={Styles.label} htmlFor=""> Nome:</label>
                        <input className={Styles.nome} type="text"placeholder="Ex: Gabriel Da Silva Mota "   />
                        </div>

                        <div className={Styles.celular}>
                        <label className={Styles.label} htmlFor="">E-mail:</label>
                        <input className={Styles.nome} type="email"placeholder="Ex: motagabriel87488@gmail.com"   />
                        </div> 
                        
                       <div className={Styles.celular}>
                       <label className={Styles.label} htmlFor="">Celular:</label>
                        <input className={Styles.nome} type="tel"placeholder="Ex: (11) 98646-3939"   />
                        </div>

                       <div className={Styles.cpf}>
                       <label className={Styles.label} htmlFor="">CPF:</label>
                        <input className={Styles.nome}  type="number"placeholder="Ex: 236.728.478-33"   />
                        </div>
                    </div>

                        <div className={Styles.termos}>

                        <input className={Styles.check} type="checkbox" />

                        <p>Ao enviar seus dados, você autoriza que o Banco Original entre em contato e declara estar ciente daPolítica de Privacidade</p>

                        </div> 

                         <button>
                            QUERO SER CLIENTE
                        </button> 
                    </div>
            </div>
        </div>
        </div>
    )
}
export default Section