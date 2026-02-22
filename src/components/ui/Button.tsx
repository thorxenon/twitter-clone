type ButtonProps ={
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    size: 1 | 2 | 3;
}

export const Button = ({ label, onClick, size, type }: ButtonProps) =>{
    const baseStyle = `
        w-full
        cursor-pointer
        bg-white
        text-black
        font-bold
        rounded-3xl
        ${size === 1 && 'h-14 text-lg'}
        ${size === 2 && 'h-10 text-md'}
        ${size === 3 && 'h-7 text-xs'}
    `;


    return (
        <>
            { type && type === 'submit' ? (
                <button
                    className={baseStyle}
                    type="submit">
                        {label}
                </button>
            )
            : (
                <div
                    className={`
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        bg-white
                        text-black
                        font-bold
                        rounded-3xl
                        ${size === 1 && 'h-14 text-lg'}
                        ${size === 2 && 'h-10 text-md'}
                        ${size === 3 && 'h-7 text-xs'}
                    `}
                    onClick={onClick}
                >
                    {label}
                </div>
            )}
        </>
    );
}