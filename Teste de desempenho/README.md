### Considerações

Foram considerados três cenários para os testes:
- Cenário pequeno: 100 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário médio: 1000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário grande: 5000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Para cada cenário foram feitas auditorias para os dois sites: o site SSR e o CSR.

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/img%201.png"/>

Para cada site foi feita a seguinte bateria de testes:
- Teste no modo fast 3g do chrome devtools
- Teste no modo slow 3g do chrome devtools
- Teste no modo navigation do lighthouse e no ambiente desktop
- Teste no modo navigation do lighthouse e no ambiente mobile
- Teste no modo timespan do lighthouse e no ambiente desktop
- Teste no modo timespan do lighthouse e no ambiente mobile

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/img/img%202.png"/>

Cada um desses testes foi repetido 5 vezes e o valor considerado no final é a média dos resultados obtidos, por isso cada teste possui 5 arquivos diferentes (resultados do lighthouse foram salvos nos formatos HTML e JSON).

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/img%203.png"/>

E os resultados dos testes no Chrome DevTools são salvos através de printscreens no formato PNG. 

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/img%204.png"/>

<hr>

### Teste de desempenho

#### Requisitos funcionais
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/RF%20-%20desemp..png"/>
</p>

#### Etapas
- Desenvolvimento de um [site SSR](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20desempenho/Sites_desenvolvidos/server-side), com Next.js e um [site CSR](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20desempenho/Sites_desenvolvidos/client-side), com React.js;
- Realização de testes de Web Vitals nesses sites com a ferramenta [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR).
- Os testes foram feitos nos ambiente Desktop e Mobile. As Métricas consideradas foram: LCP, INP, CLS, SI, FCP, TBT e TTFB.

#### Resultados obtidos

##### Médias dos resultados dos testes no Lighthouse
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/lighthouse-media.png"/>
</p>

##### Médias dos resultados dos testes no Chrome DevTools
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/chromeDevTools-media.png"/>
</p>

> No geral, os impactos da abordagem SSR foram: SI no ambiente mobile; TBT no ambiente mobile; TTFB com fast 3G

> No geral, os impactos da abordagem CSR foram: LCP no ambiente mobile; CLS em ambos ambientes


#### Conclusões
- Caso se desenvolva um site SSR, deve-se atentar a exibição gradual dos elementos do site (SI), a duração dos processos JavaScript do site em ambientes mobile (TBT) e a velocidade de resposta do servidor a primeira requisição do cliente (TTFB);
- Caso se desenvolva um site CSR, deve-se atentar a estabilidade visual (CLS) e a velocidade de exibição do maior elemento do site em ambientes mobile (LCP);
- Esses foram os aspectos determinados como relevantes para SEO no que diz respeito a desempenho nessas abordagens.




