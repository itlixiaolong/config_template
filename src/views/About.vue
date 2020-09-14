<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ carTest }}
    <button
      a="11"
      @click="handleAddByMutations"
    >
      increase by mutations
    </button>
    <button @click="handleAddByActions">
      increase by actions
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'About',
  computed: mapState('carMudule', ['carTest']),
  methods: {
    ...mapMutations({
      AddByMutations: 'carMudule/increase'
    }),
    ...mapActions({
      AddByActions: 'carMudule/increaseByActions'
    }),
    handleAddByMutations () {
      this.AddByMutations(1)
    },
    handleAddByActions () {
      this.AddByActions(5)
    }
  }
}
</script>

<style></style>
