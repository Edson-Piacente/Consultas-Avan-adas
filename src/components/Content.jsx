import React from "react";
import "./Content.css";


function Content() {
  return (
    <>
    {/* Contúdo */}
      <div className="container">
        <section className="d-1">
          <div className="d-2">
            <h2>Subconsultas</h2>
            <p>
              é uma consulta SQL realizada dentro de outra consulta principal.
              Ela é usada para buscar dados intermediários que ajudem a refinar
              ou filtrar os resultados finais. As subconsultas podem ser
              utilizadas em diversas cláusulas, como SELECT, FROMe WHERE,
              permitindo consultas mais dinâmicas e eficientes.
            </p>
          </div>

          <div className="d-2">
            <h2>CTEs</h2>
            <p>
              {" "}
              Uma CTE (Expressão de Tabela Comum) é uma consulta temporária
              nomeada que pode ser referenciada dentro de uma consulta maior.
              Ela melhorou a legibilidade do código SQL, facilitando a
              organização de consultas complexas. As CTEs são declaradas com
              WITH e podem ser reutilizadas dentro da mesma consulta, tornando o
              SQL mais eficiente e modular.
            </p>
          </div>

          <div className="d-2">
            <h2>Funções Analiticas</h2>
            <p>
              realizando cálculos em SQL sobre um conjunto de linhas sem agrupar
              os dados. Elas são usadas para rankings, médias móveis e
              comparações dentro de partições de consulta. Exemplos incluem
              ROW_NUMBER(), RANK(), LEAD()e LAG(), facilitando análises
              avançadas.
            </p>
          </div>
        </section>

        {/* Beneficios */}

        <div className="container-2">
            <header id="h-2">
                <h1>Benefícios das Consultas Avançadas</h1>
                <p>Como as Subconsultas, CTEs e Funções Analíticas podem melhorar seu trabalho com SQL</p>
                <p></p>
            </header>
            <section className="beneficio">
                <h2>Melhora na Performance de Consultas</h2>
                <p>O uso de subconsultas e CTEs permite otimizar consultas complexas, evitando a repetição de código e melhorando o desempenho da execução em bancos de dados grandes.</p>
            </section>
            <section className="beneficio">
                <h2>Facilidade de Manutenção</h2>
                <p>Consultas com CTEs tornam o código mais legível e modular, facilitando a manutenção e a compreensão por outros desenvolvedores.</p>
            </section>
            <section className="beneficio">
                <h2>Análises Avançadas com Funções Analíticas</h2>
                <p>Funções analíticas permitem realizar cálculos complexos, como somas acumuladas e classificações, diretamente no banco de dados, economizando tempo no processamento de grandes volumes de dados.</p>
            </section>
        </div>

        {/* Exemplos */}
        
        <div className="container-3">
            <header id="h-3">
                <h1>Consultas Avançadas em SQL</h1>
                <p>Exemplos de Subconsultas, CTEs e Funções Analíticas</p>
            </header>
            <section className="tema">
                <h2>Subconsultas</h2>
                <img src="../public/exemplo-sub.png" alt="exemplo-sub" className="img"/>
            </section>
            <section className="tema">
                <h2>CTEs (Expressão de Tabela Comum)</h2>
                <img src="../public/exemplo-cte.png" alt="exemplo-cte" className="img"/>
            </section>
            <section className="tema">
                <h2>Funções Analíticas</h2>
                <img src="../public/exemplo-A.png" alt="exemplo-A" className="img"/>
            </section>
        </div>
      </div>
    </>
  );
}

export default Content;
