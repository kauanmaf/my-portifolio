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
    
