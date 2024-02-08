const perguntas = [
    {
      pergunta: "Qual o nome do protagonista principal de Gravity Falls?",
      respostas: [
        "Stanley Pines",
        "Dipper Pines",
        "Mabel Pines",
      ],
      correta: 1
    },
    {
      pergunta: "Qual o nome do tio gêmeo de Dipper e Mabel?",
      respostas: [
        "Grunkle Stan",
        "Soos Ramirez",
        "Bill Cipher",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do porco de estimação de Mabel?",
      respostas: [
        "Porky",
        "Waddles",
        "Gompers",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o autor do diário que Dipper encontra?",
      respostas: [
        "Stanley Pines",
        "Ford Pines",
        "Sheriff Blubs",
      ],
      correta: 1
    },
    {
      pergunta: "Qual o nome do bar local onde os personagens adultos de Gravity Falls costumam se reunir?",
      respostas: [
        "O Teatro Mágico",
        "O Sótão do Mistério",
        "O Gancho Dourado",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do robô gigante construído por Soos?",
      respostas: [
        "Xyler",
        "Tyrone",
        "Giffany",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'Símbolo do Olho' em Gravity Falls?",
      respostas: [
        "Uma joia",
        "Uma organização secreta",
        "Um artefato mágico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do fantasma que assombra a mansão Northwest?",
      respostas: [
        "Fantasma de Nathaniel Northwest",
        "Pacífica Northwest",
        "Fantasma do Velho McGucket",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a profissão de Ford Pines?",
      respostas: [
        "Carpinteiro",
        "Mago",
        "Cientista",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o principal antagonista da série?",
      respostas: [
        "Bill Cipher",
        "Gideon Gleeful",
        "Robbie Valentino",
      ],
      correta: 0
    },
  ];
  
  //busca a id quiz e o documento template do html
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  //clona as respostas buscadas no diretório do html
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estacorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estacorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove o primeiro item da lista
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }