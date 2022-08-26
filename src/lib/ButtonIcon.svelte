<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispacher = createEventDispatcher()


    function onClick(event:Event){
        dispacher("click",event)
    }
    export let color:string = "#828282"
    export let type:string = "primary"
</script>


<button class="btn" style="--color: {color}" class:primary={type==='primary'} on:click={onClick}>
    <slot name="icon"></slot>
    <slot name="label"></slot>
</button>

<style>
    .btn{
        display: flex;
        align-items: center;
        gap: .7525rem;
        color: var(--color);
        width: 100%;
        padding-block: 7px;
        padding-inline: .75rem;
        border-radius: 8px;
        
    }
    .btn:hover{
        background-color: #F2F2F2;
    }
    .btn.primary {
        background-color: var(--color-accent);
    }
</style>