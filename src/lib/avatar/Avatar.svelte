<script lang="ts">
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
    }
    .avatar_image{
        border-radius: 8px;
        width: 32px;
    }
</style>