const InputField = ({type, name, placeholder, value, className}) => {


    return(
        <input defaultValue={name} type={type} name={name} placeholder={placeholder} value={value} className={className}/>
    )
}

export default InputField;