import styles from "./footer.module.css"
import imgReact from "../../images/react.png"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <p>Ruan Fernandes</p>
            <p>
                Projeto desenvolvido com  
                <span> React </span><img src={imgReact} alt="" />
            </p>
        </footer>
    )
}

export default Footer;