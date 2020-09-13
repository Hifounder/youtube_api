<template>
  <div
    class="youtube"
  >
    <iframe
      class="video"
      :src="youtubeID"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        src: {
            type: String,
            default: 'https://www.youtube-nocookie.com/embed/'
        }
    },
    computed: {
        youtubeID () {
            return `https://www.youtube-nocookie.com/embed/${this.src}`
        }
    }
}
</script>
<style lang="scss" scoped>
.youtube{
    text-align: center;
    padding: 15px;
    .video{
      border-radius: 5px;
    }
}
</style>
