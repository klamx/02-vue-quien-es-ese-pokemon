<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemonOptions="pokemonArr"
      @selection="checkAnswer($event)"
    />
    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "pokemon-page",
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      click: true,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      console.log(selectedId, this.pokemon.id);
      if (selectedId === this.pokemon.id && this.click) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else if (selectedId !== this.pokemon.id && this.click) {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
      this.click = false;
    },
    newGame() {
      this.pokemonArr = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.pokemon = null;
      this.showAnswer = false;
      this.click = true;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>