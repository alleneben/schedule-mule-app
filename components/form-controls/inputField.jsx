const InputField = ({type, name, placeholder, value, className}) => {


    return(
        <input defaultValue='Mule' type={type} name={name} placeholder={placeholder}  className={className}/>
    )
}

export default InputField;