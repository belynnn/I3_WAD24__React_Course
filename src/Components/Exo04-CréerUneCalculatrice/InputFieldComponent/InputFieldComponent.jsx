const InputFieldComponent = ({ value, onChange, placeholder }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {  // Validation numérique
            onChange(value);
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default InputFieldComponent