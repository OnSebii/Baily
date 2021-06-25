<template>
  <div id="app">
    <mdb-navbar dark :color="color">
      <mdb-navbar-brand href="https://baily.at/">
        Baily.at
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item active to="/">Home</mdb-nav-item>
          <mdb-nav-item to="/projects">Projects</mdb-nav-item>
          <mdb-nav-item to="/gallery">Gallery</mdb-nav-item>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>Themes</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item @click="switchColor(`elegant-color-dark`)">Dark</mdb-dropdown-item>
              <mdb-dropdown-item @click="switchColor(`Light`)">Light</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <router-view />
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem } from 'mdbvue';
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
  },
  data() {
    return { color: 'elegant-color-dark', amb: 'dark' };
  },
  methods: {
    switchColor(theme) {
      this.color = theme;
      console.log(theme);
    },
  },
};
</script>

<style></style>
