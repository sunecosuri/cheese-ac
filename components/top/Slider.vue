<template>
	<div :class="$style.wrap">
		<carousel
			:autoplay="true"
			:scrollPerPage="true"
			:perPage="1"
			:speed="800"
			:loop="true"
		>
			<slide>
				<img :class="$style.img" src="~/assets/img/about_01.jpg" alt="有名レストランにも安全なチーズを提供しています">
			</slide>
			<slide>
				<img :class="$style.img" src="~/assets/img/about_02.jpg" alt="広大な農園で育った牛や羊から上質なミルクを搾乳">
			</slide>
			<slide>
				<img :class="$style.img" src="~/assets/img/about_03.jpg" alt="先輩がしっかりとサポート">
			</slide>
			<slide>
				<img :class="$style.img" src="~/assets/img/about_04.jpg" alt="農場の石窯で焼く出来立てのチーズをたっぷり使ったピザは格別の美味しさです">
			</slide>
		</carousel>
	</div>
</template>

<script>
  import Carousel from 'vue-carousel/src/Carousel.vue'
	import Slide from 'vue-carousel/src/Slide.vue'

  export default {    
    components: {
      Carousel,
			Slide
    }
  }
</script>

<style module>
@import '~/assets/css/values.css';

.wrap {
	width: 100%;
	max-width: 385px;
	margin: var(--xwide) auto 0;
}
.img {
	width: 100%;
	cursor: grab;
}
.img:active {
	cursor: grabbing;
}
</style>