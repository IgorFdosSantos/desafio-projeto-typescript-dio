"use strict";
// Como podemos melhorar esse código usando TS? 
;
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//Sulução B
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
})(Profissoes || (Profissoes = {}));
let pessoa5 = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz
};
let pessoa6 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};
let pessoa7 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
let pessoa8 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
