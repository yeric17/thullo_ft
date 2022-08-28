<script lang="ts">
import Header from "$lib/header/Header.svelte";
import "../app.css"
import "../styles/forms.css"
</script>
<main class="main">
    <Header></Header>
    <slot></slot>
</main>

<style>
    .main{
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;
    }
</style>