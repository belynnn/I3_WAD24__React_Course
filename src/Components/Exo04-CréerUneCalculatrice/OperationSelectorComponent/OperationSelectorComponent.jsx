const OperationSelectorComponent = ({ operation, onChange }) => {
    return (
        <select value={operation} onChange={onChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    );
};

export default OperationSelectorComponent