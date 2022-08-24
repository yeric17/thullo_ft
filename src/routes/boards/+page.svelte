
<script lang="ts">
    import BoardCard from "$lib/board/BoardCard.svelte";
import ButtonIcon from "$lib/ButtonIcon.svelte";
    import { boards } from "$lib/stores/boards";
    
</script>


<section class="boards">
    <header class="boards_header">
        <h2>All Boards</h2>
        <div class="button_inner">
            <ButtonIcon color="#FFFFFF">
                <span slot="label">Add</span>
                <span slot="icon">
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                </span>
            </ButtonIcon>
        </div>
    </header>
    <main class="boards_content">
        <div class="boards_inner">
            {#each $boards as board}
                <BoardCard
                    board={board}
                />
            {/each}
        </div>
    </main>
</section>

<style>
    .boards{
        padding-top: 4rem;
    }
    .boards_inner {
        display: grid;
        width: 100%;
        max-width: 1040px;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(auto-fill,minmax(228px,1fr));
        gap: 42px;
    }
    .boards_header{
        display: flex;
        justify-content: space-between;
        max-width: 1040px;
        margin-left: auto;
        margin-right: auto;
        padding-block: 1rem;
    }
</style>