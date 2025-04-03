<svelte:head>
  <title>Curriculo</title>
</svelte:head>

<script>

    import projects from "$lib/projects.json";
    import Project from "$lib/project.svelte";
    import Pie from "$lib/pie.svelte";
    
    import * as d3 from 'd3';

//     let pieData = [
//     { value: 1, label: "apples" },
//     { value: 2, label: "oranges" },
//     { value: 3, label: "mangos" },
//     { value: 4, label: "pears" },
//     { value: 5, label: "limes" },
//     { value: 5, label: "cherries" }
// ];

    let query = "";
    $: filteredProjects = projects.filter(project => {
    let values = Object.values(project).join("\n").toLowerCase();
    return values.includes(query.toLowerCase());
});

    let pieData;

    $: {
        // Initialize to an empty object every time this runs
        pieData = {};
        
        // Calculate rolledData and pieData based on filteredProjects here
        let rolledData = d3.rollups(filteredProjects, v => v.length, d => d.year);

        // We don't need 'let' anymore since we already defined pieData
        pieData = rolledData.map(([year, count]) => {
            return { value: count, label: year };
        });
    }
    let selectedYearIndex = -1;
    let selectedYear;
    $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;
    $: filteredByYear = filteredProjects.filter(project => {
        if (selectedYear) {
            return project.year === selectedYear;
        }

        return true;
    });

</script>



<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />
<input type="search" bind:value={query} aria-label="Search projects" placeholder="🔍 Search projects..." />

<!-- <pre>{ JSON.stringify(projects, null, "\t") }</pre> -->
<!-- <h1>Kauan Mariani Ferreira</h1>
<h2 style="color:deeppink;">Formação Acadêmica</h2>
<ul>
    <li><strong>Graduação:</strong> Ciência de Dados e Inteligência Artificial - FGV-Rio (2023 - Presente)</li>
    <li><strong>Técnico em Química:</strong> Instituto Federal de Santa Catarina (2020 - 2022)</li>
</ul>

<h2>Experiência Acadêmica e Atividades Extracurriculares</h2>
<ul>
    <li>Monitor de Química Geral no IFSC (2021)</li>
    <li>Bolsista do CDMC (Centro para o Desenvolvimento da Matemática e Ciências) da FGV</li>
</ul>

<h2>Prêmios e Reconhecimentos</h2>
<ul>
    <li>Menção Honrosa - Olimpíada Brasileira de Matemática (OBM) 2019</li>
    <li>Medalhista de Ouro - OBMEP (2019, 2021)</li>
    <li>Medalhista de Prata - OBMEP (2016, 2017)</li>
    <li>Medalhista de Bronze - OBMEP (2018, 2022)</li>
    <li>Mais 15 medalhas em outras olimpíadas de conhecimento</li>
</ul>

<h2>Habilidades</h2>
<ul>
    <li>Fluente em Inglês</li>
</ul>

<h2>Contato e Redes</h2>
<ul>
    <li><strong>Email:</strong> <a href="mailto:kauan.mariani@gmail.com">kauan.mariani@gmail.com</a></li>
    <li><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/kauanmferreira" target="_blank">linkedin.com/in/kauanmferreira</a></li>
    <li><strong>Currículo Lattes:</strong> <a href="http://lattes.cnpq.br/5353494955523297" target="_blank">lattes.cnpq.br/5353494955523297</a></li>
</ul> -->

<h1>{ filteredByYear.length } Projects</h1>
<!-- <div class="projects">
    {#each projects as p}
        <Project data={p}/>
      <article>
        <h2>{p.title}</h2>
        <img src={p.image} alt="" />
        <p>
            {p.description}
        </p>
      </article>
    {/each}
</div> -->
<div class = "projects">
    {#each filteredByYear as p}
        <Project data = {p} />
   {/each}
</div>

<!-- Navigation menu: -->
    
