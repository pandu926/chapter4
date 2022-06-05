class GameSuit {
  comSelect() {
    let com = Math.random();
    if (com < 0.34) {
      com = "batu";
    } else if (com > 0.33 && com < 0.67) {
      com = "kertas";
    } else {
      com = "gunting";
    }
    return com;
  }

  rules(com, player) {
    let hasil = "";
    if (player == com) {
      hasil = "seri";
    } else if (player == "batu") {
      hasil = com == "kertas" ? "kalah" : "menang";
    } else if (player == "kertas") {
      hasil = com == "batu" ? "menang" : "kalah";
    } else if (player == "gunting") {
      hasil = com == "batu" ? "kalah" : "menang";
    }
    return hasil;
  }
}
