<template>
  <div class="flex items-center justify-center">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border pb-12">
      <h1 class="text-xl font-bold text-center">Créer une mission</h1>
      <hr class="border-t-2 border-black m-4 mx-16" />

      <form action="" method="post" class="flex flex-col mb-4 w-full">

        <label class="text-center text-xl mt-4 " for="nameMission">Nom de la mission</label>
        <input 
          v-model="nameMission" 
          class="border bg-[#3B82F6]/16 rounded p-2 mt-2 w-64 mx-auto" 
          type="text" 
          id="nameMission" 
          name="nameMission" 
          required
          placeholder="ex: Nettoyage banque CIC "
        >

      </form>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>