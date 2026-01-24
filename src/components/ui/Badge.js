function Badge({children, variant="default", className=""}) {
    const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
    const variants = {
        default: "bg-gray-200 text-gray-800",
        destructive: "bg-red-600 text-white",
        success: "bg-green-600 text-white",
    };

    return (
        <span className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
export default Badge;