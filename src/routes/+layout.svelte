<script>
	let { children } = $props();
    import '/Users/Siobhan/Desktop/project/src/routes/style.css'
</script>
<div class = "decor">
    hosted on...
    <h1>NEKOWEB.ORG</h1>
    courtosey of <a href = "https://dimden.dev">dimden</a>
</div>
<center>
    <main>
        <!--<div class = "topbar">
            <span><a href = "/">home</a></span>
            <span><a href = "/">about</a> | <a href = "/">diary</a> | <a href = "/">gallery</a> | <a href = "/">other</a></span>
        </div>
        <div class = "topbar2">
            <span><a href = "/">home</a></span>
            <span><a href = "/">about</a> | <a href = "/">diary</a> | <a href = "/">gallery</a> | <a href = "/">other</a></span>
        </div>-->
        <header>HEADERHERE</header>
        <div class = "main">
            <aside>
                <!--<div class = "icon"></div>
                "status here"--->
                <!--<h2>nav</h2>
                <nav>
                    <a href = "/">home</a>
                </nav>-->
                <h2>changelog</h2>
                <div style = "flex-grow:1;border:1px dashed;padding:0.5rem">
                    I don't know how to format this. Anyways, what's currently visible is only a placeholder to test deploy2nekoweb! ^_^
                </div>
                <h2>huh</h2>
                <!--<iframe class = "nekolink" src="https://rice.nekoweb.org/nekolink.html" title = "nekolink"></iframe>-->
            </aside>
            <article>
                <!--<header>0_0</header>-->
            {@render children()}
            </article>
        </div>
    </main>
</center>