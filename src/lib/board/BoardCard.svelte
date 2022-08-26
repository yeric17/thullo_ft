<script lang="ts">
    import Avatar from "$lib/avatar/Avatar.svelte";
    import type { Board } from "src/utils/types";


    export let board:Board;

</script>

<article class="board-card shadow-2">
    <div class="board-card_banner">
        <a href="/boards/{board.id}"><img class="banner_image" src="{board.image}" alt="banner_image"></a>
    </div>
    <h3 class="board-card_title">{board.name}</h3>
    <footer class="board-card_members">
        {#if board.members.length > 3}
            {#each Array(3) as _, index}
                <Avatar avatar_url={board.members[index].avatar_url}/>
            {/each}
            <span class="board-card_members_info">+ {board.members.length - 3} others</span>
        {:else}
            {#each board.members as member}
                <Avatar avatar_url={member.avatar_url}/>
            {/each}
        {/if}
    </footer>
</article>

<style>
    .board-card{
        display: grid;
        grid-template-rows: 154px auto auto;
        border-radius: 12px;
        background-color: #ffffff;
    }
    .board-card_banner{
        padding: .75rem;
    }
    .banner_image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .75rem;
    }
    .board-card_title{
        padding: .75rem;
        padding-top: 0;
    }
    .board-card_members{
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        padding: .75rem;
        padding-top: 0;
    }
    .board-card_members_info{
        display: inline-flex;
        align-items: center;
        font-weight: 500;
        font-size: var(--fs-sm);
        color: #BDBDBD;
        font-family: 'Noto Sans';
    }
</style>