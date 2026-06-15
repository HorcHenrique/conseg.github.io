const projects = [
    {
        title: "A Multimodal Dataset for Environmental Occupancy Detection",
        date: "2026/6/9",
        authors: "Guilherme Dall’Agnol Deconto, Avelino Francisco Zorzo, Roben Castagna Lunardi, Rafael C Cardoso, Leonardo dos Santos Teixeira",
        link: "https://www.sciencedirect.com/science/article/pii/S2352340926004981"
    },
    {
        title: "An InfoSec GRC Maturity Model Proposal for a Secure Information Systems Usage on Brazilian Small Organizations",
        date: "2026/5/25",
        authors: "Caio Steglich, Ildevana Poltronieri Rodrigues, Avelino Francisco Zorzo, Daniel Dalalana Bertoglio",
        link: "https://sol.sbc.org.br/index.php/sbsi_estendido/article/download/42031/41800"
    },
    {
        title: "Review and agenda of Digital Forensics education and training",
        date: "2026/2/1",
        authors: "Edson Oliveira Jr, Avelino F Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:buQ7SEKw-1sC"
    },
    {
        title: "Exploring the Impact of Quantization on LLM Security Against Prompt Injection",
        date: "2025/11/12",
        authors: "Rafael Araújo Rodrigues, Luan Fonseca Garcia, Avelino Francisco Zorzo, Ewerton de Oliveira, Thomas Paula",
        link: "https://sol.sbc.org.br/index.php/eramiars/article/download/39389/39161"
    },
    ,
    {
        title: "Assessing the Impact of Post-Quantum Digital Signature Algorithms on Blockchains",
        date: "2025/10/10",
        authors: "Alison Gonçalves Schemitt, Henrique Fan da Silva, Roben Castagna Lunardi, Diego Kreutz, Rodrigo Brandão Mansilha, Avelino Francisco Zorzo",
        link: "https://arxiv.org/pdf/2510.09271"
    },
    ,
    {
        title: "Characterizing Cybersecurity Awareness Among Brazilian Computer Science Higher Education Students",
        date: "2025/7/20",
        authors: "Vinícius E Ferreira, Edson OliveiraJr, Bruno B Zarpelao, Avelino F Zorzo",
        link: "https://sol.sbc.org.br/index.php/wei/article/download/36155/35942"
    },
    ,
    {
        title: "A review study of digital forensics in IoT: Process models, phases, architectures, and ontologies",
        date: "2025/6/1",
        authors: "Thiago J Silva, Edson OliveiraJr, Maximiano Eduardo Pereira, Avelino F Zorzo",
        link: "https://sol.sbc.org.br/index.php/sbsi_estendido/article/download/42031/41800"
    },
    ,
    {
        title: "Stordy: Efficient Data Retrieval and Storage for Appendable-Block Blockchains",
        date: "2025/3/15",
        authors: "Leonardo Barbosa da Rosa, Roben Castagna Lunardi, Avelino Fracisco Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:CaZNVDsoPx4C"
    },
    ,
    {
        title: "An ontology for promoting controlled experimentation in digital forensics",
        date: "2025/3/1",
        authors: "An ontology for promoting controlled experimentation in digital forensics",
        link: "https://www.sciencedirect.com/science/article/pii/S2666281724001720"
    },
    ,
    {
        title: "A Modular Architecture and a Cost-Model to Estimate the Overhead of Implementing Confidentiality in Cloud Computing Environments",
        date: "2024/10/23",
        authors: "Mauro Storch, Vinícius Meyer, Avelino Zorzo, Cesar AF De Rose",
        link: "https://sol.sbc.org.br/index.php/sscad/article/download/31005/30808/"
    },
    ,
    {
        title: "Computing everywhere, for everyone, at any level",
        date: "2024/7/31",
        authors: "Avelino F Zorzo, Claudia LR Da Motta, Leila Ribeiro, Lisandro Z Granville",
        link: "https://dl.acm.org/doi/full/10.1145/3653308"
    },
    {
        title: "How Ontologies Have Supported Digital Forensics: Review and Recommendations",
        date: "2024/7/1",
        authors: "TJ Silva, E OliveiraJr, AF Zorzo",
        link: "http://forensicsciencereview.com/Abstract/36(2)-4%20(web).pdf"
    },
    {
        title: "Machine learning for forensic occupancy detection in iot environments",
        date: "2024/3/26",
        authors: "Guilherme Dall’Agnol Deconto, Avelino Francisco Zorzo, Daniel Bertoglio Dalalana, Edson Oliveira Jr, Roben Castagna Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:_OXeSy2IsFwC"
    },
    {
        title: "A proposal to increase data utility on Global Differential Privacy data based on data use predictions",
        date: "2024/1/12",
        authors: "Henry C Nunes, Marlon P da Silva, Charles V Neu, Avelino F Zorzo",
        link: "https://arxiv.org/pdf/2401.06601"
    },
    {
        title: "Shadow Blade: A tool to interact with attack vectors",
        date: "2024/1/3",
        authors: "Ariel R Ril, Daniel Dalalana Bertoglio, Avelino F Zorzo",
        link: "https://arxiv.org/pdf/2401.01960"
    },
    {
        title: "Introduçao a Blockchain: Visao Geral e Conceitos Básicos",
        date: "2024",
        authors: "Roben Castagna Lunardi, Regio Antonio Michelin, Avelino Francisco Zorzo, Ewerton Andrade, Diego Kreutz",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:gVv57TyPmFsC"
    },
    {
        title: "USA-DSL: A process for usability evaluation of domain-specific languages",
        date: "2024",
        authors: "Ildevana Poltronieri, Avelino Francisco Zorzo, Maicon Bernardino, Edson OliveiraJr",
        link: "https://search.proquest.com/openview/5b2bb490521489b81ef070e169aa53ac/1?pq-origsite=gscholar&cbl=6474026"
    },


];

const container = document.getElementById("info-container");

projects.forEach(project => {
    container.innerHTML += `
    <a href="${project.link}" target="_blank" style="text-decoration: none;">
      <div class="project-container">
        <div class="project-image">
          <div class="container-image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
        </div>
        <div class="project-infos">
          <div class="project-title">
            <h1>${project.title}</h1>
          </div>
          <div class="project-data">
            <p class="data-publicacao">${project.date}</p>
            <p class="autores">${project.authors}</p>
          </div>
        </div>
      </div>
    </a>
  `;
});