const AddCountComponent = ({ incrementValue, onIncrement }) => {
    return <button onClick={onIncrement}>Incrémenter de {incrementValue}</button>
}

export default AddCountComponent