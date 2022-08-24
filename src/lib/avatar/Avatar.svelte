<script lang="ts">
import Menu from "./Menu.svelte";

    export let avatar_url:string = "";
    export let name:string = "";
</script>


<span class="avatar">
    <img  class="avatar_image" src="{avatar_url}" alt="avatar">
    <span class="avatar_name">{name}</span>
</span>

<style>
    .avatar{
        display: flex;
        align-items: center;
        gap: 11px;
        justify-self: end;
    }
    .avatar_image{
        border-radius: 8px;
        width: 32px;
    }
    .avatar_name{
        font-family: 'Noto Sans';
        font-weight: 700;
        font-size: var(--fs-sm);
    }
</style>