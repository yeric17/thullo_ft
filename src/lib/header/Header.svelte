<script lang="ts">
import Avatar from "$lib/avatar/Avatar.svelte";
import Logo from "$lib/header/logo.svelte";

</script>
<header class="shadow-1">
	<div class="header_inner">
		<span class="header_logo">
			<Logo/>
		</span>
		<Avatar name="Carlos Yeric Fonseca Rios" avatar_url="https://i.pravatar.cc/150?img=5"/>
	</div>
</header>

<style>

	.header_inner{
		display: flex;
		justify-content: space-between;
		padding-inline: 1.5rem;
		position: relative;
		z-index: 4;
	}
</style>
