const InputFieldComponent = ({ value, onChange, placeholder }) => {
const handleChange = (e) => {
    const value = e.target.value
    if (/^\d*$/.test(value)) {  // Validation numérique
        onChange(value)
    }
  }

  return (
    <>
      <label htmlFor="num1">{placeholder}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default InputFieldComponent