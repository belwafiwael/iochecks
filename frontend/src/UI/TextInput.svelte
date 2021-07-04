<script>
    export let label;
    export let placeholder;
    export let type =  "text";
    export let id;
    export let rows = null;
    export let value
</script>

<div class="mb-3">
    <label class="form-label" for={id}>{label}</label>
    {#if type!=='textarea'}
        <input class="form-control"  {type} {id} {value} {placeholder} on:input/>  
    {:else}
        <textarea  {rows} {id} bind:value ></textarea>
    {/if}
   
</div>




