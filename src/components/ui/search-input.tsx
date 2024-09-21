"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { Input } from "./Input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Props{
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput: React.FC<Props> = ({ defaultValue, hideOnSearch }) =>{
    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState(defaultValue ?? ''); 

    const handleSearchEnter = () =>{
        if(searchInput){
            router.push(`/search?q=${encodeURIComponent(searchInput)}`)
        }
    }

    if(hideOnSearch && pathname == '/search') return null;

    return(
        <>
            <Input
                placeHolder="Buscar"
                icon={faMagnifyingGlass}
                filled
                value={searchInput}
                onChange={(t)=> setSearchInput(t)}
                onEnter={handleSearchEnter}
            />
        </>
    )
}