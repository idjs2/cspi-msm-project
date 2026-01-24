function Button({children, onClick, className=""}) {
    return (
        <button onClick={onClick} className={`rounded-xl px-4 py-2 text-sm font-medium bg-black text-white hover:opacity-90 ${className}`}>
            {children}
        </button>
    );
}

export default Button;