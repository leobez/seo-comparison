# O impacto da abordagem de renderização na otimização para motores de busca

## Monografia para a conclusão do curso em ADS na Fatec. 

### Resumo

<p align="justify">
Comumente são utilizadas duas abordagens para renderizar o conteúdo de um site: renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR). Ambas as abordagens possuem suas vantagens e desvantagens, sendo uma dessas otimização para motores de busca (SEO). Um site ter SEO ruim faz com que esse não apareça no topo das buscas feitas em mecanismos de busca, algo que pode ser muito prejudicial para aqueles que desenvolveram o site. Diversas fontes mostram que a abordagem CSR possui SEO pior do que a abordagem SSR e os principais motivos disso são: falta de compatibilidade com motores de busca, visto que alguns motores podem não ser capazes de processar conteúdo renderizado no lado do cliente e alguns problemas relacionados ao desempenho do site, visto que essa abordagem pode afetar a velocidade de carregamento inicial. Neste trabalho foram feitos testes de ambos esses aspectos, compatibilidade e desempenho, para determinar se a abordagem CSR, de fato, possui um impacto considerável em SEO. Através do teste de compatibilidade foi possível determinar que o mecanismo Google, o mais utilizado no mundo, é capaz de processar conteúdo renderizado no lado do cliente, mas não foi possível confirmar isso para outros mecanismos. Sendo assim, o aspecto da compatibilidade só se torna um possível problema caso se deseje indexar um site que use a abordagem CSR em algum mecanismo que não seja o Google. Já através do teste de desempenho, foi possível determinar que ambas as abordagens possuem vantagens e desvantagens. Com CSR, o site possui pior estabilidade visual e pior velocidade de carregamento do conteúdo, ao menos, em dispositivos menos potentes, tal como dispositivos móveis. Com SSR, o site possui pior exibição gradual do conteúdo e maior tempo em que a linha principal de execução do navegador fica bloqueada, ao menos, em dispositivos menos potentes, além de pior velocidade de resposta do servidor a primeira requisição do cliente caso o site possua muitos dados dinâmicos. Sendo assim, o desempenho pode se tornar um empecilho para SEO, tanto para a abordagem SSR quanto CSR, caso não sejam tomadas medidas que melhorem essas características.
</p>
Palavras-Chave: Renderização; Servidor; Cliente; Otimização; Motor de busca.

<hr>

Neste trabalho foram feitos dois tipos de testes para determinar SEO nas abordagens SSR e CSR:
  - Testes de [compatibilidade com motores de busca](https://github.com/leobez/seo-comparison/tree/main/Compatibility/client-side)
  - Testes de [desempenho](https://github.com/leobez/seo-comparison/tree/main/Web_Vitals)

<hr>

### Teste de compatibilidade

#### Etapas
> Etapas.

#### Resultados obtidos
> Resultados obtidos.

#### Conclusões
> Conclusões.

<hr>

### Teste de desempenho

#### Etapas
> Etapas.

#### Resultados obtidos
> Resultados obtidos.

#### Conclusões
> Conclusões.
