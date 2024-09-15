import Image from "next/image";
import Link from "next/link";

type logoProps ={
    size: number;
}

export const Logo = ({ size }: logoProps) =>{
    return(
        <Link href="/">
            <Image
                src={'/logo.png'}
                alt="z"
                width={size}
                height={size}
                quality={100}
            />
        </Link>
    );
}