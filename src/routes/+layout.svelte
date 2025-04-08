
<!-- Java script -->
<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";

    let pages = [
    {url: "/", title : "Home"},
    {url: "/projects", title : "Projects"},
    {url: "/resume", title : "Resume"},
    {url: "/meta", title : "Meta"},
    {url: "/contact", title : "Contact"},
    {url: "https://github.com/kauanmaf", title : "GitHub"}
];

let localStorage = globalThis.localStorage ?? {};

let colorScheme = localStorage.colorScheme ?? "light";

let root = globalThis?.document?.documentElement;
$: root?.style.setProperty("color-scheme", colorScheme);
$: localStorage.colorScheme = colorScheme;

let profileData = fetch("https://api.github.com/users/kauanmaf");


</script>

<nav>
    {#each pages as p}
    <a
        href={p.url.startsWith("http") ? p.url: `${base}${p.url}`}
        class:current={$page.route.id === p.url}
        target={p.url.startsWith("http") ? "_blank" : undefined}
    >
        {p.title}
    </a>
    {/each}
</nav>

<label class="color-scheme">
    Theme:

    <select bind:value={ colorScheme }>

        <option value="light dark"> Automatic </option>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
    </select>
</label>



<!-- CSS -->
<style>
    nav{
	display: flex;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: var(--grey);
}

nav a{
	flex: 1;
	text-decoration: none;
	color: inherit;
	text-align : center;
	padding: 0.5cm;
}

nav .current{
	border-bottom-width: 0.4em;
	border-bottom-style: solid;
	border-bottom-color: var(--grey);
	padding: -0.5em;
}
a:hover{
	border-bottom-width: 0.4em;
	border-bottom-style: solid;
	border-bottom-color: var(--color-accent);
	padding-bottom: -0.1em;
	background-color: var(--color-accent-bg);

}

/* <label class="color-scheme">
    Theme:
    <select>
        <option value="light dark"> Automatic </option>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
    </select>
</label> */

</style>

<slot />