import z from "zod";

export const loginSchema = (email?: string,  slug?: string, password?: string) =>{
    const schema = z.object({
        email: z.string().email().optional(),
        slug: z.string().optional(),
        password: z.string().min(6).optional()
    });

    const hasEmail = !!email;
    const hasSlug = !!slug;

    if (hasEmail && hasSlug) {
        throw new Error("Forneça apenas email ou slug, não ambos");
    }

    if (!hasEmail && !hasSlug) {
        throw new Error("Forneça email ou slug");
    }

    if (!password) {
        throw new Error("Password é obrigatório");
    }

    const result = schema.safeParse({email, slug, password});
    
    if (result.success) {
        return {email, slug, password}
    }

    throw new Error(result.error?.message || "Erro na validação do login");
}