<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
             <button class="btn2 btn-secondary">
                  <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
                  </button> 
                  <span class="name mt-3">Eleanor Pena</span> 
            <div class=" d-flex mt-2"> <button v-on:click="show" class="btn1 btn-dark" data-toggle="modal" data-target="#exampleModal">Edit Profile</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editing User Profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="name">Name: </label> <br />
        <input type="text" name="name" placeholder="Joe Doe" title="Enter name">
        <br/>
        <label for="email">Email: </label> <br />
        <input type="email" name="email" placeholder="abcd@1234.com" title="Enter email address">
        <br />
        <label for="number">New Contact Number: </label> <br />
        <input type="tel" name="number" placeholder="0123456789" title="Enter new number">
        <br />
        <label for="pass">New Password: </label> <br />
        <input type="password" name="pass" placeholder="Joe Doe" title="Enter new password">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> </div>
            <div class="text mt-3"> <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br><br> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  
}
</script>

<style>
 .card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn2 {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}

input {
    text-align: center
}

.modal-title {
    text-align: center
}
</style>