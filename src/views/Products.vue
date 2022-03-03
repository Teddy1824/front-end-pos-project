<template>
<form id="app-cover">
  <div id="select-box">
    <input type="checkbox" id="options-view-button">
    <div id="select-button" class="brd">
      <div id="selected-value">
        <span>Select a platform</span>
      </div>
      <div id="chevrons">
        <i class="fas fa-chevron-up"></i>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div id="options">
      <div class="option">
        <input class="s-c top" type="radio" name="platform" value="dribbble">
        <input class="s-c bottom" type="radio" name="platform" value="dribbble">
        <i class="fab fa-dribbble"></i>
        <span class="label">Dribbble</span>
        <span class="opt-val">Dribbble</span>
      </div>
      <div class="option">
        <input class="s-c top" type="radio" name="platform" value="behance">
        <input class="s-c bottom" type="radio" name="platform" value="behance">
        <i class="fab fa-behance"></i>
        <span class="label">Behance</span>
        <span class="opt-val">Behance</span>
      </div>
      <div id="option-bg"></div>
    </div>
  </div>
</form>
<br />
  <div class="container d-flex justify-content-center mt-50 mb-50">
      <div class="row">
        <div class="col-sm-4 mt-2" v-for="product of products" :key="product.id">
            <div class="card" v-if="products">
                <div class="card-body">
                    <div class="card-img-actions"> 
                        <img :src="product.img" class="card-img img-fluid" width="96" height="350" alt="">
                    </div>
                
                <div class="card-body bg-light text-center">
                    <div class="mb-2">
                        <h4 class="font-weight-semibold mb-2">{{ product.title }} </h4> <a href="#" class="text-muted" data-abc="true">{{ product.category }}</a>
                    </div>
                    <p>{{ product.features }}</p>
                    <h3 class="mb-0 font-weight-semibold">{{ product.price }}</h3>
                    <!-- <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i></div> -->
                    <!-- <div class="text-muted mb-3">34 reviews</div> -->
                     <a href="/cart"><button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          products: null
      }
  },
  mounted() {
     fetch('https://pos-backend-pos.herokuapp.com/products', {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('jwt')}`
       }
     })

  .then(res => res.json())
  .then(json => {
      console.log(json);
  this.products = json;
  })
  .catch(err => console.log(err));
  },
}
</script>

<style>
* {
  user-select: none;
}

*:focus {
  outline: none;
}

html,
body {
  height: 100%;
  min-height: 100%;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 100px;
  margin: 0;
  background-color: #ebf3f3;
}

.brd {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

#info {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  color: #2d3667;
  font-size: 16px;
  text-align: center;
  padding: 14px;
  background-color: #f3f9f9;
}

#app-cover {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 300px;
  height: 42px;
  margin: 100px auto 0 auto;
  z-index: 1;
}

#select-button {
  position: relative;
  height: 16px;
  padding: 12px 14px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

#options-view-button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

#selected-value {
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
}

.option i {
  width: 16px;
  height: 16px;
}

.option,
.label {
  color: #2d3667;
  font-size: 16px;
}

#chevrons {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 12px;
  padding: 9px 14px;
}

#chevrons i {
  display: block;
  height: 50%;
  color: #d1dede;
  font-size: 12px;
  text-align: right;
}

#options-view-button:checked + #select-button #chevrons i {
  color: #2d3667;
}

.options {
  position: absolute;
  left: 0;
  width: 250px;
}

#options {
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
  width: 298px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
}

#options-view-button:checked ~ #options {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

.option {
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
}

.option i {
  position: absolute;
  left: 14px;
  padding: 0;
  display: none;
}

#options-view-button:checked ~ #options .option i {
  display: block;
  padding: 12px 0;
}

.label {
  display: none;
  padding: 0;
  margin-left: 27px;
}

#options-view-button:checked ~ #options .label {
  display: block;
  padding: 12px 14px;
}

.s-c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
}

.s-c.top {
  top: 0;
}

.s-c.bottom {
  bottom: 0;
}

input[type="radio"] {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.s-c:hover ~ i {
  color: #fff;
  opacity: 0;
}

.s-c:hover {
  height: 100%;
  z-index: 1;
}

.s-c.bottom:hover + i {
  bottom: -25px;
  animation: moveup 0.3s ease 0.1s forwards;
}

.s-c.top:hover ~ i {
  top: -25px;
  animation: movedown 0.3s ease 0.1s forwards;
}

@keyframes moveup {
  0% {
    bottom: -25px;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes movedown {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.label {
  transition: 0.3s ease all;
}

.opt-val {
  position: absolute;
  left: 14px;
  width: 217px;
  height: 21px;
  opacity: 0;
  background-color: #fff;
  transform: scale(0);
}

.option input[type="radio"]:checked ~ .opt-val {
  opacity: 1;
  transform: scale(1);
}

.option input[type="radio"]:checked ~ i {
  top: 0;
  bottom: auto;
  opacity: 1;
  animation: unset;
}

.option input[type="radio"]:checked ~ i,
.option input[type="radio"]:checked ~ .label {
  color: #fff;
}

.option input[type="radio"]:checked ~ .label:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

#options-view-button:not(:checked)
  ~ #options
  .option
  input[type="radio"]:checked
  ~ .opt-val {
  top: -30px;
}

.option:nth-child(1) input[type="radio"]:checked ~ .label:before {
  background-color: #000;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(1) input[type="radio"]:checked ~ .opt-val {
  top: -31px;
}

.option:nth-child(2) input[type="radio"]:checked ~ .label:before {
  background-color: #ea4c89;
}

.option:nth-child(2) input[type="radio"]:checked ~ .opt-val {
  top: -71px;
}

.option .fa-codepen {
  color: #000;
}

.option .fa-dribbble {
  color: #ea4c89;
}

.option .fa-behance {
  color: #0057ff;
}

.option .fa-hackerrank {
  color: #32c766;
}

.option .fa-stack-overflow {
  color: #f48024;
}

.option .fa-free-code-camp {
  color: #006400;
}

#option-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  transition: 0.3s ease all;
  z-index: 1;
  display: none;
}

#options-view-button:checked ~ #options #option-bg {
  display: block;
}

.option:hover .label {
  color: #fff;
}

.option:nth-child(1):hover ~ #option-bg {
  top: 0;
  background-color: #000;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(2):hover ~ #option-bg {
  top: 40px;
  background-color: #ea4c89;
}


  .mt-50 {
    margin-top: 50px
}

.mb-50 {
    margin-bottom: 50px;
}

.col-md-4.mt-2 {
    width: 270px;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .1875rem
}

.card-img-actions {
    position: relative
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: center
}

.card-img {
    width: 350px
}

.star {
    color: red
}

.bg-cart {
    background-color: orange;
    color: #fff
}

.bg-cart:hover {
    color: #fff
}

.bg-buy {
    background-color: green;
    color: #fff;
    padding-right: 29px
}

.bg-buy:hover {
    color: #fff
}

a {
    text-decoration: none !important
}
</style>