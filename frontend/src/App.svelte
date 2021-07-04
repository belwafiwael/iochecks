<script>
	import UserEdit from "./components/UserEdit.svelte";
	import Button from "./UI/Button.svelte"
	let editMode = true
	let newUser
	const saveUser = (event) => {
		editMode = false
		newUser = event.detail.newUser
	}
</script>

<main>
	<div class="container">
		<div class="row">
			<div class="col">
				{#if editMode}
					<h2>Register</h2>
					<UserEdit on:save-user="{saveUser}"/>
				{:else}
				<h2>User infos: </h2>
				<div class="card" style="width: 18rem;">
					<div class="card-body">
					  <h5 class="card-title">{newUser.username} {newUser.lastname}</h5>
					  <h6 class="card-subtitle mb-2 text-muted">{newUser.email}</h6>
					  <p class="card-text">{newUser.dtbirth}</p>
					  <p class="card-text">{newUser.password}</p>
					  <Button href="#" class="card-link">Next</Button>
					</div>
				  </div>
				{/if}
			</div>
		</div>
	</div>
</main>

