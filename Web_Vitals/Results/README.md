# Resultados das auditorias de Web Vitals com Lighthouse e Chrome DevTools

Foram considerados três cenários para os testes:
- Cenário pequeno: 100 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário médio: 1000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Cenário grande: 5000 requisições de /photos da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Para cada cenário foram feitas auditorias para os dois sites: o site SSR e o CSR.

IMG

Para cada site foi feita a seguinte bateria de testes:
- Teste no modo navigation do lighthouse e no ambiente desktop
- Teste no modo navigation do lighthouse e no ambiente mobile
- Teste no modo timespan do lighthouse e no ambiente desktop
- Teste no modo timespan do lighthouse e no ambiente mobile
- Teste no modo fast 3g do chrome devtools
- Teste no modo slow 3g do chrome devtools

IMG

Cada um desses testes foi repetido 5 vezes e o valor considerado no final é a média dos resultados obtidos, por isso cada teste possui 5 arquivos diferentes (resultados do lighthouse foram salvos nos formatos HTML e JSON)

IMG
