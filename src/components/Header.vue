<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">MEVN Stack Example</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/Create">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/view">View Students</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/datatable">jQuery Data Table</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3" to="/quiz">Play Quiz</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
        data() {
            return {
            }
        }
    }
</script>

<style>

</style>
