<template>
  <div class="container">
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
                localStorage.removeItem('Name')
                localStorage.removeItem('Email')
                localStorage.removeItem('ImageUrl')
                localStorage.removeItem('Authorization')
            })
        }
    }
}
</script>
