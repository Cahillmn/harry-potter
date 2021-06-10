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
      <article v-for="trunk in trunks"
      :key="trunk.name">
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

  <script type="text/javascript">
    export default {
      name: "counter app",
      data() {
        return {
          trunks: [{

            src: require("../assets/Trunks_bundle_large.png"),
              name: "Hogwarts School Trunk Combo Bundle",
              discount: "25% Off!",
              price: "$100",
              quantity:20
            }, 
            {
              src: require("../assets/harrypottertrunk.png"),
              name: "Harry Potter Gift Trunk",
              discount: "25% Off!",
              price: "$225",
              quantity:0
            },
            {
              src: require("../assets/gryffindor-trunk.png"),
              name: "Gryffindor Gift Trunk",
              discount: "25% Off!",
              price: "$200",
              quantity:10 
            },  
            {
              src: require("../assets/slytherin-trunk.png"),
              name: "Slytherin Gift Trunk",
              discount: "25% Off!",
              price: "$200",
              quantity:8
            },
            {
              src: require("../assets/hufflepuff-trunk.png"),
              name: "Hufflepuff Gift Trunk",
              discount: "25% Off!",
              price: "$200",
              quantity:15
            },
            {
              src: require("../assets/ravenclaw-trunk.png"),
              name: "Ravenclaw Gift Trunk",
              discount: "25% Off!",
              price: "$200",
              quantity:14
            },
            
          ],

          chosenImage: require("../assets/special-deal.png"),
          chosenName: '',
          chosenDiscount: '',
          src: '',
          name: '',
          discount: '',
          price: '',
        }
      },
      methods: {
        picker() {
          var chosenNumber = Math.floor(Math.random() * this.trunks.length);
          this.chosenImage = this.trunks[chosenNumber].src;
          this.chosenName = this.trunks[chosenNumber].name;
          this.chosenDiscount = this.trunks[chosenNumber].discount;

        }
      }
    }
    
  </script>

<style lang="scss">

main {
    min-height: 400px;

    article {
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 75%;
            padding-top: 3rem;
        }
    }

    button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding: .5rem 1rem;
        background-color: gold;
        color: rgb(121, 80, 27);
        font-weight: bold; 
        width: 30%;
    }

    h2 {
        color: brown;
        text-align: center;
        padding-top: 5rem;

    }

    .discount {

        background-color: black;
        padding-bottom: 3rem;
        width: 25%;
        margin: 0 auto;

        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            padding-top: 3rem;
        }

        button {
            margin-top: 0rem;
            width: 50%;
        }
    }

    h3 {
        color: rgb(238, 118, 118);
        padding-top: 1rem;
        text-align: center;

    }

    p {
        color: white;
        padding-top: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }

}

.shop {
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    color: brown;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    margin-top: 2rem;

    h3 {
        color:brown;
    }

    p{
        color:black;
        margin-bottom: 0rem;
    }


}
</style>
