# Resultados das auditorias de Web Vitals com Lighthouse e Chrome DevTools

Foram considerados três cenários para os testes:
- Cenário pequeno: 100 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário médio: 1000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário grande: 5000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Para cada cenário foram feitas auditorias para os dois sites: o site SSR e o CSR.

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/img/img%201.png"/>

Para cada site foi feita a seguinte bateria de testes:
- Teste no modo fast 3g do chrome devtools
- Teste no modo slow 3g do chrome devtools
- Teste no modo navigation do lighthouse e no ambiente desktop
- Teste no modo navigation do lighthouse e no ambiente mobile
- Teste no modo timespan do lighthouse e no ambiente desktop
- Teste no modo timespan do lighthouse e no ambiente mobile

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/img/img%202.png"/>

Cada um desses testes foi repetido 5 vezes e o valor considerado no final é a média dos resultados obtidos, por isso cada teste possui 5 arquivos diferentes (resultados do lighthouse foram salvos nos formatos HTML e JSON).

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/img/img%203.png"/>

E os resultados dos testes no Chrome DevTools são salvos através de printscreens no formato PNG. 

Exemplo:

<img src="https://github.com/leobez/seo-comparison/blob/main/img/img%204.png"/>
