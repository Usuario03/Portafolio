export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='
        px-5 py-2 
        text-[20px] 
        text-[color:var(--color-cuarto)] 
        hover:text-[color:var(--color-tercero)] 
        transition-colors duration-200
        cursor-pointer
      '
    >
      {children}
    </button>
  );
};
