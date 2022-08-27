
<script lang="ts">
import { page } from "$app/stores";
import ButtonIcon from "$lib/ButtonIcon.svelte";
import LogoutIcon from "$lib/icons/LogoutIcon.svelte";

    let showMenu:boolean = false;
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
                
                <li><a on:click={toggleMenu} href="/profile" class:active={$page.url.pathname === '/profile'}>My Profile</a></li>
                <li><a on:click={toggleMenu} href="/boards" class:active={$page.url.pathname === '/boards'}>Boards</a></li>
                <li>
                    <ButtonIcon color="#EB5757" theme="secondary">
                        <span slot="icon"><LogoutIcon/></span>
                        <span slot="label">Logout</span>
                    </ButtonIcon>
                </li>
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
        background-color: #FFFFFF;
    }
    a{
        display: flex;
        border-radius: 8px;
        align-items: center;
        height: 40px;
        padding: .75rem;
        margin-bottom: 4px;
    }
    li a.active{
        background-color: #F2F2F2;
    }
    li:last-child{
        border-top: 1px solid #F2F2F2;
    }
    .btn-icon svg{
        transition: all .3s;
    }
    .btn-icon.active svg{
        transform: rotate(180deg);
    }
</style>