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
       {{ list }}
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: '',
      name: '',
      species: '',
      gender: '',
      house: '',
      dateOfBirth: '',
      ancestry: '',
      eyeColour: '',
      hairColour: '',
      wand: '',
      patronus: '',
      actor: '',
      image: '',
    };
  },
  methods: {
    getData() {
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          this.list = json;
        });
    },
  },
};

</script>