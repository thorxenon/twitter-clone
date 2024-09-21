"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

// interface InputType{
//     type:[
//         "password",
//         "text",
//         "search",
//         "email"
//     ]
// }

type Props ={
    placeHolder: string;
    onChange?: (newValue: string) => void;
    value?: string;
    password?: boolean;
    filled?: boolean
    icon?: IconDefinition;
    onEnter?: () => void;
}

export const Input = ({ placeHolder, onChange, value, password, filled, icon, onEnter }: Props) =>{
    const [ showPassword, setShowPassword ] = useState(false);

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.code.toLowerCase() === 'enter' && onEnter){
            onEnter();
        }
    }
    
    return(
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className="
                        size-6
                        ml-4
                    "
                />              
            }
            <input
                type={password && !showPassword ? 'password' : 'text'}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeHolder}
                onChange={e => onChange && onChange(e.target.value)}
                value={value}
                onKeyUp={handleKeyUp}
            />

            {password &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="size-6 text-gray-500 cursor-pointer mr-4"
                />
            }
        </div>
    );
}