# Trabalho da disciplina Técnicas de validação, verificação e testes de Software
Trabalho da disciplina de técnicas de validação, verificação e teste de software da turma do MBA em Qualidade de software na Pontificea Universidade Católica de Minas Gerais do ano de 2023/2024.

Equipe formada pelos alunos:
- Camila Resende
- Nayara Aquino da Silva
- Victor Mariano Battestin

Para o desenvolvimento deste trabalho, decidimos fazer uma suite de testes básica, porém, completa, onde demonstramos o uso de duas ferramentas de teste automatizados, baseadas na linguagem JavaScript, sendo o Cypress para testes funcionais e o K6 para testes de performance.

Foi configurado no projeto o Cucumber para escrever cenários de teste de maneira orientada ao comportamento utilizando a sintaxe Gherkin.

Abaixo mais informações sobre cada uma das ferramentas, os testes implementados e a execução dos mesmos.

# Testes Funcionais automatizados com Cypress
Explicação da configuração, implementação e execução dos testes aqui.

# Testes de performance com K6
Instalação das ferramentas:
- Para instalar a ferramenta na maquina, visite o site do desenvolvedor: https://grafana.com/docs/k6/latest/set-up/install-k6/ (pode requerer outras instalações na máquina)

Configurações dos cenários de teste:
- Dentro da raiz do projeto, os cenários dos testes de performance serão inseridos na pasta "scenarios"

- Para esse teste de exemplo, será utilizado o projeto https://api.chucknorris.io/ com a chamada GET:https://api.chucknorris.io/

- Apesar de ser um teste de performance, o objetivo não é validar desempenho ou estressar a api, mas sim apenas demonstrar configuração, codificação, execução e resultados do teste. Portanto, os testes serão executados com no maximo 1 usuário fazendo 1 requisição por segundo.

Desenvolvimento dos cenários de teste:
- Dentro da pasta "scenarios", está implementado um cenário de exemplo com uma chamada simples de uma API REST em uma rota GET;

- Dentro da raiz do projeto, existe um arquivo index.js onde são importados os teste para execução.

Execução dos testes:
- Dentro do terminal de sua escolha, basta navegar até a pasta raiz do projeto e executar o comando:

`k6 run index.js --vus 1 --duration 5s`

Os parametros representam o número de usuários virtuais (vus: virtual users) que farão a execução da chamada na API e a duração (duration) da execução dos testes em segundos.

Para mais detalhes de execução, parametrização e personalização dos testes, olhar a documentação de referencia do framework: https://k6.io/docs/

Resultado da execução:
- Os resultados são apresentados no próprio terminal em que o teste foi executado, assim como na imagem abaixo:
  ![image](https://github.com/battestin-victor/trabalho-tvvts/assets/134112032/e0d2a90c-8d91-461d-b317-f889f2cb1f1a)

