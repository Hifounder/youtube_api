<template>
  <div class="container">
    <button @click="userLogin">
      google
    </button>
    <div class="row">
      <div
        v-for="item in items"
        :key="item.id"
        class="col-4"
      >
        <Youtube :src="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            items: [],
            pageInfo: '',
            nextPageToken: '',
            prevPageToken: ''
        }
    },
    mounted () {
        if (localStorage.getItem('Authorization') !== null) {
            this.GetYoutube()
        }
    },
    methods: {
        async userLogin () {
            try {
                const googleUser = await this.$gAuth.signIn()
                localStorage.setItem('Name', googleUser.getBasicProfile().getName())
                localStorage.setItem('Email', googleUser.getBasicProfile().getEmail())
                localStorage.setItem('ImageUrl', googleUser.getBasicProfile().getImageUrl())
                if (googleUser !== null) {
                    localStorage.setItem('Authorization', `${googleUser.wc.token_type} ${googleUser.wc.access_token}`)
                    await this.GetYoutube()
                }
            }
            catch (err) {
                console.log(err)
            }
        },
        async GetYoutube (pakeToken) {
            await this.$axios({
                url: 'https://www.googleapis.com/youtube/v3/videos',
                params: {
                    part: 'snippet',
                    myRating: 'like',
                    maxResults: '5',
                    pageToken: pakeToken,
                    key: process.env.Google_Key
                },
                headers: {
                    Authorization: localStorage.getItem('Authorization'),
                    Accept: 'application/json'
                }
            }).then(({ data }) => {
                this.items = data.items
                this.pageInfo = data.pageInfo
                this.nextPageToken = data.nextPageToken
                this.prevPageToken = data.prevPageToken
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
