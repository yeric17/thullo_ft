<script lang="ts">
    
    import type { HSLColor } from "src/utils/types";


    export let color:HSLColor = {h: "28", l: "87%", s: "62%"} as HSLColor
    
</script>


<span class="label-task" style="--hue: {color.h};--light: {color.l};--saturate: {color.s};">
    <slot></slot>
</span>

<style>
    .label-task{
        color: hsl(var(--hue),var(--light), var(--saturate));
        background-color: hsla(var(--hue),var(--light), var(--saturate),.2);
        border-radius: 2rem;
        padding-inline: .75rem;
    }
</style>