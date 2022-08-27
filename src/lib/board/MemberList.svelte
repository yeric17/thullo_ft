<script lang="ts">
    import Avatar from "$lib/avatar/Avatar.svelte";
import ButtonAdd from "$lib/ButtonAdd.svelte";
import type { Member } from "src/utils/types";

    export let members:Member[] = []
</script>


<section class="member-list">
    {#each members as {name, avatar_url}}
         <Avatar avatar_url={avatar_url}/>
    {/each}
    <ButtonAdd/>
</section>

<style>
    .member-list{
        display: flex;
    }
</style>
