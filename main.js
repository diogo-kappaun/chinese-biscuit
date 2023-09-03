const chineseBiscuit = document.querySelector("#chinese-biscuit");
const biscuitPhrase = document.querySelector("#biscuit-phrase");
const btnNewBiscuit = document.querySelector("#btn-new-biscuit");
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const phrases = [
  "O sucesso não é o destino, é uma jornada.",
  "Você é a única limitação em sua busca por grandeza.",
  "Lute pelos seus sonhos como se sua vida dependesse disso.",
  "Acreditar é o primeiro passo para alcançar.",
  "A persistência supera o talento quando o talento não persiste.",
  "Não se compare aos outros; compare-se com a pessoa que você era ontem.",
  "Grandes conquistas começam com pequenos passos.",
  "A determinação é a chave que abre todas as portas do impossível.",
  "O fracasso é apenas uma oportunidade de começar de novo, de forma mais inteligente.",
  "A paixão é a força motriz por trás de qualquer sucesso duradouro.",
  "Nunca é tarde demais para seguir seus sonhos.",
  "Acredite em suas habilidades e nada será impossível.",
  "O tempo voa, mas você é o piloto.",
  "Cada dia é uma página em branco; escreva uma história incrível.",
  "A disciplina é a ponte entre metas e realizações.",
  "Desafios são oportunidades disfarçadas.",
  "Quando você quer algo, todo o universo conspira a seu favor.",
  "O sucesso é a melhor vingança contra o fracasso.",
  "A jornada de mil milhas começa com um único passo.",
  "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
  "Não há atalhos para lugares que valem a pena.",
  "A única maneira de fazer um grande trabalho é amar o que você faz. - Steve Jobs",
  "As dificuldades preparam pessoas comuns para destinos extraordinários.",
  "A força não vem da capacidade física, mas da vontade indomável. - Mahatma Gandhi",
  "O sucesso não é o destino final; é a jornada que importa.",
  "A resiliência é a capacidade de se recuperar de qualquer adversidade.",
  "Quando você desiste, é quando a jornada termina. Continue avançando.",
  "Sua única limitação é a que você cria para si mesmo.",
  "Mantenha-se focado, vá atrás do que você quer e conquiste-o.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos. - Eleanor Roosevelt",
];

function generateNewPhrase() {
  biscuitPhrase.innerHTML = `'${phrases[Math.floor(Math.random() * phrases.length)]}'`;
  changeScreen();
}

function changeScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

chineseBiscuit.addEventListener("click", generateNewPhrase);
btnNewBiscuit.addEventListener("click", changeScreen);
document.addEventListener("keydown", (e) => {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    changeScreen()
  } else if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    generateNewPhrase()
  }
})