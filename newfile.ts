let zrobione = true
let liczba: number = 123

zrobione = false

//Enum - typ wyliczeniowy

enum Systemy {Windows, Linux, MacOS}
let mojSystem: Systemy = Systemy.MacOS


function nazwa(p1: string, p2: number = 2,p3?:boolean) {

    if (p2 != 2) return 'Psikus'
}

console.log(nazwa('kk', 3))