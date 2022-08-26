<script lang="ts">
import Avatar from "$lib/avatar/Avatar.svelte";
import Menu from "$lib/avatar/Menu.svelte";
import Logo from "$lib/header/LogoThullo.svelte";

</script>
<header class="shadow-1">
	<div class="header_inner">
		<span class="header_logo">
			<Logo/>
		</span>
		<Avatar name="Carlos Yeric Fonseca Rios" avatar_url="https://i.pravatar.cc/150?img=5"/>
		<Menu></Menu>
	</div>
</header>

<style>

	.header_inner{
		display: grid;
		grid-template-columns: auto 1fr auto;
		background-color: #ffffff;
		padding-inline: 1.5rem;
		align-items: center;
		gap: 14px;
		position: relative;
		z-index: 10;
	}
</style>
