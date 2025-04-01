const OperationSelectorComponent = ({ operation, onChange }) => {
  return (
    <>
      <label htmlFor={operation}> Opérateur </label>
      <select value={operation} onChange={onChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </>
  )
}

export default OperationSelectorComponent