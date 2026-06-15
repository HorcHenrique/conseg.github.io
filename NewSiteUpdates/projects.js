const icons = {
    shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /> </svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /> </svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> </svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /> </svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /> </svg>`
};

const projects = [
    {
        title: "A Multimodal Dataset for Environmental Occupancy Detection",
        date: "2026/6/9",
        authors: "Guilherme Dall’Agnol Deconto, Avelino Francisco Zorzo, Roben Castagna Lunardi, Rafael C Cardoso, Leonardo dos Santos Teixeira",
        link: "https://www.sciencedirect.com/science/article/pii/S2352340926004981",
        icon: "globe"
    },
    {
        title: "An InfoSec GRC Maturity Model Proposal for a Secure Information Systems Usage on Brazilian Small Organizations",
        date: "2026/5/25",
        authors: "Caio Steglich, Ildevana Poltronieri Rodrigues, Avelino Francisco Zorzo, Daniel Dalalana Bertoglio",
        link: "https://sol.sbc.org.br/index.php/sbsi_estendido/article/download/42031/41800",
        icon: "shield"
    },
    {
        title: "Review and agenda of Digital Forensics education and training",
        date: "2026/2/1",
        authors: "Edson Oliveira Jr, Avelino F Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:buQ7SEKw-1sC",
        icon: "chart"
    },
    {
        title: "Exploring the Impact of Quantization on LLM Security Against Prompt Injection",
        date: "2025/11/12",
        authors: "Rafael Araújo Rodrigues, Luan Fonseca Garcia, Avelino Francisco Zorzo, Ewerton de Oliveira, Thomas Paula",
        link: "https://sol.sbc.org.br/index.php/eramiars/article/download/39389/39161",
        icon: "cpu"
    },
    {
        title: "Assessing the Impact of Post-Quantum Digital Signature Algorithms on Blockchains",
        date: "2025/10/10",
        authors: "Alison Gonçalves Schemitt, Henrique Fan da Silva, Roben Castagna Lunardi, Diego Kreutz, Rodrigo Brandão Mansilha, Avelino Francisco Zorzo",
        link: "https://arxiv.org/pdf/2510.09271",
        icon: "lock"
    },
    {
        title: "Characterizing Cybersecurity Awareness Among Brazilian Computer Science Higher Education Students",
        date: "2025/7/20",
        authors: "Vinícius E Ferreira, Edson OliveiraJr, Bruno B Zarpelao, Avelino F Zorzo",
        link: "https://sol.sbc.org.br/index.php/wei/article/download/36155/35942",
        icon: "shield"
    },
    {
        title: "A review study of digital forensics in IoT: Process models, phases, architectures, and ontologies",
        date: "2025/6/1",
        authors: "Thiago J Silva, Edson OliveiraJr, Maximiano Eduardo Pereira, Avelino F Zorzo",
        link: "https://sol.sbc.org.br/index.php/sbsi_estendido/article/download/42031/41800",
        icon: "chart"
    },
    {
        title: "Stordy: Efficient Data Retrieval and Storage for Appendable-Block Blockchains",
        date: "2025/3/15",
        authors: "Leonardo Barbosa da Rosa, Roben Castagna Lunardi, Avelino Fracisco Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:CaZNVDsoPx4C",
        icon: "lock"
    },
    {
        title: "An ontology for promoting controlled experimentation in digital forensics",
        date: "2025/3/1",
        authors: "An ontology for promoting controlled experimentation in digital forensics",
        link: "https://www.sciencedirect.com/science/article/pii/S2666281724001720",
        icon: "chart"
    },
    {
        title: "A Modular Architecture and a Cost-Model to Estimate the Overhead of Implementing Confidentiality in Cloud Computing Environments",
        date: "2024/10/23",
        authors: "Mauro Storch, Vinícius Meyer, Avelino Zorzo, Cesar AF De Rose",
        link: "https://sol.sbc.org.br/index.php/sscad/article/download/31005/30808/",
        icon: "cpu"
    },
    {
        title: "Computing everywhere, for everyone, at any level",
        date: "2024/7/31",
        authors: "Avelino F Zorzo, Claudia LR Da Motta, Leila Ribeiro, Lisandro Z Granville",
        link: "https://dl.acm.org/doi/full/10.1145/3653308",
        icon: "globe"
    },
    {
        title: "How Ontologies Have Supported Digital Forensics: Review and Recommendations",
        date: "2024/7/1",
        authors: "TJ Silva, E OliveiraJr, AF Zorzo",
        link: "http://forensicsciencereview.com/Abstract/36(2)-4%20(web).pdf",
        icon: "chart"
    },
    {
        title: "Machine learning for forensic occupancy detection in iot environments",
        date: "2024/3/26",
        authors: "Guilherme Dall’Agnol Deconto, Avelino Francisco Zorzo, Daniel Bertoglio Dalalana, Edson Oliveira Jr, Roben Castagna Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:_OXeSy2IsFwC",
        icon: "cpu"
    },
    {
        title: "A proposal to increase data utility on Global Differential Privacy data based on data use predictions",
        date: "2024/1/12",
        authors: "Henry C Nunes, Marlon P da Silva, Charles V Neu, Avelino F Zorzo",
        link: "https://arxiv.org/pdf/2401.06601",
        icon: "lock"
    },
    {
        title: "Shadow Blade: A tool to interact with attack vectors",
        date: "2024/1/3",
        authors: "Ariel R Ril, Daniel Dalalana Bertoglio, Avelino F Zorzo",
        link: "https://arxiv.org/pdf/2401.01960",
        icon: "shield"
    },
    {
        title: "Introduçao a Blockchain: Visao Geral e Conceitos Básicos",
        date: "2024",
        authors: "Roben Castagna Lunardi, Regio Antonio Michelin, Avelino Francisco Zorzo, Ewerton Andrade, Diego Kreutz",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:gVv57TyPmFsC",
        icon: "lock"
    },
    {
        title: "USA-DSL: A process for usability evaluation of domain-specific languages",
        date: "2024",
        authors: "Ildevana Poltronieri, Avelino Francisco Zorzo, Maicon Bernardino, Edson OliveiraJr",
        link: "https://search.proquest.com/openview/5b2bb490521489b81ef070e169aa53ac/1?pq-origsite=gscholar&cbl=6474026",
        icon: "globe"
    },
    {
        title: "Data management in appendable-block blockchains: a case study for it life-cycle management",
        date: "2023/11/13",
        authors: "Rodrigo W Silveira, Roben C Lunardi, Avelino F Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:Aul-kAQHnToC",
        icon: "shield"
    },
    {
        title: "Modelo Integrado para Forense Computacional em Cenários Envolvendo Aplicaçoes IoT",
        date: "2023/9/18",
        authors: "Guilherme Schneider, Avelino Francisco Zorzo, Roben Castagna Lunardi",
        link: "https://sol.sbc.org.br/index.php/sbseg/article/download/27195/27011/",
        icon: "globe"
    },
    {
        title: "Towards new challenges of modern Pentest",
        date: "2023/8/21",
        authors: "Daniel Dalalana Bertoglio, Arthur Gil, Juan Acosta, Júlia Godoy, Roben Castagna Lunardi, Avelino Francisco Zorzo",
        link: "https://arxiv.org/pdf/2311.12952",
        icon: "globe"
    },
    {
        title: "When blockchain meets smart cities: Opportunities, security and future research",
        date: "2023/8/10",
        authors: "Roben C Lunardi, Regio A Michelin, Maher Alharby, Volkan Dedeoglu, Henry C Nunes, Eduardo Arruda, Avelino F Zorzo, Aad van Moorsel",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:GFxP56DSvIMC",
        icon: "cpu"
    },
    {
        title: "Impact of Using a Privacy Model on Smart Buildings Data for CO2 Prediction",
        date: "2023/7/11",
        authors: "C Morisset MP da Silva, HC Nunes, LT Thomas, CV Neu, AF Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:LhH-TYMQEocC",
        icon: "globe"
    },
    {
        title: "Proposta de Gestao do Ciclo de Vida de Equipamentos de TI com Appendable-block Blockchain",
        date: "2023/5/22",
        authors: "Rodrigo Wetzel Silveira, Roben C Lunardi, Avelino Francisco Zorzo",
        link: "https://sol.sbc.org.br/index.php/wblockchain/article/download/24622/24443/",
        icon: "chart"
    },
    {
        title: "Testing Tools",
        date: "2023/2/6",
        authors: "Elder M Rodrigues, Avelino F Zorzo, Luciano Marchezan",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:vDZJ-YLwNdEC",
        icon: "cpu"
    },
    {
        title: "Understanding the Penetration Test Workflow: a security test with Tramonto in an e-Government application",
        date: "2022/12/9",
        authors: "Daniel D Bertoglio, Luis GB Schüler, Avelino F Zorzo, Roben C Lunardi",
        link: "https://ieeexplore.ieee.org/iel7/10063338/10063342/10063571.pdf",
        icon: "lock"
    },
    {
        title: "PlugSPL: An Environment to Support SPL Life Cycle",
        date: "2022/9/28",
        authors: "Elder M Rodrigues, Avelino F Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:OR75R8vi5nAC",
        icon: "shield"
    },
    {
        title: "Model-Based Testing of Software Product Lines",
        date: "2022/9/28",
        authors: "Kleber Lopes Petry, Edson OliveiraJr, Leandro Teodoro Costa, Aline Zanin, Avelino Francisco Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&pagesize=80&sortby=pubdate&citation_for_view=rsiQlMgAAAAJ:OcBU2YAGkTUC",
        icon: "cpu"
    },
    {
        title: "PLeTs: A Software Product Line for Testing Tools",
        date: "2022/9/28",
        authors: "Elder M Rodrigues, Avelino F Zorzo, Luciano Marchezan",
        link: "https://www.researchgate.net/profile/Elder-Rodrigues-2/publication/368313117_PLeTs_A_Software_Product_Line_for_Testing_Tools/links/646fa6610ed3704822c07cd0/PLeTs-A-Software-Product-Line-for-Testing-Tools.pdf",
        icon: "shield"
    },
    {
        title: "Consensus algorithms on appendable-block blockchains: Impact and security analysis",
        date: "2022/8",
        authors: "Roben C Lunardi, Regio A Michelin, Henry C Nunes, Charles V Neu, Avelino F Zorzo, Salil S Kanhere",
        link: "https://link.springer.com/article/10.1007/s11036-022-02015-4",
        icon: "shield"
    },
    {
        title: "Weasels e a construção de conhecimento em Segurança Ofensiva",
        date: "2022/4/24",
        authors: "Daniel Dalalana Bertoglio, Henry Cabral Nunes, Pedro Cordeiro Filippi, Avelino Francisco Zorzo",
        link: "https://sol.sbc.org.br/index.php/educomp/article/download/19204/19033/",
        icon: "lock"
    },
    {
        title: "Digital forensics experimentation: Analysis and recommendations",
        date: "2022",
        authors: "EDSON OLIVEIRAJR, Tiago J Silva, Avelino Francisco Zorzo, Charles V Neu",
        link: "http://forensicsciencereview.com/Abstract/34(1)-1%20(web).pdf",
        icon: "chart"
    },

];

const container = document.getElementById("info-container");

// 1. Limpamos o container inicial para reconstruir a estrutura correta
container.innerHTML = "";

let anoAnterior = "";
let htmlGerado = "";

projects.forEach((project, index) => {
    const anoAtual = project.date.substring(0, 4);
    const projectIcon = icons[project.icon] || icons.shield;

    // Se mudou o ano
    if (anoAnterior !== anoAtual) {
        // Se não for o primeiro ano da página, precisamos fechar a div do ano anterior
        if (anoAnterior !== "") {
            htmlGerado += `</div></div>`; // Fecha a 'lista-projetos-ano' e a 'secao-ano'
            htmlGerado += `<hr class="linha-ano" />`; // Adiciona a linha separadora sutil
        }

        // Abre a nova estrutura do ano novo
        htmlGerado += `
            <div class="secao-ano">
                <div class="titulo-ano-container">
                    <h2 class="texto-ano">${anoAtual}</h2>
                </div>
                <div class="lista-projetos-ano">
        `;

        anoAnterior = anoAtual;
    }

    // Injeta o card do projeto dentro da lista do ano atual
    htmlGerado += `
    <a href="${project.link}" target="_blank" style="text-decoration: none;">
      <div class="project-container">
        <div class="project-image">
          <div class="container-image">
            ${projectIcon}
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

    // Se for o último projeto de todos, fecha as tags que ficaram abertas
    if (index === projects.length - 1) {
        htmlGerado += `</div></div>`;
    }
});

// Joga tudo de uma vez para o container principal
container.innerHTML = htmlGerado;