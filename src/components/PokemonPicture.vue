<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="pokemon" class="hidden-pokemon" />
    <img class="fade-in" :src="imgSrc" alt="pokemon" v-if="showPokemon" />
  </div>
</template>

<script>
export default {
  name: "pokemon-page",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.hidden-pokemon {
  filter: brightness(0);
}

.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>