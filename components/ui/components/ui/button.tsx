export function Button({ children, disabled, onClick, className }: any) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-gray-800 text-white ${className}`}
    >
      {children}
    </button>
  );
}
