
/* Créez une fonction qui prend un nombre indéfini d'arguments et retourne le plus grand nombre.

Utilisez l'opérateur rest (...) et une boucle pour itérer sur les arguments.
Liste des objectifs à remplir
# Créez et exportez une fonction plusGrandNombre() qui prend un nombre indéfini d'arguments
# Utilisez une structure de contrôle et une boucle pour retourner le plus grand nombre */

// première méthode
// function plusGrandNombre(...arguments) {
//     const arg = arguments.sort((a, b) => a - b)
//     for (let i = 0; i < arg.length; i++) {
//         var element = arg[i];
//     }
//     console.log(element);
// }
plusGrandNombre(45, 120, 25, 25);
// 2ème méthode

function plusGrandNombre(...arguments) {
    const arg = arguments.sort((a, b) => a - b)
   arg.forEach((el,i )=>{
       
    })
};
