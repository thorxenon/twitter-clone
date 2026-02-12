"use client"

import { user } from "@/app/data/user";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/Button";
import { useRef } from "react";

export const TweetPost = () =>{

    const handleImageUpload = () =>{

    }

    const handlePostClick = () =>{

    }


    const ref = useRef(null);

    const handleInput = () => {
        const el = ref.current as any;

        // Se só tiver <br> ou espaços, limpa totalmente
        if (el.innerHTML === "<br>" || el.textContent.trim() === "") {
            el.innerHTML = "";
        }
    };



    return(
        <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-2">
            <div>
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="size-12 rounded-full"
                />
            </div>

            <div className="flex-1">
                <div
                    ref={ref}
                    className="min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
                    contentEditable
                    role="textbox"
                    data-placeholder="Oque está acontecendo?"
                    onInput={handleInput}
                ></div>
                <div className="flex justify-between items-center mt-2">
                    <div className="cursor-pointer" onClick={handleImageUpload}>
                        <FontAwesomeIcon icon={faImage} className="size-6"/>
                    </div>

                    <div className="w-28">
                        <Button
                            label="Postar"
                            size={2}
                            onClick={handlePostClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}