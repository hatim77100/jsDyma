/* Créez une fonction trierTableau() qui reçoit en argument un tableau d'objets 
et le retourne trié selon deux clés.

Le tableau doit être trié d'abord par prix et ensuite par quantité.

Cela signifie que si deux objets ont la même valeur pour la propriété prix, 
ils sont ensuite triés par quantité.*/

const arr = [
    { prix: 20, quantite: 10 },
    { prix: 20, quantite: 2 },
    { prix: 50, quantite: 1 }
]

function trierTableau(...arr) {
    const b = arr.sort((a, b) => {
        { b.prix - a.prix }; { b.quantite - a.quantite }
});
    return b;
}

console.log(trierTableau(arr));