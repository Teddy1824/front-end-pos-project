<template>
<!-- <div id="app">s -->
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
    <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
      <div class="items">
    <MDBNavbarNav collapse="navbarNav">
      <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
      <MDBNavbarItem to="/products"> Products </MDBNavbarItem>
      <MDBNavbarItem to="/contact"> Contact </MDBNavbarItem>
      <!-- <MDBNavbarItem to="/signup"> Sign Up! </MDBNavbarItem> -->
      <MDBNavbarItem><MDBBtn color="success" rounded href="/signup" tag="a"> Sign Up! </MDBBtn></MDBNavbarItem>
      <MDBNavbarItem><MDBBtn color="info" rounded href="/login" tag="a"> Login </MDBBtn></MDBNavbarItem>
      <!-- <MDBNavbarItem > Login </MDBNavbarItem> -->
    </MDBNavbarNav>
    </div>
  </MDBNavbar>
<!-- </div> -->
</template>

<script>
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn
  } from 'mdb-vue-ui-kit';
export default {
   components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBBtn
    },
}
</script>

<style>

</style>