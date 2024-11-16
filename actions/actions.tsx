"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function creerPersonnage(formData: FormData) {
    const nom = formData.get("nom") as string;
    if (!nom) {
        throw new Error("Le nom est obligatoire.");
    }
    await prisma.personnages.create({
        data: {
            nom,
            force: 4,
            defense: 8,
            attaque: 10,
            deplacement: 14,
            pointsDeVie: 100,
            puissance: 5,
            points: 0,
        },
    });
    revalidatePath("/personnages");
}
export async function supprimerPersonnage(formData: FormData) {
    const id = formData.get("id") as string;
    if (!id) {
        throw new Error("L'ID du personnage est requis.");
    }
    await prisma.personnages.delete({
        where: { id },
    });
    revalidatePath("/personnages");
}
