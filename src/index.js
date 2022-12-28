
/* Créez une fonction qui prend un nombre indéfini d'arguments et retourne le plus grand nombre.

Utilisez l'opérateur rest (...) et une boucle pour itérer sur les arguments.
Liste des objectifs à remplir
# Créez et exportez une fonction plusGrandNombre() qui prend un nombre indéfini d'arguments
# Utilisez une structure de contrôle et une boucle pour retourner le plus grand nombre */

// première méthode
// export function plusGrandNombre(...arguments) {
//     const arg = arguments.sort((a, b) => a - b)
//     for (let i = 0; i < arg.length; i++) {
//         var element = arg[i];
//     }
//      console.log(element);
// }
// 2ème méthode

const arg = [15, 45, 5, 3];
function plusGrandNombre(...nombres) {
    let plusGrand;
    for (let i = 0; i < nombres.length; i++) {
        if (i === 0) {
            plusGrand = nombres[i];
        } else if (nombres[i] > plusGrand) {
            plusGrand = nombres[i];
        }
    }
    return plusGrand;
}

plusGrandNombre(45, 120, 25, 25);