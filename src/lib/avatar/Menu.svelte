
<script lang="ts">
    let showMenu:boolean = true;
    function toggleMenu(){
        showMenu = !showMenu;
    }    
</script>


<nav class="profile-menu">
    <button class="btn btn-icon" on:click={toggleMenu} class:active={showMenu}>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
        </svg>
    </button>
    {#if showMenu}
        <article class="profile-menu_content shadow-2">
            <ul>
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/profile">Boards</a></li>
                <li><button href="/profile"> Logout</button></li>
            </ul>
        </article>
    {/if}
</nav>


<style>
    .profile-menu{
        position: relative;
        z-index: 5;
        background-color: #FFFFFF;
        padding-block: 1rem;
    }
    .profile-menu_content{
        position: absolute;
        right: 0;
        top: 100%;
        min-width: 188px;
        border-radius: 12px;
        padding: 1rem;
        font-family: 'Noto Sans';
        font-weight: 500;
        color: #4F4F4F;
    }
    a{
        display: block;
        border-radius: 8px;
        padding: .75rem;
        margin-bottom: 4px;
    }
    .btn-icon svg{
        transition: all .3s;
    }
    .btn-icon.active svg{
        transform: rotate(180deg);
    }
</style>