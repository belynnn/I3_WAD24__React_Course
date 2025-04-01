import styles from '../../Exo04-CréerUneCalculatrice/NumberCruncherComponent/NumberCruncherComponent.module.css'

const AddCountComponent = ({ incrementValue, onIncrement }) => {
    return <button className={styles.button} onClick={onIncrement}>Incrémenter de {incrementValue}</button>
}

export default AddCountComponent