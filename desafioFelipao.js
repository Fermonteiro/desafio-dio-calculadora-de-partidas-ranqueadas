let nomeHeroi = "Donanfer"
let xp = 7000
let classificacao = ""

if(xp <= 1000){
    classificacao = "Ferro"
}else if(xp > 1000 && xp <= 2000){
    classificacao = "Bronze"
}else if(xp > 2000 && xp <= 5000){
    classificacao = "Prata"
}else if(xp > 5000 && xp <= 7000){
    classificacao = "Ouro"
}else if(xp > 7000 && xp <= 8000){
    classificacao = "Platina"
}else if(xp > 8000 && xp <= 9000){
    classificacao = "Ascendente"
}else if(xp > 9000 && xp <= 10000){
    classificacao = "Imortal"
}else if(xp >= 10001){
    classificacao = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificacao)