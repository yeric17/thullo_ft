<script lang="ts">
    export let color:string = "#828282"
</script>


<button class="btn" style="--color: {color}">
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
</style>