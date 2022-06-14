const SelectField = ({name, placeholder, value, className}) => {


    return(
        <select placeholder={placeholder} name={name} className={className}>
            <option>{placeholder}</option>
            <option value={value}>Test</option>
        </select>
    )
}

export default SelectField;