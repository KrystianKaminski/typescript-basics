let zrobione = true
let liczba: number = 123

zrobione = false

//Enum - typ wyliczeniowy

enum Systemy {Windows, Linux, MacOS}
let mojSystem: Systemy = Systemy.MacOS

type psikus = number | string

type Psikus = number | 'Psikus'


function nazwa(p1: Psikus, p2: psikus = 2, p3?:boolean) {

    if (p2 != 2) return 'kaktus'

    return 1
}

console.log(nazwa('kk', 3))


interface NaszTyp {
    nazwa: string
    wiek: number
    dodatkowe?: string
}

function wypiszWartosci(param: NaszTyp) : void {
    console.log(param.nazwa)
    console.log(param.wiek)
    console.log(param.dodatkowe)
}

let testowyObiekt = {
    nazwa: "testowy",
    wiek: 1
}

wypiszWartosci(testowyObiekt)