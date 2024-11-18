import { useState } from "react";
import styles from "./form.module.css"

const Form = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultadoIMC, setResultadoIMC] = useState(false);
    let [classificacao, setClassificacao] = useState("");

    const calculaIMC = (e) => {
        e.preventDefault();
        if (peso > 1 && altura > 0) {
            const imc = peso / (altura * altura);
            if (imc < 18.5) setClassificacao("Abaixo do peso");
            else if (imc >= 18.5 && imc <= 24.9) setClassificacao("Peso normal");
            else if (imc >= 25 && imc <= 29.9) setClassificacao("Sobrepeso");
            else if (imc >= 30 && imc <= 34.9) setClassificacao("Obesidade Grau 1");
            else if (imc >= 35 && imc <= 39.9) setClassificacao("Obesidade Grau 2");
            else setClassificacao("Obesidade Grau 3");
            setResultadoIMC(imc.toFixed(2)); // resultadoIMC = valor formatado
        } else {
            setResultadoIMC('Inválido! Por favor, insira valores válidos.'); // resultadoIMC = 'Texto...'
        }
    }

    return (
        <>
        <h1 className={styles.title}>Calculadora IMC</h1>
            <form className={styles.form} action="">
                <input className={styles.campoPeso} type="number" onChange={e => setPeso(e.target.value)} placeholder="Peso - Ex: 70" />
                <input className={styles.campoAltura} type="number" onChange={e => setAltura(e.target.value)} placeholder="Altura - Ex: 1.71" />
                <button className={styles.btn} type="submit" onClick={calculaIMC}>Calcular</button>
                <div className={styles.res}>
                    {resultadoIMC && ( // se for true faça
                        <div className={styles.res}>
                        <p>Seu IMC é: {resultadoIMC}</p>
                        <p>{classificacao}</p>
                        </div>
                        
                    )}
                </div>
            </form>
        </>
    );
}

export default Form;