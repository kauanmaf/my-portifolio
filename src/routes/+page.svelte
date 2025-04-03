<svelte:head>
  <title>Homepage</title>
</svelte:head>
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

        {#await fetch("https://api.github.com/users/kauanmaf")}
  <p>Loading...</p>
{:then response}
  {#await response.json()}
    <p>Decoding...</p>
  {:then data} 
    <section>
      <h2>My Github Stats</h2>
      <dl>
        <dt>Followers</dt>
        <dd>{data.followers}</dd>
        <dt>Following</dt>
        <dd>{data.following}</dd>
        <dt>Public Repos</dt>
        <dd>{data.public_repos}</dd>
      </dl>
    </section>
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
{/await}

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