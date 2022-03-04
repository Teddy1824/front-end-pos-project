<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
  <div class="container-fluid">
    <a class="navbar-brand">B&K Electric</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      v-bind="toggleNavbar"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" v-bind:class="{ in: show }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Products' }">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Signup' }"><button type="button" class="btn btn-primary btn-rounded">Signup</button></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Login' }"><button type="button" class="btn btn-success btn-rounded">Login</button></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Logout'}"><button type="button" class="btn btn-danger btn-rounded" @click="setLogin"> {{loggedIn !== 'null' ? 'Logout' : 'Login'}} </button></router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" :to="{ name: 'Cart' }">
          <span class="badge badge-pill bg-danger">0</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Profile'}">Profile</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<!-- <router-view/> -->
</template>

<script>

export default {
    data() {
    return {
      show: true
    }
  },
    methods:{
      toggleNavbar() {
      this.show = !this.show;
      },
    setLogin(){
     localStorage.removeItem('auth-token')
     this.$router.push('/login');
   }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  }
};


</script>

<style>
 div#navbarNav {
    justify-content: flex-end;
}

.btn {
    margin: 0;
}

.bg-light {
  background-color: rgba(251, 251, 251, var(--mdb-bg-opacity));
  --mdb-bg-opacity: 0.1;
}
</style>
