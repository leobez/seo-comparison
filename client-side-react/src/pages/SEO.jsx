import React from 'react'

const SEO = () => {
  return (
    <div className='flex'>

      {/* SUMÁRIO */}
      <div className='w-48 sticky top-0 h-[100vh] border-r border-black p-4'>
        <p>Sumário</p>
        <p>Ferramentas de busca</p>
        <p>SEO</p>
        <p>Referências</p>
      </div>

      {/* CONTEÚDO */}
      <div className='flex-1 p-4'>
        <section className='my-1'>
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
              Por fim, na etapa de busca, que geralmente é feita através de uma interface, é possível que usuá-rios formulem uma consulta com o uso de palavras chaves ou até mesmo de linguagem natural, que será utilizada pelo motor de busca propriamente dito, que se trata do programa que irá loca-lizar os itens na base de dados que devem constituir a resposta <span className='reference'>(Cendón, 2001, p. 41)</span>. 
            </p>

          </div>

        </section>

        <div className='separator'/>

        <section className='my-1'>
          <h1 className='text-xl font-bold'>SEO</h1>
          
          <div>

            <p className='paragraph'>
              Um detalhe de suma importância em motores de busca é a ordenação dos resultados obtidos, visto que, um motor que prioriza a exibição de resultados melhores será considerado superior a aqueles que não o fazem <span className='reference'>(Cendón, 2001, p. 44)</span>.
            </p>

            <p className='paragraph'>
              Para garantir um padrão de qualidade nos sites que são exibidos nas listas de resultados, os mo-tores de busca avaliam certos aspectos desses sites a fim de determinar suas pontuações de qua-lidade, que por fim irão determinar suas posições nas listas de resultados. Esses aspectos, podem ser, por exemplo: conteudo, usabilidade, acessibilidade e estrutura da página, entre diversos outros <span className='reference'>(Ledford, 2008, p. 10)</span>.
            </p>

            <p className='paragraph'>
              A exata forma como esses aspectos influenciam na posição final de um site é algo que apenas o criador do algoritmo específico utilizado pelo motor de busca sabe, mas uma coisa é certa: quan-to maior for a pontuação de qualidade de um site, melhor serão seus resultados nos motores de busca <span className='reference'>(Ledford, 2008, p. 10-11)</span>.  É justamente para isto que serve SEO. <span className='reference'>Yalçın e Köse (2010, p. 488)</span> definem SEO como o processo de fazer com que sites apareçam no topo da lista de re-sultados nos motores de busca. E isto é algo muito importante, visto que, segundo alguns dados de <span className='reference'>Dean (2023)</span>: 
            </p>

            <p className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>O primeiro resultado orgânico de uma pesquisa possui 10 vezes mais chance de receber um click quando comparado ao décimo resultado;</li>
                <li>O primeiro resultado em uma pesquisa no Google possui uma Taxa de Cliques (CTR) média de 27.6%; </li>
                <li>Mover 1 posição para cima em motores de busca pode resultar em um aumento de CTR de até 2.8%. </li>
              </ul>
            </p>

            <p className='paragraph'>
              Estes dados mostram que é de suma importância para um site obter boas posições em motores de busca, visto que aqueles que obtém possuem muito mais chances de atrair usuários na Web. E para isso é necessário utilizar boas práticas de SEO. 
            </p>

          </div>

        </section>
        
        <div className='separator'/>

        <section className='my-1'>
          <h1 className='text-xl font-bold'>Referências</h1>
          
          <div>

            <p className='paragraph'>
              Cendón
            </p>

            <p className='paragraph'>
              Seymour, Frantsvog e Kumar
            </p>

            <p className='paragraph'>
              Ledford
            </p>

            <p className='paragraph'>
              Yalçın e Köse
            </p>

            <p className='paragraph'>
              Dean
            </p>

          </div>

        </section>
      </div>



    </div>
  )
}

export default SEO