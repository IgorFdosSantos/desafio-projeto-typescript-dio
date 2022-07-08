
// Como podemos melhorar esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */


//Sulução A
interface IPessoa {
    nome: string,
    idade: number,
    profissao: string
};

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}


//Sulução B
enum Profissoes{
    Atriz,
    Padeiro
}

type IPessoa2 = {
    nome: string,
    idade: number,
    profissao: Profissoes
};

let pessoa5: IPessoa2 = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz
};

let pessoa6: IPessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};

let pessoa7: IPessoa2 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa8: IPessoa2 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}