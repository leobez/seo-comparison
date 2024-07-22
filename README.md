# O impacto da abordagem de renderização na otimização para motores de busca

## Monografia para a conclusão do curso em ADS na Fatec. 

Link para o documento: [Link]

> Approval Photo

### Resumo

<p align="justify">
Comumente são utilizadas duas abordagens para renderizar o conteúdo de um site: renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR). Ambas as abordagens possuem suas vantagens e desvantagens, sendo uma dessas otimização para motores de busca (SEO). Um site ter SEO ruim faz com que esse não apareça no topo das buscas feitas em mecanismos de busca, algo que pode ser muito prejudicial para aqueles que desenvolveram o site. Diversas fontes mostram que a abordagem CSR possui SEO pior do que a abordagem SSR e os principais motivos disso são: falta de compatibilidade com motores de busca, visto que alguns motores podem não ser capazes de processar conteúdo renderizado no lado do cliente e alguns problemas relacionados ao desempenho do site, visto que essa abordagem pode afetar a velocidade de carregamento inicial. Neste trabalho foram feitos testes de ambos esses aspectos, compatibilidade e desempenho, para determinar se a abordagem CSR, de fato, possui um impacto considerável em SEO. Através do teste de compatibilidade foi possível determinar que o mecanismo Google, o mais utilizado no mundo, é capaz de processar conteúdo renderizado no lado do cliente, mas não foi possível confirmar isso para outros mecanismos. Sendo assim, o aspecto da compatibilidade só se torna um possível problema caso se deseje indexar um site que use a abordagem CSR em algum mecanismo que não seja o Google. Já através do teste de desempenho, foi possível determinar que ambas as abordagens possuem vantagens e desvantagens. Com CSR, o site possui pior estabilidade visual e pior velocidade de carregamento do conteúdo, ao menos, em dispositivos menos potentes, tal como dispositivos móveis. Com SSR, o site possui pior exibição gradual do conteúdo e maior tempo em que a linha principal de execução do navegador fica bloqueada, ao menos, em dispositivos menos potentes, além de pior velocidade de resposta do servidor a primeira requisição do cliente caso o site possua muitos dados dinâmicos. Sendo assim, o desempenho pode se tornar um empecilho para SEO, tanto para a abordagem SSR quanto CSR, caso não sejam tomadas medidas que melhorem essas características.
</p>

Palavras-Chave: Renderização; Servidor; Cliente; Otimização; Motor de busca.

<hr>

Neste trabalho foram feitos dois tipos de testes para determinar SEO nas abordagens SSR e CSR:
  - Teste de [compatibilidade com motores de busca](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20compatibilidade)
  - Teste de [desempenho](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20desempenho)

<hr>

### Teste de compatibilidade

#### Etapas
- Desenvolvimento de um [site CSR](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20compatibilidade/Site_desenvolvido/client-side), com React.js;
- Hospedagem desse site na [Vercel](https://vercel.com/);
- Solicitação da indexação de site nos mecanismos: [Google Search Console](https://search.google.com/search-console/about), [Bing Webmaster Tools](https://www.bing.com/webmasters/about) e [Yandex Webmaster](https://webmaster.yandex.com/welcome/);
- Realização de pesquisas nos mecanismos Google, Bing, Yandex, Yahoo! e DuckDuckGo para avaliar se o site foi indexado corretamente.

#### Resultados obtidos

##### Pesquisa 1 - Pesquisa para determinar em quais mecanismos o site foi indexado.
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/Tabela%20compat.%201.png"/>
</p>

> O site foi inexado apenas nos mecanismos Google e Yandex, sendo assim, as próximas pesquisas foram apenas nesses mecanismos


##### Pesquisa 2 - Pesquisa pelos endereços do site
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/Tabela%20compat.%202.png"/>
</p>

> 3/4 das páginas foram indexadas no Google

> 1/4 das páginas foram indexadas no Yandex


##### Pesquisa 2 - Pesquisa pelos textos do site
<p align="justify">
    <img src="https://github.com/leobez/seo-comparison/blob/main/images_for_readme/Tabela%20compat.%203.png"/>
</p>

> O site apareceu em 3/4 das pesquisas feitas no Google

> O site apareceu em 1/4 das pesquisas feitas no Yandex 
 

#### Conclusões
- A abordagem CSR é compatível com, ao menos, o Google, que detém uma fatia de 98,8% do mercado mundial de mecanismos de busca;
- Não foi possível confirmar a compatibilidade da abordagem CSR com mecanismos além do Google;
- No geral, caso se desenvolva um site CSR, só é necessário se preocupar com aspectos de compatibilidade caso se deseje indexar o site em mecanismos além do Google. 

<hr>

### Teste de desempenho

#### Etapas
- Desenvolvimento de um [site SSR](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20desempenho/Sites_desenvolvidos/server-side), com Next.js e um [site CSR](https://github.com/leobez/seo-comparison/tree/main/Teste%20de%20desempenho/Sites_desenvolvidos/client-side), com React.js;
- Realização de testes de Web Vitals nesses sites com a ferramenta [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR). Métricas consideradas: LCP, INP, CLS, SI, FCP, TBT e TTFB.

#### Resultados obtidos
> Tabela 1
- Descrição

> Tabela 2
- Descrição

> Tabela 3
- Descrição

> Tabela 4
- Descrição

#### Conclusões
- Caso se desenvolva um site SSR, deve-se atentar a exibição gradual dos elementos do site (SI), a duração dos processos JavaScript do site em ambientes mobile (TBT) e a velocidade de resposta do servidor a primeira requisição do cliente (TTFB);
- Caso se desenvolva um site CSR, deve-se atentar a estabilidade visual (CLS) e a velocidade de exibição do maior elemento do site em ambientes mobile (LCP);
- Esses foram os aspectos determinados como relevantes para SEO no que diz respeito a desempenho nessas abordagens.








