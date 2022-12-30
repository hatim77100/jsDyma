/* Créez une fonction trierTableau() qui reçoit en argument un tableau d'objets 
et le retourne trié selon deux clés.

Le tableau doit être trié d'abord par prix et ensuite par quantité.

Cela signifie que si deux objets ont la même valeur pour la propriété prix, 
ils sont ensuite triés par quantité.
La fonction doit trier les objets par quantité de manière décroissante 
si plusieurs objets ont le même prix*/

const arr = [
    { prix: 20, quantite: 10 },
    { prix: 20, quantite: 2 },
    { prix: 50, quantite: 1 }
]

function trierTableau(arr) {
    const b = arr.sort((a, b) => {
        if (b.prix = a.prix) {
           b.quantite-a.quantite 
        } else {
            b.prix - a.prix
        }
    });
    console.log(b); 
}

trierTableau(arr);
