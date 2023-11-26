//Les Variables

//const
const a = 2
const une_variable_plus_longue = "Ma super chaine"
console.log(a)
console.log(une_variable_plus_longue)

//let
let b = 2
b = 3
console.log(b)

//Les types de variables
//Les nombres
const c = 2
const d = 3.4123
const e = -509
const f = 1/3
// /!\ _ ignoré par l'interpréteur
const g = 10_000
console.log(g)

//Les chaînes de caractère
const chaineA = "Salut les gens"
const chaineB = 'Re-Salut les gens'
const chaineC = `Re-Salut les gens`
//Avantages des `` (backticks)
const fullname = 'John'
const phrase = `Je m'appele ${fullname}`
const paragraph = `Je suis 
sur plusieurs
lignes !!`
console.log(phrase)
console.log(paragraph)

//Les booléens
const vrai = true
const je_suis_faux = false

//Les tableaux
const eleves = ['Jean', 'Marc', 'Marion']
const demo = [true, 10, 'Marc']

//Les objets
const eleve = {
   clef: 'valeur',
   nom: 'Jean',
   age: 18,
   notes: [10, 4, 18] 
}
eleve.nom // Jean
eleve.notes // [10, 4, 18]
eleve.notes[1] // 4
// On peut aussi utiliser une notation proche de celle des tableaux
eleve['notes'] // [10, 4, 18]
const eleve2 = {
    notes: {
        math: 18,
        francais: 14   
    }   
}
// Pour récupérer la note de math de l'élève on peut alors faire
eleve2.notes.math // 18
eleves.nom // undefined

//Types spéciaux
/**
undefined --> quand on essaie d'accéder à une variable ou valeur inexistante
null --> représente l'absence intentionnelle de toute valeur
NaN --> 'not a number'
 */

 // /!\ Typage faible
 const ca = '1' 
const cb = 1
//ca + cb = '11'
// b est converti en chaîne de caractère implicitement
//ca * cb = 1 
// a est converti en nombre de manière implicite 
"Salut" * 3 // NaN, Not a number
// Attention aux opérations qui n'ont pas de sens :)
"43" > 1000 // false, 1000 est converti en chaîne implicitement et il compare l'ordre alphabétique