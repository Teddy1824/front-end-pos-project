<template>
<div>
    <div class="header-blue">
        <!-- <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div class="container-fluid"><a class="navbar-brand" href="#">BBBOOTSTAP</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/contact">Contact</a></li>
                        <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Services</a>
                            <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">Logo design</a><a class="dropdown-item" role="presentation" href="#">Banner design</a><a class="dropdown-item" role="presentation" href="#">content writing</a></div>
                        </li>
                    </ul>
                    <form class="form-inline mr-auto" target="_self">
                        <div class="form-group"><label for="search-field"><i class="fa fa-search text-white"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"></div>
                    </form><span class="navbar-text"> <a class="login" href="/login">Log In</a></span>
                    <a class="btn btn-light action-button" role="button" href="/signup">Signup</a>
                </div>
            </div>
        </nav> -->
        <div class="container hero">
            <div class="row">
                <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                    <h1>Everything is Electric</h1>
                    <p>We at B&K, we source and supply our consumers with the best electronic devices like fridges, smartphones, gaming consoles and a lot more. So click the button below to be blown away by our products and amazing prices.<br></p> 
                    <a href="/login"><button class="btn btn-light btn-lg action-button" type="button">Start shopping >><i class="fa fa-long-arrow-right ml-2"></i></button></a>
                </div>
                <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                    <div class="iphone-mockup"> <img class="device" src="https://i.imgur.com/bkCeTu7.png"> <!-- <div class="screen">	</div>	-->
                    </div>
                </div>
            </div>
        </div>
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
 .header-blue {
    margin-top: -45px;
    font-family: 'Source Sans Pro', sans-serif
}

/* @media (min-width:768px) {
    .header-blue {
        padding-bottom: 120px
    }
}

.header-blue .navbar {
    background: transparent;
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #fff;
    border-radius: 0;
    box-shadow: none;
    border: none
}

@media (min-width:768px) {
    .header-blue .navbar {
        padding-top: 1rem;
        padding-bottom: 1rem
    }
} */

.header-blue .navbar .navbar-brand {
    font-weight: bold;
    color: inherit
}

.header-blue .navbar .navbar-brand:hover {
    color: #f0f0f0
}

.header-blue .navbar .navbar-collapse {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: .5rem
}

@media (min-width:768px) {
    .header-blue .navbar .navbar-collapse {
        border-color: transparent;
        margin: 0
    }
}

.header-blue .navbar .navbar-collapse span .login {
    color: #fff;
    margin-right: .5rem;
    text-decoration: none
}

.header-blue .navbar .navbar-collapse span .login:hover {
    color: #fff
}

.header-blue .navbar .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.3)
}

.header-blue .navbar .navbar-toggler:hover,
.header-blue .navbar-toggler:focus {
    background: none
}

@media (min-width: 768px) {
    .header-blue .navbar-nav .nav-link {
        padding-left: .7rem;
        padding-right: .7rem
    }
}

@media (min-width: 992px) {
    .header-blue .navbar-nav .nav-link {
        padding-left: 1.2rem;
        padding-right: 1.2rem
    }
}

.header-blue .navbar.navbar-light .navbar-nav .nav-link {
    color: #fff
}

.header-blue .navbar.navbar-light .navbar-nav .nav-link:focus,
.header-blue .navbar.navbar-light .navbar-nav .nav-link:hover {
    color: #fcfeff !important;
    background-color: transparent
}

.header-blue .navbar .navbar-nav>li>.dropdown-menu {
    margin-top: -5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px
}

.header-blue .navbar .dropdown-menu .dropdown-item:focus,
.header-blue .navbar .dropdown-menu .dropdown-item {
    line-height: 2;
    color: #37434d
}

.header-blue .navbar .dropdown-menu .dropdown-item:focus,
.header-blue .navbar .dropdown-menu .dropdown-item:hover {
    background: #ebeff1
}

.header-blue .action-button,
.header-blue .action-button:not(.disabled):active {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 40px;
    color: #fff;
    box-shadow: none;
    text-shadow: none;
    padding: .3rem .8rem;
    background: transparent;
    transition: background-color 0.25s;
    outline: none
}

.header-blue .action-button:hover {
    color: #fff
}

.header-blue .navbar .form-inline label {
    color: #d9d9d9
}

.header-blue .navbar .form-inline .search-field {
    display: inline-block;
    width: 80%;
    background: none;
    border: none;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    color: #fff;
    box-shadow: none;
    color: inherit;
    transition: border-bottom-color 0.3s
}

.header-blue .navbar .form-inline .search-field:focus {
    border-bottom: 1px solid #ccc
}

.header-blue .hero {
    margin-top: 20px;
    text-align: center
}

@media (min-width:768px) {
    .header-blue .hero {
        margin-top: 60px;
        text-align: left
    }
}

.header-blue .hero h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.4
}

@media (min-width:992px) {
    .header-blue .hero h1 {
        margin-top: 190px;
        margin-bottom: 24px;
        line-height: 1.2
    }
}

.header-blue .hero p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 300
}

.header-blue .phone-holder {
    text-align: right
}

.header-blue div.iphone-mockup {
    position: relative;
    max-width: 300px;
    margin-top: 172px;
    display: inline-block
}

.header-blue .iphone-mockup img.device {
    width: 100%;
    height: auto
}

.header-blue .iphone-mockup .screen {
    position: absolute;
    width: 88%;
    height: 77%;
    top: 12%;
    border-radius: 2px;
    left: 6%;
    border: 1px solid #444;
    background-color: #aaa;
    overflow: hidden;
    /* background: url(); */
    background-size: cover;
    background-position: center
}

.header-blue .iphone-mockup .screen:before {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 70%;
    height: 140%;
    top: -12%;
    right: -60%;
    transform: rotate(-19deg);
    opacity: 0.2
}

.row {
      margin-bottom: 320px;
}
</style>