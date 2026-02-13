type Props={
    rows: number;
    placeholder: string;
    value?: string;
}


export const TextArea = ({ rows, placeholder, value }: Props) =>{
    return(
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            <textarea
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                name=""
                rows={rows}
                placeholder={placeholder}
                value={value}></textarea>
        </div>
    )
}