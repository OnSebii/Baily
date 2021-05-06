<template>
  <div>
    <mdb-row class="m-3 d-flex justify-content-center">
      <mdb-col md="3" class="m-3">
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{ repo.name }}</mdb-card-title>
            <hr />
            <p class="font-small grey-dark-text mb-0">{{ repo.description }}</p>
          </mdb-card-body>
          <mdb-card-footer color="mdb-color" class="lighten-3 p-0 text-center">
            <ul class="list-unstyled list-inline font-small mt-3">
              <li class="list-inline-item pr-2 white-text"><mdb-icon far icon="clock" class="pr-1" />{{ repo.created_at.split('T')[0] }}</li>
              <li class="list-inline-item pr-2">
                <a href="#" class="white-text"> <mdb-icon far icon="comments" class="pr-1" />12</a>
              </li>
              <li class="list-inline-item pr-2">
                <a href="#" class="white-text"> <mdb-icon fab icon="facebook" class="pr-1" />21</a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="white-text"> <mdb-icon fab icon="twitter" class="pr-1" />5</a>
              </li>
            </ul>
          </mdb-card-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
// import axios from 'axios';
import { mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbView, mdbMask, mdbIcon } from 'mdbvue';
export default {
  name: 'NavBar',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbView,
    mdbMask,
    mdbIcon,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped></style>
