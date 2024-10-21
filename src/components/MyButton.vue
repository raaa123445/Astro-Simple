<template>
  <button @click="showAlert" class="btn">
    Click Me!
  </button>
</template>

<script>
export default {
  name: 'HelloButton',
  methods: {
    showAlert() {
      window.alert('Hello!'); // Use window.alert for clarity
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
