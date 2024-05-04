import React from 'react'

const Home = () => {
  return (
    <main className="text-slate-950">

      {/* CONTEÚDO */}
      <div className='flex-1 p-4 z-10'>

      <h1 className='text-xl font-bold'>Comparação de SEO em sites SSR e CSR</h1>

        {/* Contextualização */}
        <section className='my-1' id='contextualizacao'>
          <h1 className='text-xl font-bold'>Contextualização</h1>
          
          <div>

            <p className='paragraph'>
              A Web revolucionou a maneira como se acessa e compartilha conteúdo na internet. Através do uso de navegadores web, usuários são capazes de acessar endereços de rede chamados de sites, e, através de uma comunicação de cliente e servidor, requisitar por documentos Hypertext Markup Language (HTML) que são documentos que representam a estrutura de uma página web. Esses documentos são então processados pelo navegador e exibidos aos usuários de uma forma visual. No que diz respeito a maneira como os conteúdos desses documentos podem ser exibidos aos usuários, duas abordagens são comumente utilizadas: renderização do lado do ser-vidor (SSR) e renderização do lado do cliente (CSR). 
            </p>

            <p className='paragraph'>
              Em SSR, um servidor, ao receber uma requisição de documento HTML, terá que enviar este documento com todo o conteúdo já inserido para o navegador, cujo único papel será apenas converter o código HTML recebido no site visual que é mostrado ao usuário. Já em CSR, o servidor não envia um documento HTML completo para o navegador, mas sim apenas um do-cumento básico e sem conteúdo, em conjunto com código, geralmente JavaScript (JS), que será processado pelo navegador e será responsável por inserir o conteúdo na página.
            </p>

            <p className='paragraph'>
              Ambas as abordagens, SSR e CSR, possuem suas vantagens e desvantagens, sendo uma delas Search Engine Optimization (SEO). Search engines, ou motores de busca, são as ferramentas utilizadas por usuários na Web quando estes desejam pesquisar por algum tipo de conteúdo. Um site possuir um SEO ruim significa que este não será exibido no topo das buscas feitas pelos usuários, algo que pode ser muito prejudicial para aqueles que mantem o site. 
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* Motivação */}
        <section className='my-1' id='motivacao'>
          <h1 className='text-xl font-bold'>Motivação</h1>
          
          <div>

            <p className='paragraph'>
              A abordagem CSR é mais recente do que a SSR e está obteve muita popularidade devido à alta interatividade que esta proporciona para aplicações web, além de que esta é integrada em diver-sos frameworks JavaScript populares da atualidade, como: React, Angular e Vue. Sabe-se que essa abordagem pode apresentar resultados ruins no que diz respeito a SEO, entretanto, foram encontrados poucos estudos que determinam o quão impactante para SEO esta abordagem é quando comparado com a abordagem SSR.
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* Objetivos gerais */}
        <section className='my-1' id='obj_gerais'>
          <h1 className='text-xl font-bold'>Objetivos gerais</h1>
          
          <div>
            <p className='paragraph'>
              O presente trabalho tem como objetivo geral determinar o quão prejudicial para SEO a aborda-gem CSR é, em comparação com a abordagem SSR. 
            </p>
          </div>

        </section>

        <div className='separator'/>

        {/* Objetivos especificos */}
        <section className='my-1' id='obj_esp'>
          <h1 className='text-xl font-bold'>Objetivos especificos</h1>
          
          <div>

            <p className='paragraph'>
              Em relação aos objetivos específicos deste trabalho, estes são:
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Determinar quais aspectos da abordagem CSR são prejudiciais para SEO, em compara-ção com a abordagem SSR;</li>
                <li>Realizar testes sobre esses aspectos;  </li>
                <li>Comparar os resultados obtidos;</li>
              </ul>
            </div>  

          </div>

        </section>

      </div>
    
    </main>
  );
}

export default Home