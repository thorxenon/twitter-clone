import { ProfileArea } from "@/components/profile/profile-area";

export default async function Page({ params }: { params: { slug: string } }) {
    const slug = await params.slug;
    
    return(
        <div>
            <ProfileArea slug={slug} />
        </div>
    )
}