var zrobione = true;
var liczba = 123;
zrobione = false;
//Enum - typ wyliczeniowy
var Systemy;
(function (Systemy) {
    Systemy[Systemy["Windows"] = 0] = "Windows";
    Systemy[Systemy["Linux"] = 1] = "Linux";
    Systemy[Systemy["MacOS"] = 2] = "MacOS";
})(Systemy || (Systemy = {}));
var mojSystem = Systemy.MacOS;
function nazwa(p1, p2, p3) {
    if (p2 === void 0) { p2 = 2; }
    if (p2 != 2)
        return 'Psikus';
    return 1;
}
console.log(nazwa('kk'));
//# sourceMappingURL=newfile.js.map