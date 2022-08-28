


<script lang="ts">
    import BoardList from "$lib/board/BoardList.svelte";
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
            <MemberList members={board.members} limit={4}/>
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
    <section class="board_columns">
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
        <BoardList></BoardList>
    </section>
</main>

<style>
    .board{
        padding-inline: 1.5rem;
        padding-bottom: 1.5rem;
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100%;
    }
    .board_header{
        display: grid;
        grid-template-columns: auto repeat(2, 1fr);
        margin-bottom: 1rem;
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
    .board_columns{
        display: grid;
        grid-template-columns: repeat(auto-fill,243px);
        
        gap: 2rem;
        background-color: #F8F9FD;
        border-radius: 24px;
        padding: 1.5rem;
    }
</style>