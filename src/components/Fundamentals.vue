<template>
	<div id="card">
		<input v-model="message" />

              <h3 v-if="completed">Task Done</h3>
              <h3 v-else>Failed</h3>

              <button @click="setStatus">Toggle Action</button>

              <!-- extract v model -->
		<!-- <input :value="message" @input="message=$event.target.value" /> -->

              <!-- render message -->
		<h1>{{ message }}</h1>

              <!-- render count -->
		<h2>Count : {{ count }}</h2>

              <!-- button action -->
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: "Hello World",
                            completed: true,
				count: 12			
			}
		},
		methods: {
			increment() {
				this.count += 5
			},
			decrement() {
				this.count -= 5
			},
                     setStatus() {
                            this.completed = !this.completed
                     }
		}
	}
</script>

<style>
       #card {
              width: 70%;
              margin: auto;
              text-align: center;
       }
</style>