import React from 'react'
import Summary from '../components/Summary'

const Seo = () => {

  const topics = {
    'ferramentas_de_busca': "Ferramentas de busca",
    'seo': "SEO",
    'referencias': 'Referências', 
  }

  return (
    <div className='flex'>

      {/* SUMÁRIO */}
      <Summary items={topics}/>

      {/* CONTEÚDO */}
      <div className='flex-1 p-4'>

        <section className='my-1' id='ferramentas_de_busca'>
          <h1 className='text-xl font-bold'>Ferramentas de busca</h1>
          
          <div>

            <p className='paragraph'>
              Para dar prosseguimento a pesquisa proposta neste trabalho, é preciso esclarecer as tecnologias que compõem as ferramentas de busca, para então explicar o que é Search Engine Optimization (SEO). 
            </p>

            <p className='paragraph'>
              <span className='reference'>Cendón (2001, p. 39)</span> diz que nos primórdios da Web surgiu a preocupação de criar ferramentas de busca que fossem capazes de localizar recursos informacionais na Web. Dentre as soluções propostas, uma dessas é o motor de busca. <span className='reference'>Seymour, Frantsvog e Kumar (2011, p. 55)</span> definem que motores de busca operam em três etapas: <span className='italic'>web crawling</span>, indexação (<span className='italic'>indexing</span>) e busca (<span className='italic'>search</span>).
            </p>

            <p className='paragraph'>
              Na etapa de web crawling, são utilizados robôs também conhecidos como: aranhas (<span className='italic'>spiders</span>), agentes, viajantes (<span className='italic'>wanderes</span>), rastejadores (<span className='italic'>crawlers</span>) ou vermes (<span className='italic'>worms</span>) que realizam buscas regulares pela internet a fim de obter a maior quantidade possível de documentos para serem integrados no banco de dados do motor de busca. Diversos desses robôs podem operar em paralelo e estes efetuam suas buscas de forma sistemática, através dos links presentes nas páginas <span className='reference'>(Cendón, 2001, p. 41)</span>.
            </p>

            <p className='paragraph'>
              Na etapa de indexação, os documentos vasculhados pelos robôs são encaminhados a indexadores, que extraem as informações relevantes do documento, tais como: URLs, títulos, resumos, tamanho e palavras e as armazenam em um banco de dados <span className='reference'>(Cendón, 2001, p. 41)</span>. De maneira mais detalhada, as informações relevantes extraídas do site são analisadas para determinar como a página deve ser indexada no banco de dados, para que posteriormente possa ser rapidamente encontrada no processo de busca <span className='reference'>(Seymour; Frantsvog; Kumar, 2011, p. 55)</span>. 
            </p>

            <p className='paragraph'> 
              Por fim, na etapa de busca, que geralmente é feita através de uma interface, é possível que usuários formulem uma consulta com o uso de palavras chaves ou até mesmo de linguagem natural, que será utilizada pelo motor de busca propriamente dito, que se trata do programa que irá localizar os itens na base de dados que devem constituir a resposta <span className='reference'>(Cendón, 2001, p. 41)</span>. 
            </p>

          </div>

        </section>

        <div className='separator'/>

        <section className='my-1' id='seo'>
          <h1 className='text-xl font-bold'>SEO</h1>
          
          <div>

            <p className='paragraph'>
              Um detalhe de suma importância em motores de busca é a ordenação dos resultados obtidos, visto que, um motor que prioriza a exibição de resultados melhores será considerado superior a aqueles que não o fazem <span className='reference'>(Cendón, 2001, p. 44)</span>.
            </p>

            <p className='paragraph'>
              Para garantir um padrão de qualidade nos sites que são exibidos nas listas de resultados, os motores de busca avaliam certos aspectos desses sites a fim de determinar suas pontuações de qualidade, que por fim irão determinar suas posições nas listas de resultados. Esses aspectos, podem ser, por exemplo: conteudo, usabilidade, acessibilidade e estrutura da página, entre diversos outros <span className='reference'>(Ledford, 2008, p. 10)</span>.
            </p>

            <p className='paragraph'>
              A exata forma como esses aspectos influenciam na posição final de um site é algo que apenas o criador do algoritmo específico utilizado pelo motor de busca sabe, mas uma coisa é certa: quanto maior for a pontuação de qualidade de um site, melhor serão seus resultados nos motores de busca <span className='reference'>(Ledford, 2008, p. 10-11)</span>.  É justamente para isto que serve SEO. <span className='reference'>Yalçın e Köse (2010, p. 488)</span> definem SEO como o processo de fazer com que sites apareçam no topo da lista de resultados nos motores de busca. E isto é algo muito importante, visto que, segundo alguns dados de <span className='reference'>Dean (2023)</span>: 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>O primeiro resultado orgânico de uma pesquisa possui 10 vezes mais chance de receber um click quando comparado ao décimo resultado;</li>
                <li>O primeiro resultado em uma pesquisa no Google possui uma Taxa de Cliques (CTR) média de 27.6%; </li>
                <li>Mover 1 posição para cima em motores de busca pode resultar em um aumento de CTR de até 2.8%. </li>
              </ul>
            </div>

            <p className='paragraph'>
              Estes dados mostram que é de suma importância para um site obter boas posições em motores de busca, visto que aqueles que obtém possuem muito mais chances de atrair usuários na Web. E para isso é necessário utilizar boas práticas de SEO. 
            </p>

          </div>

        </section>
        
        <div className='separator'/>

        {/* Referências */}
        <section className='my-1' id='referencias'>
          <h1 className='text-xl font-bold'>Referências</h1>
          
          <div>

            <p className='paragraph'>
              	Cendón, Beatriz Valadares. Ferramentas de busca na Web. Ciência da informação, Brasília, vol. 30, n. 1, jun. 2001, p. 39-49 [ISSN 1518-8353]. Disponível em: <a href="https://revista.ibict.br/ciinf/article/view/937/974" target='_blank' className='text-blue-800'>https://revista.ibict.br/ciinf/article/view/937/974</a>. Acesso em: 08 mai, 2024 às 21:50min. 
            </p>

            <p className='paragraph'>
              Seymour, Joseph Tom; Frantsvog, Dean; Kumar, Satheesh. History Of Search Engines. International journal of management & information systems, vol. 15, n. 4, set. 2011 [ISSN 2157-9628]. Disponível em: <a href="https://www.researchgate.net/publication/265104813_History_Of_Search_Engines" target='_blank' className='text-blue-800'>https://www.researchgate.net/publication/265104813_History_Of_Search_Engines</a>. Acesso em: 12 mai, 2024 às 10:11min.
            </p>

            <p className='paragraph'>
              Ledford, Jerri L. Search Engine Optimization Bible (5ª edição). John Wiley & Sons, 2015. Disponível em: <a href="https://books.google.com.br/books?id=sgmxo1Alq_4C&printsec=frontcover" target='_blank' className='text-blue-800'>https://books.google.com.br/books?id=sgmxo1Alq_4C&printsec=frontcover</a>. Acesso em: 08 mai, 2024 às 21:57min.
            </p>

            <p className='paragraph'>
              Yalçın, Nursel; Köse Utku. What is search engine optimization: SEO? Procedia: social & behavioral sciences, Vol. 9, Out. 2010, p. 487-493 [ISSN 1877-0428]. Disponível em: <a href="https://www.sciencedirect.com/science/article/pii/S1877042810022901" target='_blank' className='text-blue-800'>https://www.sciencedirect.com/science/article/pii/S1877042810022901</a>. Acesso em: 08 mai, 2024 às 22:03min. 
            </p>

            <p className='paragraph'>
              Dean, Brian. We analyzed 4 million Google Search Results: Here's What We Learned About Organic Click Through Rate. 2023. Disponível em: <a href="https://backlinko.com/google-ctr-stats" target='_blank' className='text-blue-800'>https://backlinko.com/google-ctr-stats</a>. Acesso em: 08 mai, 2024 às 22:05min. 
            </p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Seo