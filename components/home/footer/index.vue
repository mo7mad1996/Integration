<template>
  <footer>
    <v-container>
      <div class="bg">
        <!-- <img src="/Integration_for_courses.png" /> -->
      </div>
      <v-row>
        <v-col>
          <div class="name">
            <div>Integration</div>
            <sup>For Courses</sup>
          </div>
        </v-col>
        <v-col>
          <div>Contact Us</div>
          <v-list color="#0000" dark>
            <v-list-item
              link
              target="_blank"
              href="https://web.facebook.com/Engineeringserviceofficial"
            >
              <v-list-item-icon>
                <v-icon>mdi-facebook</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Integration Academy</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              target="_blank"
              href="https://www.instagram.com/integration_courses/"
            >
              <v-list-item-icon>
                <v-icon>mdi-instagram</v-icon>
              </v-list-item-icon>
              <v-list-item-title>integration_courses</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <div>Address</div>
          <v-list dark color="#0000">
            <div>6 october</div>
            <v-list-item link href="tel:201151248022">
              <v-list-item-icon>
                <v-icon>mdi-cellphone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>(+2) 011 5124 8021</v-list-item-content>
            </v-list-item>

            <v-list-item link href="tel:201552171038">
              <v-list-item-icon>
                <v-icon>mdi-cellphone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>(+2) 015 5217 1038</v-list-item-content>
            </v-list-item>
            <!-- <v-list-group> </v-list-group> -->
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
footer {
  padding: 10px 0;
  background: #372977;
  color: white;
  position: relative;
  margin-top: 20px;
  min-height: 180px;
  background-attachment: fixed;
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-size: auto 70%;
  background-position: 0 150%;

  .name {
    display: inline-block;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;

    div {
      font-weight: 700;
    }

    sup {
      text-align: justify;
      font-weight: lighter;
      font-size: 10px;
      letter-spacing: 3.4px;
    }
  }

  * {
    position: relative;
    z-index: 1;
  }

  .bg {
    position: absolute;
    width: 650px;
    top: 0;
    bottom: 0;
    overflow: hidden;
    padding: 0;
    z-index: 0;
    opacity: 0.3;

    img {
      pointer-events: none;
      transform: translateY(-26%);
    }
  }

  &::before,
  &::after {
    content: '';
    height: 10px;
    background: #f3cd00;
    width: 100%;
    display: block;
    position: absolute;
    top: -20px;
    filter: blur(4px);
  }
  &::after {
    top: -10px;
    background: #07ccb0;
  }
}
</style>
