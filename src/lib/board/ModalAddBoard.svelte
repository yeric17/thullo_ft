<script lang="ts">
    import ButtonIcon from "$lib/ButtonIcon.svelte";
    import Checkbox from "$lib/Checkbox.svelte";
    import ButtonUpload from "$lib/forms/ButtonUpload.svelte";
    import ModalWindow from "$lib/ModalWindow.svelte";

    let currentImage:string = "https://picsum.photos/seed/picsum/200/100"

    export let showModal:boolean = false;

    function toggleModal(){
        showModal = !showModal;
    }

</script>

{#if showModal}
<ModalWindow>
    <article class="add-board">
        <div class="add-board_header">
            <button class="btn" on:click={toggleModal}>X</button>
            <img src="{currentImage}" alt="">
        </div>
        <form on:submit={()=>console.log("submit")}>
            
            <input class="input-field" type="text" name="boardTitle" id="boardTitle" placeholder="Add board title">
            <div class="add-board_actions">
                <ButtonUpload>
                    Cover
                </ButtonUpload>
                <Checkbox name="private" id="privateInput">
                    <span slot="icon">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                        </svg>
                    </span>    
                    Private
                </Checkbox>
            </div>
            <footer class="add-board_footer">
                <div class="add-board_button">
                    <ButtonIcon color="#828282" type="secondary" on:click={toggleModal}>
                        <span slot="label">Cancel</span>
                    </ButtonIcon>
                </div>
                <div class="add-board_button">
                    <ButtonIcon color="#FFFFFF">
                        <span slot="icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                            </svg>
                        </span>
                        <span slot="label">Create</span>
                    </ButtonIcon>
                </div>
            </footer>
        </form>
    </article>
</ModalWindow>
{/if}

<style>
    .add-board{
        background-color: #ffffff;
        width: 307px;
        padding: 1.5rem;
        border-radius: 8px;
    }
    .add-board_header{
        position: relative;
    }
    .add-board_header button{
        position: absolute;
        right: 0;
        top: 0;
        height: 2rem;
        width: 2rem;
        border-radius: 8px;
        background-color: var(--color-accent);
        color: #ffffff;
        outline: none;
        border: none;
        transform: translate(50%, -50%);
    }
    .add-board_header img{
        width: 100%;
        height: 78px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: .5rem;

    }
    .add-board_actions{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
        margin-bottom: 1.5rem;
    }
    .add-board_footer{       
        display: flex;
        justify-content: flex-end;
        gap: .5rem;
    }
    .add-board_button{
        min-width: 76px;
    }
    .input-field{
        margin-bottom: 1rem;
    }
    svg{
        width: 1rem;
        height: 1rem;
    }
</style>