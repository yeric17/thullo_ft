<script lang="ts">
    export let id:string = "myCheckbox"
    export let name:string = ""
    export let value:boolean = false
</script>

<label for={id} class="btn checkbox-icon" class:active={value}>
    <slot name="icon"></slot>
    <slot></slot>
    <input type="checkbox" name={name} id={id} bind:checked={value}>
</label>

<style>
    .checkbox-icon{
        height: 32px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-content: center;
        justify-items: start;
        gap: .5rem;
        padding-inline: 1rem;
        background-color: #f2f2f2;
        font-size: 12px;
        color: #828282;
        width: 100%;
        border-radius: 8px;
        
    }
    .checkbox-icon input{
        display: none;
    }

    .checkbox-icon.active{
        background-color: var(--color-accent);
        color:#fafafa;
    }



</style>