let heroi = "Super Man";
let Xp = 5000;
let liga = ""; 

switch (true) {
  case Xp <= 1000:
    liga = "Ferro";
    break;

  case Xp <= 2000:
    liga = "Bronze";
    break;

  case Xp <= 5000:
    liga = "Prata";
    break;

  case Xp <= 7000:
    liga = "Ouro";
    break;

  case Xp <= 8000:
    liga = "Platina";
    break;

  case Xp <= 9000:
    liga = "Ascendente";
    break;

  case Xp <= 10000:
    liga = "Imortal";
    break;

  default:
    liga = "Radiante";
    break;
}

console.log("O Herói de nome " + heroi + " está no nível de " + liga);
 

//resolvi os problema principalmente porque pensei no uso do switch