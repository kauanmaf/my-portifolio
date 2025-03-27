
<script>
    import { base } from "$app/paths";
    let pages = [
    {url: "/", title : "Home"},
    {url: "/projects", title : "Projects"},
    {url: "/contact", title : "Contact"},
    {url: "https://github.com/kauanmaf", title : "GitHub"}
];
</script>

<nav>
    {#each pages as p}
        <a href= { p.url.startsWith("http")? p.url: `${base}${p.url}`}>{p.title}</a>
    {/each}
</nav>

  

<slot />