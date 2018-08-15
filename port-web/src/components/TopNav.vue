<template>
 <div>
 <b-navbar>
   <div class="container">
     <b-navbar-brand href="#" style="line-height:.8;" class="text-center cool-link">Veddha Edsa<br><span style="font-size:0.8rem">Fullstack Developer</span></b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#" id="contact" class="cool-link" v-b-modal.modalContact style="color:white !important"><span class="contact" style="color:white">CONTACT</span></b-nav-item>
      <b-modal ref="modalContact" id="modalContact" size="md" hide-footer title="Get in touch!">
        <div>
          <p class="modalContact">Email</p>
          <p class="modalContact">Github</p>
          <p class="modalContact">Linkedin</p>
          <p class="modalContact">Instagram</p>
          <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </div>
      </b-modal>
    </b-navbar-nav>
    <b-nav-item-dropdown id="menu" text="MENU" extra-toggle-classes="nav-link-custom" right class="text-dark">
    <b-dropdown-item to='/home'>Home</b-dropdown-item>
    <b-dropdown-item to='/about'>About</b-dropdown-item>
    <b-dropdown-item to='/experience'>Experience</b-dropdown-item>
    <b-dropdown-item to='/projects'>Projects</b-dropdown-item>
    <b-dropdown-item to='/skills'>Skills</b-dropdown-item>
  </b-nav-item-dropdown>
   </div>
  </b-navbar>

<!-- navbar-1.vue -->
</div>
</template>

<script>
export default {
  methods: {
    showModal () {
      this.$refs.modalContact.show()
    },
    hideModal () {
      this.$refs.modalContact.hide()
    }
  }
}
</script>

<style scoped>
b-navbar-brand:hover{
  background-color: black !important;
}
.modalContact{
  display: inline-block;
}
.cool-link {
    display: inline-block;
    color: white;
    text-decoration: none;
}

.cool-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: black;
    transition: width .3s;
    transform: scaleX(0);
    transition: transform 350ms ease-in-out;
}

.cool-link:hover::after {
    width: 100%;
    transform: scaleX(1);
}
#contact {
  font-weight: 700;
}
.cantact {
  color:white !important;
}
.contact:hover {
  color:black !important;
}
@media (max-width: 768px) {
  #contact {
    display: none;
  }
  #menu {
    display: block !important;
  }
}
#menu {
  display: none;
}
#menu__BV_button_ {
  color: black !important;
}
</style>
