<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const {quizQuestionLength, numberofCorrectAswers} = defineProps([
  'quizQuestionLength', 'numberofCorrectAswers'
])
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ numberofCorrectAswers }} / {{ quizQuestionLength }}</h1>
    <RouterLink to="/" class="back-btn">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results{
  text-align: center;
  padding: 100px 0;
}
p{
  font-size: 25px;
}
h1{
  font-size: 80px;
}
.back-btn{
  text-decoration: none;
  font-size: 20px;
  padding: 10px 12px;
  background: bisque;
  color: black;
  border-radius: 6px;
}
</style>