window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.htxt').classList.add('visible');
});

//characters
const harry = document.querySelector("#Harry")
const hermione = document.querySelector("#Hermione")

const hname = document.querySelector("#hname")

const fetchchar = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
    const char = await res.json()
    harry.src = char[0].image
    hermione.src = char[1].image
    hname.innerHTML = char[0].fullName
}
fetchchar()

//spells
const spell = document.body.querySelector(".spell");
const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    const spells = await res.json()
    console.log(spells[0]);
    const arr = [15, 7, 11, 24, 16, 21, 35, 33, 70]
    for (const i of arr) {
        const spellDiv = document.createElement('div');
        spellDiv.className = 'spell-item';
        spellDiv.textContent = spells[i].spell;
        spell.appendChild(spellDiv);
    }
}
fetchSpells()

//books
const one = document.querySelector("#One")
const two = document.querySelector("#Two")
const three = document.querySelector("#Three")

const fetchbooks = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
    const books = await res.json()
    one.src = books[0].cover
    two.src = books[1].cover
    three.src = books[2].cover
}
fetchbooks()