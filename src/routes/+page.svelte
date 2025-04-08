<svelte:head>
  <title>Homepage</title>
</svelte:head>

<script>
  import { onMount } from "svelte";
  let githubData = null;
  let loading = true;
  let error = null;
  onMount(async () => {
    try {
        const response = await fetch("https://api.github.com/users/kauanmaf");
        githubData = await response.json();
    } catch (err) {
        error = err;
    }
    loading = false;
});
</script>
<!-- <h1> (Heading 1) represents the main heading of a webpage or a section.-->
<h1> Kauan Mariani Ferreira</h1>

<!-- <p> (Paragraph) represents a paragraph of text.-->
<p> Olá, meu nome é Kauan e eu sou de Santa Catarina</p>



<!-- <img> (Image) tag is used to display images.-->
<img src="" alt="">
    <!-- Example:
        <img src="images/my_image.jpeg" alt="A description of the image">
    -->
        <img src="images/download.jpeg" alt="Shrek" height=400>

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p class="error">Something went wrong: {error.message}</p>
{:else}
    <section>
        <h2>My GitHub Stats</h2>
        <dl>
            <dt>Followers</dt>
            <dd>{githubData.followers}</dd>
            <dt>Following</dt>
            <dd>{githubData.following}</dd>
            <dt>Public Repositories</dt>
            <dd>{githubData.public_repos}</dd>
        </dl>
    </section>
{/if}

<style>
    dl{
    display: grid;
    grid-template-columns: auto;
  }
  dt{
    grid-row: 1;
    font-family: inherit;
    font-weight: bold;
    color: var(--border-gray);
    text-transform: uppercase;
  }
  dd{
    font-family: inherit;
    font-weight: bold;
  }
  section{
    border-width:0.15em;
  	border-style:solid;
	  border-color:var(--border-gray);
    padding-left: 1em;
    padding-right: 1em;
  }

</style>