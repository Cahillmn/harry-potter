<template>
<main id="app" class="main">

    <h1 class="shop">The Harry Potter Shop</h1>

    <div class= "discount">
      <img v-bind:src="chosenImage" alt="Random Image">
      <h3>{{ chosenName }}</h3>
      <p>{{ chosenDiscount }}</p>
      <button @click="picker">See This Weeks Deal!</button>
    </div>

    <h2>Harry Potter Trunk Sets</h2>
    
    <section class="container">
      <article v-for="trunk in trunks">
        <img v-bind:src="trunk.src" v-bind:alt="trunk.name" class="bundle">
        <h3>{{ trunk.name }}</h3>
        <p>{{ trunk.price }}</p>
        <p v-if="trunk.quantity > 10">In stock</p>
        <p v-else-if="trunk.quantity <= 10 && trunk.quantity > 0">Almost gone</p>
        <p v-else>Out of Stock</p>
        <button v-if="trunk.quantity > 0">Add to Cart</button>
      </article>
    </section>
  </main>
</template>