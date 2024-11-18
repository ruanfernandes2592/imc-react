import styles from "./Info.module.css"
import TabIMC from "../../images/tab-imc.png"

const Info = () => {

    return (
        <>
        <h2 className={styles.title}>Sobre o IMC</h2>
        <p className={styles.sobre}>
        O Índice de Massa Corporal (IMC) é um parâmetro bastante utilizado para classificar o indivíduo de acordo com seu peso e altura. Seu uso é disseminado principalmente entre profissionais que trabalham com o corpo, como médicos, fisioterapeutas e profissionais de Educação Física. É importante ressaltar que a Organização Mundial da Saúde (OMS) utiliza esse índice como indicador do nível de obesidade nos diferentes países.
        </p>
        <img className={styles.imgImc} src={TabIMC} alt="Tabela IMC" title="Tabela IMC"/>
        </>
    )
}

export default Info;