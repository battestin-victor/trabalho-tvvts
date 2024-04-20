import GetChucknorisJoke from "./scenarios/Get-Chucknoris-Joke.js";
import { group, sleep } from 'k6';

export default () => {
    /**
     * Utilizando a função group do K6 conseguimos agrupar a execução
     * dos teste conforme nossa necessidade, assim podemos separar por
     * exemplo por times, por funcionalidades etc., tendo assim mais
     * controle das métricas e estatísticas geradas.
     */
    group('Endpoint - gerar piada aleatória sobre o Chuck Norris', () => {
        GetChucknorisJoke();
    });

    sleep(1);
}