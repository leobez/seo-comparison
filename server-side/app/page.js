
export default function Home() {

  return (
    <main>

      <h1 className="text-xl font-bold">
        Trabalho de conclusão de curso.
      </h1>
      
      <div className="separator"/>

      <p className="text-justify">
        Este site se trata de um protótipo feito para o trabalho de conclusão de curso na <a className="outer-link" href="https://www.fatec.edu.br/">Fatec Americana</a>, onde o prosósito é comparar <span className="italic">Search Engine Optimization</span> (SEO) nas abordagens de renderização de sites <span className="italic">Server Side Rendering</span> (SSR) e <span className="italic">Client Side Rendering</span> (CSR).
      </p>

      <div className="separator"/>

      <p className="text-justify">
        A fim de realizar essa comparação, é necessário determinar os seguintes aspectos de ambas as abordagens:
        <ul>
          <li>Compatibilidade com motores de busca;</li>
          <li>Usabilidade das páginas.</li>
        </ul>
        Esses aspectos serão testados de uma forma prática, através do desenvolvimento de dois sites, em que um utilize de SSR e o outro utilize de CSR. Dessa forma, 
      </p>

    </main>
  );
}
