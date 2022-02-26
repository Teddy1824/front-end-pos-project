<template>
<!-- <div class="container"> -->
<h1> Welcome to our store where everything is electric! ⚡</h1>
  <MDBCarousel
    v-model="carousel6"
    :items="items6"
    :indicators="false"
    fade
  />
<!-- </div> -->
<br />
<div id="shadow">
<div class="container .shadow-6">
<h2> What are we all about?  </h2>
<p class="display-6"> We all about bringing the best electronic devices and appliances at affordabled prices </p>

<MDBBtn color="primary" rounded>Primary</MDBBtn>
</div>
</div>
</template>
 
  <script>
  import { MDBBtn } from "mdb-vue-ui-kit";
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  export default {
       name: 'Home',
    components: {
      MDBCarousel,
      MDBBtn
    },
    setup() {
      const items6 = [
        {
          src: "https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          alt: "...",
          caption: "..."
        },
        {
          src: "https://images.unsplash.com/photo-1616801060191-6085bad82f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          alt: "...",
          caption: "..."
        },
        {
          src: "https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2018/02/06033645/cell-phones.jpg",
          alt: "...",
          caption: "..."
        }
      ];
      const carousel6 = ref(0);
      return {
        items6,
        carousel6
      };
    }
  };
</script>

<style>
 .carousel-caption {
   position: absolute;
   right: 15%;
   bottom: 1.25rem;
   left: 15%;
   padding-top: 19.25rem;
   padding-bottom: 1.25rem;
   color: #fff;
   text-align: center
 }

 #shadow { 
   border-style: groove;
   /* width: 1.5rem; */
 }
</style>