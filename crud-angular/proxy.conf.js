// Essa parte e responsavel por permitir a conexao do Front com a API, sem causar problemas com o CORS.
// Foi optado nao fazer a configuracao do CORS, pois queremos apenas que o front acesse a API,
// entao nao faz sentido configurar o CORS ja que nao tera o envolvimento de outras APIs

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
