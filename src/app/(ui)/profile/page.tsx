import { user } from "@/app/data/user";
import { redirect } from "next/navigation";

export default function Page(){
    redirect('/'+user.nickname);
}