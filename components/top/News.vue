<template>
  <section id="news" :class="$style.news">
		<h2 :class="$style.headline">news</h2>
		<p :class="$style.subcopy">ニュース</p>
		<div :class="$style.wrap">
			<a href="#" :class="$style.box">
				<img :class="$style.img" src="../../assets/img/news_img.jpg" alt="ピザ">
				<div :class="$style.text">
					<time :class="$style.date">2016/11/18</time>
					<p :class="$style.detail">チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が渋谷でオープンしました！</p>
				</div>
			</a>
			<a href="#" :class="$style.box">
				<img :class="$style.img" src="../../assets/img/news_img.jpg" alt="ピザ">
				<div :class="$style.text">
					<time :class="$style.date">2016/11/18</time>
					<p :class="$style.detail">チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が渋谷でオープンしました！</p>
				</div>
			</a>
			<a href="#" :class="$style.box">
				<img :class="$style.img" src="../../assets/img/news_img.jpg" alt="ピザ">
				<div :class="$style.text">
					<time :class="$style.date">2016/11/18</time>
					<p :class="$style.detail">チーズアカデミー卒業生のコスゲさんによるチーズだけをふんだんに使用した話題のピザ屋「Kosuge Pizza」が渋谷でオープンしました！</p>
				</div>
			</a>
		</div>
		<div :class="$style.buttonWrap">
			<v-button :class="$style.button">More</v-button>
		</div>
	</section>
</template>

<script>
  import VButton from '~/components/VButton.vue'

  export default {
    components: {
      VButton
    }
  }
</script>

<style module>

@import '../../assets/css/values.css';

.baseFontsize {
	font-size: var(--font-size-m);
	line-height: calc( var(--font-size-m) * var(--lh-m));
	text-align: justify;
}
@media (min-width: 600px) {
	.baseFontsize {
		text-align: center;
	}
}

.news {
	padding: var(--default) var(--default) var(--wide);
}
@media (min-width: 600px) {
	.news {
		padding: var(--wide) var(--default);
	}
}
.headline {
	padding: var(--default) 0 var(--narrow);
	color: #ffd61a;
	text-align: center;
	text-transform: uppercase;
	font-size: var(--font-size-l);
}
@media (min-width: 600px) {
	.headline {
		padding: var(--wide) 0 var(--default);
		text-align: center;
		text-transform: uppercase;
	}
}
.subcopy {
	composes: baseFontsize;
	margin-bottom: var(--medium);
	text-align: center;
}
.title {
  margin: 16px;
  text-align: center;
}

.wrap {
	display: flex;
	flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
	width: 100%;
	max-width: calc(800px + (var(--default) * 2));
	margin: var(--default) auto var(--narrow);
}
@media (min-width: 600px) {
	.wrap {
		flex-wrap: nowrap;
		margin: var(--wide) auto var(--default);
	}
}
.box {
	display: flex;
	width: 100%;
	margin-bottom: var(--default);
	color: #222;
	transition: opacity .2s;
}
.box:hover {
	opacity: .5;
}
@media (min-width: 600px) {
	.box {
		flex-wrap: wrap;
		width: calc(100% / 3);
		max-width: 300px;
		margin: auto;
		padding: 0 var(--default);
	}
}
.img {
	align-self: flex-start;
  width: 40%;
}
@media (min-width: 600px) {
	.img {
		align-self: center;
		width: 100%;
	}
}
.text {
	width: 60%;
  padding: 0 0 var(--narrow) var(--default);
}
@media (min-width: 600px) {
	.text {
		width: 100%;
		padding: var(--default) 0;
	}
}
.date {
	display: block;
	margin-bottom: var(--narrow);
	font-size: var(--font-size-m);
}
.detail {
	font-size: var(--font-size-m);
}
.buttonWrap {
	text-align: center;
}
.button {
	width: 100%;
	max-width: 300px;
}
</style>