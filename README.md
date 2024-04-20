# trabalho-tvvts
Trabalho da disciplina de técnicas de validação, verificação e teste de software da turma do MBA em Qualidade de software

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

