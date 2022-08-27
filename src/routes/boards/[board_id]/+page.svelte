


<script lang="ts">
    import Avatar from "$lib/avatar/Avatar.svelte";
import MemberList from "$lib/board/MemberList.svelte";
    import ButtonIcon from "$lib/ButtonIcon.svelte";

    import Checkbox from "$lib/Checkbox.svelte";
import LockIcon from "$lib/icons/LockIcon.svelte";
import MenuDotIcon from "$lib/icons/MenuDotIcon.svelte";
    
    export let data:any;

    let {board} = data;
</script>

<svelte:head>
    <title>Board | {board?.name}</title>
</svelte:head>
<main class="board">
    <header class="board_header">
        <div class="board_checkbox">
            <Checkbox>
                <span slot="icon">
                    <LockIcon/>
                </span>
                Private
            </Checkbox>
        </div>
        <div class="board_members">
            <MemberList members={board.members}/>
        </div>
        <div class="board_button">
            <ButtonIcon theme="tertiary">
                <span slot="icon">
                    <MenuDotIcon/>
                </span>
                <span slot="label" >Show Menu</span>
            </ButtonIcon>
        </div>
    </header>
    <div class="board_lists">
    </div>
</main>

<style>
    .board_header{
        display: grid;
        grid-template-columns: auto repeat(2, 1fr);
        padding-inline: 1rem;
        gap: 1rem;
    }
    .board_members{
        display: flex;
    }
    .board_checkbox{
        width: 98px;
    }
    .board_button{
        justify-self: end;
    }
</style>