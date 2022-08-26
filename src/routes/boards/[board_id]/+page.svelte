


<script lang="ts">
    import Avatar from "$lib/avatar/Avatar.svelte";
import ButtonIcon from "$lib/ButtonIcon.svelte";

    import Checkbox from "$lib/Checkbox.svelte";
    
    export let data:any;

    let {board} = data;
</script>

<svelte:head>
    <title>Board | {board?.name}</title>
</svelte:head>
<main class="board">
    <header class="board_header">
        <div>
            <Checkbox>
                <span slot="icon">
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                </span>
                Private
            </Checkbox>
        </div>
        <div class="board_members">
            {#if board && board.members}
                {#each  board.members as member}
                    <Avatar avatar_url={member.avatar_url}/>
                {/each}
            {/if}
        </div>
        <ButtonIcon type="secondary">
            <span slot="label" >Show Menu</span>
        </ButtonIcon>
    </header>
    <div class="board_lists">
    </div>
</main>