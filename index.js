let hero = {
  name: "Link",
  age: 17,
  class: "Guerreiro",
  attack(){
    let ataque = ""
    if (this.class == "Guerreiro"){
      ataque = "Espada"
    }
    console.log(`O ${this.class} atacou usando ${ataque}`)
  }
}

let hero2 = {
  name: "Dormamu",
  age: 5860,
  class: "Mago",
  attack(){
    let ataque = ""
    if (this.class == "Mago"){
      ataque = "Magia"
    }
    console.log(`O ${this.class} atacou usando ${ataque}`)
  }
}

let hero3 = {
  name: "Myke Tyson",
  age: 60,
  class: "Monge",
  attack(){
    let ataque = ""
    if (this.class == "Monge"){
      ataque = "Artes Marciais"
    }
    console.log(`O ${this.class} atacou usando ${ataque}`)
  }
}

let hero4 = {
  name: "Shinobi",
  age: 37,
  class: "Ninja",
  attack(){
    let ataque = ""
    if (this.class == "Ninja"){
      ataque = "Shuriken"
    }
    console.log(`O ${this.class} atacou usando ${ataque}`)
  }
}

hero.attack()
hero2.attack()
hero3.attack()
hero4.attack()