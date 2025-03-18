<script>
    let {data} = $props();
</script>

<section>
    <h1>diary</h1>
    <p>a "diary" of sorts. I don't want to call it a blog since that doesn't feel right.</p>
    <h2>2025</h2>
    {#each data.summaries as { slug, date, summary}}
    <li>
        <a href = "/pages/diary/{slug}">
            {slug}
        </a> @ {date} :
        {summary}
    </li>
    {/each}
</section>
<section>
    <h1>archive</h1>
    <p>work in progress. anything that I've removed from this page will be stored here as to not delete it permamently.</p>
</section>