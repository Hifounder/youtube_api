<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link class="btn" to="/">
            首頁
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="btn" to="/collect">
            收藏頁
          </nuxt-link>
        </li>
        <li>
          <span class="btn" @click="userLogin">
            <font-awesome-icon :icon="['fab', 'google']" />Login
          </span>
        </li>
      </ul>
      <span class="mobile-nav">
        <font-awesome-icon :icon="['fa', 'bars']" />
      </span>
    </nav>
  </header>
</template>
<script>
export default {
    name: 'Navbar',
    methods: {
        async userLogin () {
            try {
                const googleUser = await this.$gAuth.signIn()
                if (googleUser !== null) {
                    localStorage.setItem('Name', googleUser.getBasicProfile().getName())
                    localStorage.setItem('Email', googleUser.getBasicProfile().getEmail())
                    localStorage.setItem('ImageUrl', googleUser.getBasicProfile().getImageUrl())
                    localStorage.setItem('Authorization', `${googleUser.wc.token_type} ${googleUser.wc.access_token}`)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss">
header {
  position: fixed;
  padding: 18px;
  top: 0;
  width: 100%;
  background-color: $gray-lighter;
  ul {
    display: table;
    float: right;
    li {
      display: inline-block;
      .btn {
        padding: 15px;
        color: $gray-light;
        transition: color 0.5s;
        cursor: pointer;
        &:hover {
          color: $youtube-red;
        }
      }
    }
  }
  .mobile-nav {
    display: none;
  }
}
</style>
