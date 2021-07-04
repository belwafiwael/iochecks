<script>
    export let type = "button";
    export let href = null;
    export let mode = null;
    export let color = null;
    export let disabled =  false
</script>

{#if href}
    <a {href}><slot/></a>
{:else}
    <button class="{mode} {color}" {type} on:click {disabled}><slot/></button>
{/if}