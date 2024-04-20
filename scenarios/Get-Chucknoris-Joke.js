import http from 'k6/http';
import { sleep, check, fail } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

/**
 * Criação das variáveis que irão armazenar 
 * as métricas das execuções dos testes
 */
export var GetCustomerDuration = new Trend('get_customer_duration');
export var GetCustomerFailRate = new Rate('get_customer_fail_rate');
export var GetCustomerSuccessRate = new Rate('get_customer_success_rate');
export var GetCustomerReqs = new Rate('get_customer_reqs');

export default function () {
    
    // Chamada da API em teste
    var res = http.get('https://api.chucknorris.io/jokes/random');

    /**
     * Definição das metricas em cada chamada
     * da API, note que nas metricas de sucesso
     * e falha, o metodo add recebe condições
     * lógicas para validar se deve ou não somar
     * nas estatísticas o caso de sucesso ou falha.
     */ 
    GetCustomerDuration.add( res.timings.duration );
    GetCustomerReqs.add( 1 );
    GetCustomerFailRate.add( res.status == 0 || res.status > 399 );
    GetCustomerSuccessRate.add( res.status > 0 && res.status < 399 );

    var durationMsg = 'Duração máxima ${4000/1000}s';

    /**
     * Caso a chamada da API demore mais de 4000 ms
     * para obter uma resposta durante a execução do
     * teste, então lançaremos uma mensagem de falha
     * definida na variável acima.
     */
    if(!check(res,{'max duration': (r) => r.timings.duration < 4000})) {
        fail(durationMsg);
    }

    sleep(1);
}