<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">B&K Electric</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup"><button type="button" class="btn btn-primary btn-rounded">Signup</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login"><button type="button" class="btn btn-success btn-rounded">Login</button></a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="/cart">
          <span class="badge badge-pill bg-danger">0</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

</template>

<script>

export default {
   components: {
      
    },
}
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