function Input({value, onChange, type="text", className=""}) {
    return (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            className={`rounded-xl border px-3 py-2 test-sm ${className}`}
        />
    );
}
export default Input;