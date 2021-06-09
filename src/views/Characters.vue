<template>
  <main>
    <div class="home">
      <h1>Characters</h1>
       <div class="characters-search">
      <form v-on:submit.prevent="findCharacters">
       <p>
       <label for="name">Pick a Character: 
            <select id="name" v-model="name">
              <option value="">Select Character</option>
              <option> Harry Potter</option>
              <option> Hermione Granger</option>
              <option> Ron Weasley</option>
              <option> Draco Malfoy</option>
              <option> Ginny Weasley</option>
              <option> Luna Lovegood</option>
              <option> Neville Longbottom</option>
              <option> Cedric Diggory</option>
              <option> Cho Chang</option>
              <option> Vincent Crabbe</option>
              <option> Gregory Goyle</option>
              <option> Minerva McGonagall</option>
              <option> Severus Snape</option>
              <option> Rubeus Hagrid</option>
              <option> Remus Lupin</option>
              <option> Horace Slughorn</option>
              <option> Dolores Umbridge</option>
              <option> Lord Voldemort</option>
              <option> Lucious Malfoy</option>
              <option> Bellatrix Lestrange</option>
              <option> Argus Filch</option>
              <option> Mrs Norris</option>

            </select>
          </label>
        </p> 

        <button @click="getData">Submit</button>
     
      </form>
    </div>
       <h2>{{ name }}</h2>
       <p>{{ species }}</p>
       <p>{{ gender }}</p>
       <p>{{ dateOfBirth }}</p>
       <p>{{ ancestry }}</p>
       <p>{{ eyeColour }}</p>
       <p>{{ hairColour }}</p>
       <p>{{ wand }}</p>
       <p>{{ patronus }}</p>
       <p>{{ actor }}</p>
       <img v-bind:src="image">
    </div>
  </main>
</template>


<script>


export default {


  name: "List",


  data() {


    return {


      characters: [],


      name: " ",


      species: " ",


      gender: " ",


      house: " ",


      dateOfBirth: " ",


      ancestry: " ",


      eyeColour: " ",


      hairColour: " ",


      wand: " ",


      patronus: " ",


      actor: " ",


      image: " ",


    };


  },


  methods: {


    getData() {


      fetch("https://hp-api.herokuapp.com/api/characters")


        .then((response) => {


          console.log(response);


          if (response.ok) {


            return response.json();


          } else {


            throw new Error("Request failed with");


          }


        })


        .then((json) => {


          console.log(json);


          this.characters = json;


          json.forEach((el, index) => {


            console.log(this.name);

            if (el.name === this.name) {
              this.name = el.name
              this.species = el.species
              this.gender = el.gender
              this.house = el.house
              this.dateOfBirth = el.dateOfBirth
              this.ancestry = el.ancestry
              this.eyeCoulour = el.eyeColour
              this.hairColour = el.hairColour
              this.wand = el.wand
              this.patronus = el.patronus
              this.actor = el.actor
              this.image = el.image
            }

          });


        })


        .catch((err) => alert("ERROR", err));


    },

  },

};

</script>