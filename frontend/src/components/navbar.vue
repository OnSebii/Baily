<template>
  <div>
    <!-- TODO: Navbar Floating -->
    <!-- TODO: Animations -->
    <mdb-navbar dark color="elegant-color-dark">
      <div class="container">
        <mdb-navbar-brand href="https://baily.at/"> Baily.at </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item v-for="(i, e) in navLinks" :key="e" :to="i.linkTo">{{ i.name }}</mdb-nav-item>
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>Themes</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item>Dark</mdb-dropdown-item>
                <mdb-dropdown-item>Light</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </div>
    </mdb-navbar>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem } from 'mdbvue';
import { links } from '../assets/navLinks.json';
export default {
  name: 'NavBar',
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
    return {
      navLinks: null,
    };
  },

  created() {
    this.navLinks = links;
  },
};
</script>

<style scoped>
.container {
  min-width: 90%;
  @media (min-width: 600px) {
    .facet_sidebar {
      display: none;
    }
  }
}
</style>
