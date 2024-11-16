import prisma from "@/lib/db";

export default async function Personnage({ params }: { params: { nom: string } }) {
    const { nom } = params;
    const personnage = await prisma.personnages.findUnique({
        where: { nom },
    });

    if (!personnage) {
        return (
            <div>
                <h1>Personnage non trouvé</h1>
            </div>
        );
    }

    return (
        <>
            <h1>{personnage.nom}</h1>
            <p>Force : {personnage.force}</p>
            <p>Défense : {personnage.defense}</p>
            <p>Attaque : {personnage.attaque}</p>
            <p>Déplacement : {personnage.deplacement}</p>
            <p>Points de Vie : {personnage.pointsDeVie}</p>
            <p>Puissance : {personnage.puissance}</p>
            <p>Points : {personnage.points}</p>
        </>
    );
}
