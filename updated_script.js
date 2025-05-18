// Data for 118 elements. I Generate this Data using ChatGPT, I give a prompt for array of object
  const elements = [
  { number: 1, symbol: 'H',  name: 'Hydrogen',     category: 'nonmetal',        x: 1,  y: 1 },
  { number: 2, symbol: 'He', name: 'Helium',       category: 'noble-gas',       x: 18, y: 1 },
  { number: 3, symbol: 'Li', name: 'Lithium',      category: 'alkali-metal',    x: 1,  y: 2 },
  { number: 4, symbol: 'Be', name: 'Beryllium',    category: 'alkaline-earth',  x: 2,  y: 2 },
  { number: 5, symbol: 'B',  name: 'Boron',        category: 'metalloid',       x: 13, y: 2 },
  { number: 6, symbol: 'C',  name: 'Carbon',       category: 'nonmetal',        x: 14, y: 2 },
  { number: 7, symbol: 'N',  name: 'Nitrogen',     category: 'nonmetal',        x: 15, y: 2 },
  { number: 8, symbol: 'O',  name: 'Oxygen',       category: 'nonmetal',        x: 16, y: 2 },
  { number: 9, symbol: 'F',  name: 'Fluorine',     category: 'halogen',         x: 17, y: 2 },
  { number:10, symbol: 'Ne', name: 'Neon',         category: 'noble-gas',       x: 18, y: 2 },
  { number:11, symbol: 'Na', name: 'Sodium',       category: 'alkali-metal',    x: 1,  y: 3 },
  { number:12, symbol: 'Mg', name: 'Magnesium',    category: 'alkaline-earth',  x: 2,  y: 3 },
  { number:13, symbol: 'Al', name: 'Aluminium',    category: 'post-transition', x: 13, y: 3 },
  { number:14, symbol: 'Si', name: 'Silicon',      category: 'metalloid',       x: 14, y: 3 },
  { number:15, symbol: 'P',  name: 'Phosphorus',   category: 'nonmetal',        x: 15, y: 3 },
  { number:16, symbol: 'S',  name: 'Sulfur',       category: 'nonmetal',        x: 16, y: 3 },
  { number:17, symbol: 'Cl', name: 'Chlorine',     category: 'halogen',         x: 17, y: 3 },
  { number:18, symbol: 'Ar', name: 'Argon',        category: 'noble-gas',       x: 18, y: 3 },
  { number:19, symbol: 'K',  name: 'Potassium',    category: 'alkali-metal',    x: 1,  y: 4 },
  { number:20, symbol: 'Ca', name: 'Calcium',      category: 'alkaline-earth',  x: 2,  y: 4 },
  { number:21, symbol: 'Sc', name: 'Scandium',     category: 'transition-metal',x: 3,  y: 4 },
  { number:22, symbol: 'Ti', name: 'Titanium',     category: 'transition-metal',x: 4,  y: 4 },
  { number:23, symbol: 'V',  name: 'Vanadium',     category: 'transition-metal',x: 5,  y: 4 },
  { number:24, symbol: 'Cr', name: 'Chromium',     category: 'transition-metal',x: 6,  y: 4 },
  { number:25, symbol: 'Mn', name: 'Manganese',    category: 'transition-metal',x: 7,  y: 4 },
  { number:26, symbol: 'Fe', name: 'Iron',         category: 'transition-metal',x: 8,  y: 4 },
  { number:27, symbol: 'Co', name: 'Cobalt',       category: 'transition-metal',x: 9,  y: 4 },
  { number:28, symbol: 'Ni', name: 'Nickel',       category: 'transition-metal',x: 10, y: 4 },
  { number:29, symbol: 'Cu', name: 'Copper',       category: 'transition-metal',x: 11, y: 4 },
  { number:30, symbol: 'Zn', name: 'Zinc',         category: 'transition-metal',x: 12, y: 4 },
  { number:31, symbol: 'Ga', name: 'Gallium',      category: 'post-transition', x: 13, y: 4 },
  { number:32, symbol: 'Ge', name: 'Germanium',    category: 'metalloid',       x: 14, y: 4 },
  { number:33, symbol: 'As', name: 'Arsenic',      category: 'metalloid',       x: 15, y: 4 },
  { number:34, symbol: 'Se', name: 'Selenium',     category: 'nonmetal',        x: 16, y: 4 },
  { number:35, symbol: 'Br', name: 'Bromine',      category: 'halogen',         x: 17, y: 4 },
  { number:36, symbol: 'Kr', name: 'Krypton',      category: 'noble-gas',       x: 18, y: 4 },
  { number:37, symbol: 'Rb', name: 'Rubidium',     category: 'alkali-metal',    x: 1,  y: 5 },
  { number:38, symbol: 'Sr', name: 'Strontium',    category: 'alkaline-earth',  x: 2,  y: 5 },
  { number:39, symbol: 'Y',  name: 'Yttrium',      category: 'transition-metal',x: 3,  y: 5 },
  { number:40, symbol: 'Zr', name: 'Zirconium',    category: 'transition-metal',x: 4,  y: 5 },
  { number:41, symbol: 'Nb', name: 'Niobium',      category: 'transition-metal',x: 5,  y: 5 },
  { number:42, symbol: 'Mo', name: 'Molybdenum',   category: 'transition-metal',x: 6,  y: 5 },
  { number:43, symbol: 'Tc', name: 'Technetium',   category: 'transition-metal',x: 7,  y: 5 },
  { number:44, symbol: 'Ru', name: 'Ruthenium',    category: 'transition-metal',x: 8,  y: 5 },
  { number:45, symbol: 'Rh', name: 'Rhodium',      category: 'transition-metal',x: 9,  y: 5 },
  { number:46, symbol: 'Pd', name: 'Palladium',    category: 'transition-metal',x: 10, y: 5 },
  { number:47, symbol: 'Ag', name: 'Silver',       category: 'transition-metal',x: 11, y: 5 },
  { number:48, symbol: 'Cd', name: 'Cadmium',      category: 'transition-metal',x: 12, y: 5 },
  { number:49, symbol: 'In', name: 'Indium',       category: 'post-transition', x: 13, y: 5 },
  { number:50, symbol: 'Sn', name: 'Tin',          category: 'post-transition', x: 14, y: 5 },
  { number:51, symbol: 'Sb', name: 'Antimony',     category: 'metalloid',       x: 15, y: 5 },
  { number:52, symbol: 'Te', name: 'Tellurium',    category: 'metalloid',       x: 16, y: 5 },
  { number:53, symbol: 'I',  name: 'Iodine',       category: 'halogen',         x: 17, y: 5 },
  { number:54, symbol: 'Xe', name: 'Xenon',        category: 'noble-gas',       x: 18, y: 5 },
  { number:55, symbol: 'Cs', name: 'Caesium',      category: 'alkali-metal',    x: 1,  y: 6 },
  { number:56, symbol: 'Ba', name: 'Barium',       category: 'alkaline-earth',  x: 2,  y: 6 },
  { number:57, symbol: 'La', name: 'Lanthanum',     category: 'lanthanide',       x: 3,  y: 9 },
  { number:58, symbol: 'Ce', name: 'Cerium',       category: 'lanthanide',       x: 4,  y: 9 },
  { number:59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide',       x: 5,  y: 9 },
  { number:60, symbol: 'Nd', name: 'Neodymium',    category: 'lanthanide',       x: 6,  y: 9 },
  { number:61, symbol: 'Pm', name: 'Promethium',   category: 'lanthanide',       x: 7,  y: 9 },
  { number:62, symbol: 'Sm', name: 'Samarium',     category: 'lanthanide',       x: 8,  y: 9 },
  { number:63, symbol: 'Eu', name: 'Europium',     category: 'lanthanide',       x: 9,  y: 9 },
  { number:64, symbol: 'Gd', name: 'Gadolinium',   category: 'lanthanide',       x: 10, y: 9 },
  { number:65, symbol: 'Tb', name: 'Terbium',      category: 'lanthanide',       x: 11, y: 9 },
  { number:66, symbol: 'Dy', name: 'Dysprosium',   category: 'lanthanide',       x: 12, y: 9 },
  { number:67, symbol: 'Ho', name: 'Holmium',      category: 'lanthanide',       x: 13, y: 9 },
  { number:68, symbol: 'Er', name: 'Erbium',       category: 'lanthanide',       x: 14, y: 9 },
  { number:69, symbol: 'Tm', name: 'Thulium',      category: 'lanthanide',       x: 15, y: 9 },
  { number:70, symbol: 'Yb', name: 'Ytterbium',    category: 'lanthanide',       x: 16, y: 9 },
  { number:71, symbol: 'Lu', name: 'Lutetium',     category: 'lanthanide',       x: 17, y: 9 },
  { number:72, symbol: 'Hf', name: 'Hafnium',      category: 'transition-metal', x: 4,  y: 6 },
  { number:73, symbol: 'Ta', name: 'Tantalum',     category: 'transition-metal', x: 5,  y: 6 },
  { number:74, symbol: 'W',  name: 'Tungsten',     category: 'transition-metal', x: 6,  y: 6 },
  { number:75, symbol: 'Re', name: 'Rhenium',      category: 'transition-metal', x: 7,  y: 6 },
  { number:76, symbol: 'Os', name: 'Osmium',       category: 'transition-metal', x: 8,  y: 6 },
  { number:77, symbol: 'Ir', name: 'Iridium',      category: 'transition-metal', x: 9,  y: 6 },
  { number:78, symbol: 'Pt', name: 'Platinum',     category: 'transition-metal', x: 10, y: 6 },
  { number:79, symbol: 'Au', name: 'Gold',         category: 'transition-metal', x: 11, y: 6 },
  { number:80, symbol: 'Hg', name: 'Mercury',      category: 'transition-metal', x: 12, y: 6 },
  { number:81, symbol: 'Tl', name: 'Thallium',     category: 'post-transition',  x: 13, y: 6 },
  { number:82, symbol: 'Pb', name: 'Lead',         category: 'post-transition',  x: 14, y: 6 },
  { number:83, symbol: 'Bi', name: 'Bismuth',      category: 'post-transition',  x: 15, y: 6 },
  { number:84, symbol: 'Po', name: 'Polonium',     category: 'metalloid',        x: 16, y: 6 },
  { number:85, symbol: 'At', name: 'Astatine',     category: 'halogen',          x: 17, y: 6 },
  { number:86, symbol: 'Rn', name: 'Radon',        category: 'noble-gas',        x: 18, y: 6 },
  { number: 87, symbol: 'Fr', name: 'Francium',      category: 'alkali-metal',     x: 1,  y: 7 },
  { number: 88, symbol: 'Ra', name: 'Radium',        category: 'alkaline-earth',   x: 2,  y: 7 },
  { number: 89, symbol: 'Ac', name: 'Actinium',      category: 'actinide',         x: 3,  y: 10 },
  { number: 90, symbol: 'Th', name: 'Thorium',       category: 'actinide',         x: 4,  y: 10 },
  { number: 91, symbol: 'Pa', name: 'Protactinium',  category: 'actinide',         x: 5,  y: 10 },
  { number: 92, symbol: 'U',  name: 'Uranium',       category: 'actinide',         x: 6,  y: 10 },
  { number: 93, symbol: 'Np', name: 'Neptunium',     category: 'actinide',         x: 7,  y: 10 },
  { number: 94, symbol: 'Pu', name: 'Plutonium',     category: 'actinide',         x: 8,  y: 10 },
  { number: 95, symbol: 'Am', name: 'Americium',     category: 'actinide',         x: 9,  y: 10 },
  { number: 96, symbol: 'Cm', name: 'Curium',        category: 'actinide',         x: 10, y: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelium',     category: 'actinide',         x: 11, y: 10 },
  { number: 98, symbol: 'Cf', name: 'Californium',   category: 'actinide',         x: 12, y: 10 },
  { number: 99, symbol: 'Es', name: 'Einsteinium',   category: 'actinide',         x: 13, y: 10 },
  { number:100, symbol: 'Fm', name: 'Fermium',       category: 'actinide',         x: 14, y: 10 },
  { number:101, symbol: 'Md', name: 'Mendelevium',   category: 'actinide',         x: 15, y: 10 },
  { number:102, symbol: 'No', name: 'Nobelium',      category: 'actinide',         x: 16, y: 10 },
  { number:103, symbol: 'Lr', name: 'Lawrencium',    category: 'actinide',         x: 17, y: 10 },
  { number:104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', x: 4,  y: 7 },
  { number:105, symbol: 'Db', name: 'Dubnium',       category: 'transition-metal', x: 5,  y: 7 },
  { number:106, symbol: 'Sg', name: 'Seaborgium',    category: 'transition-metal', x: 6,  y: 7 },
  { number:107, symbol: 'Bh', name: 'Bohrium',       category: 'transition-metal', x: 7,  y: 7 },
  { number:108, symbol: 'Hs', name: 'Hassium',       category: 'transition-metal', x: 8,  y: 7 },
  { number:109, symbol: 'Mt', name: 'Meitnerium',    category: 'transition-metal', x: 9,  y: 7 },
  { number:110, symbol: 'Ds', name: 'Darmstadtium',  category: 'transition-metal', x: 10, y: 7 },
  { number:111, symbol: 'Rg', name: 'Roentgenium',   category: 'transition-metal', x: 11, y: 7 },
  { number:112, symbol: 'Cn', name: 'Copernicium',   category: 'transition-metal', x: 12, y: 7 },
  { number:113, symbol: 'Nh', name: 'Nihonium',      category: 'post-transition',  x: 13, y: 7 },
  { number:114, symbol: 'Fl', name: 'Flerovium',     category: 'post-transition',  x: 14, y: 7 },
  { number:115, symbol: 'Mc', name: 'Moscovium',     category: 'post-transition',  x: 15, y: 7 },
  { number:116, symbol: 'Lv', name: 'Livermorium',   category: 'post-transition',  x: 16, y: 7 },
  { number:117, symbol: 'Ts', name: 'Tennessine',    category: 'halogen',          x: 17, y: 7 },
  { number:118, symbol: 'Og', name: 'Oganesson',     category: 'noble-gas',        x: 18, y: 7 },

];

const table = document.getElementById('table');
const popup = document.getElementById('popup');
const filteredElements = document.getElementById('filtered-elements');
const closeBtn = document.querySelector('.close-btn');
const categoryFilter = document.getElementById('categoryFilter');

function renderTable() {
  table.innerHTML = '';
  elements.forEach(el => {
    const div = document.createElement('div');
    div.className = `element ${el.category}`;
    div.style.gridColumn = el.x;
    div.style.gridRow = el.y;
    div.innerHTML = `
      <span class="number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;
    table.appendChild(div);
  });
}

function showFilteredElements(category) {
  filteredElements.innerHTML = '';

  const matches = elements.filter(el => el.category === category);

  matches.forEach(el => {
    const div = document.createElement('div');
    div.className = `element ${el.category}`;
    div.innerHTML = `
      <span class="number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;
    filteredElements.appendChild(div);
  });

  popup.classList.remove('hidden');
}

categoryFilter.addEventListener('change', (e) => {
  const category = e.target.value;
  if (category) {
    showFilteredElements(category);
  }
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

renderTable();
