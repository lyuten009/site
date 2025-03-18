<script>
    let {data} = $props();
</script>

<section>
    <h1>{data.post.slug}</h1>
    {data.post.summary}
    {@html data.post.content}
</section>