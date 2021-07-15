<template>
  <footer>
    <v-container>
      <img src="/Integration_for_courses.png" />
      <v-row>
        <v-col>
          <div>Integration</div>
          <div>For Courses</div>
        </v-col>
        <v-col>
          <div>Contact Us</div>
          <v-list color="#0000" dark>
            <v-list-item>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-list-item-icon>
                facebook Page
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-list-item-icon>
                facebook Page
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-list-item-icon>
                facebook Page
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <div>Address</div>
          <div>201023 12 130</div>
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

  * {
    position: relative;
    z-index: 1;
  }

  img {
    position: absolute;
    height: 150px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }
  &::before,
  &::after {
    content: '';
    height: 10px;
    width: 100%;
    background: #07ccb0;
    display: block;
    position: absolute;
    top: -20px;
  }
  &::after {
    top: -10px;
    background: #f3cd00;
  }
}
</style>
