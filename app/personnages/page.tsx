import prisma from "@/lib/db";
import Link from "next/link";
import { creerPersonnage, supprimerPersonnage } from "@/actions/actions";

export default async function Personnages() {
    const personnages = await prisma.personnages.findMany();

    return (
        <>
            <div>Liste de mes personnages</div>
            <ul>
                {personnages.map((personnage) => (
                    <li key={personnage.id}>
                        {personnage.nom}
                        <Link href={`/personnages/personnage/${personnage.nom}`}>
                        <button type="submit" className="px-2 py-1 mx-2  rounded-full bg-green-400 text-white h-7 w-7">
                                +
                            </button></Link>
                        <form action={supprimerPersonnage} method="POST" style={{ display: 'inline' }}>
                            <input type="hidden" name="id" value={personnage.id} />
                            <button type="submit" className="px-2 py-1 rounded-full bg-red-400 text-white h-7 w-7">
                                X
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
            <form action={creerPersonnage} method="POST"className="bg-gray-100 p-5">
                <input type="text" name="nom" placeholder="Nom" className="px-2 py-1 rounded-sm" />
                <button type="submit" className="px-2 py-1 rounded-sm bg-sky-400">
                    Créer personnage
                </button>
            </form>
        </>
    );
}
