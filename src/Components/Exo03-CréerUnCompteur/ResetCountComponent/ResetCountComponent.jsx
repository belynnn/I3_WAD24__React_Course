import styles from "../../Exo04-CréerUneCalculatrice/NumberCruncherComponent/NumberCruncherComponent.module.css";

function ResetCountComponent({ onReset }) {
    return <button className={styles.button} onClick={onReset}>Réinitialiser</button>;
}

export default ResetCountComponent