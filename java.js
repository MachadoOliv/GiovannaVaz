const perguntas = [
    {
      pergunta: "Qual seu gênero?",
      resposta:[
        "A) Masculino",
        "B) Feminino",
        "C) Outro"
      ],
    },
    {
      pergunta:"Qual sua idade?",
      resposta:[
        "A) De 18 a 25 anos",
        "B) De 25 a 35 anos",
        "C) De 35 a 45 anos",
        "D) Mais de 45 anos"
      ],
    },
    {
      pergunta: "Há quanto tempo você atua ou atuou nessa área?",
      resposta:[
        "A) Menos de 1 ano",
        "B) Entre 1 a 2 anos",
        "C) Entre 2 a 5 anos",
        "D) Entre 5 a 10 anos",
        "E) Mais de 10 anos"
      ],
      correta: 2
    },
    {
      pergunta: "Já fez algum curso, especialização ou estudo sobre  competências comportamentais  e metodologias ágeis?",
      resposta:[
        "A) Sim, muitos",
        "B) Sim, alguns",
        "C) Não, mas pretendo",
        "D) Não pretendo fazer"
      ],
      correta: 1
    },
    {
      pergunta: "Você consegue se manter focado em uma tarefa trabalhando em home office ou prefere trabalhar presencialmente?",
      resposta:[
        "A) Prefiro trabalhar em home office",
        "B) Prefiro trabalhar presencialmente"
      ],
    },
    {
      pergunta: "Você tem dificuldade em trabalhar ou interagir com seus colegas de trabalho? ",
      resposta:[
        "A) Discordo Totalmente",
        "B) Discordo Parcialmente",
        "C) Indiferente",
        "D) Concordo Parcialmente",
        "E) Concordo Totalmente"
      ],
      correta: 0
    },
    {
      pergunta: "Em relação as suas habilidades interpessoais, você sente algum receio, dificuldade ou medo?",
      resposta:[
        "A) Discordo Totalmente",
        "B) Discordo Parcialmente",
        "C) Indiferente",
        "D) Concordo Parcialmente",
        "E) Concordo Totalmente"
      ],
      correta: 1
    },
    {
        pergunta: "Já passou por alguma situação no ambiente de trabalho em que as competência comportamentais te ajudaram a resolvê-la?",
        resposta:[
            "A) Discordo Totalmente",
        "B) Discordo Parcialmente",
        "C) Indiferente",
        "D) Concordo Parcialmente",
        "E) Concordo Totalmente"
        ],
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent=correta.size + 'de' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value=item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta= event.target.value == item.correta
      correta.delete(item)
     if(estaCorreta) {
       correta.add(item)
  
     }
  
     mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
   quizItem.querySelector('dl dt').remove()
  
   quiz.appendChild(quizItem)
  
  
  }