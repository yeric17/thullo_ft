<script lang="ts">
    import Avatar from "$lib/avatar/Avatar.svelte";
    import ButtonAdd from "$lib/ButtonAdd.svelte";
    import type { Member } from "src/utils/types";

    export let members:Member[] = []
    export let limit:number = 10
</script>


<section class="member-list">
    {#if members.length > limit}
        {#each Array(limit) as _, index}
            <Avatar avatar_url={members[index].avatar_url}/>
        {/each}
        <span class="member-list_others ft-sm">+ {members.length - limit}</span>
    {:else}
        {#each members as {name, avatar_url}}
            <Avatar avatar_url={avatar_url}/>
        {/each}
    {/if}
    <ButtonAdd/>
</section>

<style>
    .member-list{
        display: flex;
    }
    .member-list_others{
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        color: #bdbdbd;
    }
</style>
