<template>
  <section id="about" :class="$style.about">
		<h2 :class="$style.headline">about</h2>
		<p :class="$style.subcopy">チーズアカデミーについて</p>
		<p :class="$style.read">チーズアカデミーは、チーズ職人養成学校です。</p>
		<p :class="$style.read">チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。<br>そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。</p>
		<p :class="$style.read">そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。</p>
		<p :class="$style.read">
			卒業後、チーズ自給自足のバックアップはもちろんのこと、<br>
			チーズ職人への就職・転職もサポートします。
		</p>
		<slider />
	</section>
</template>

<script>
  import Slider from '~/components/top/Slider.vue'

  export default {
    components: {
      Slider
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

.about {
	padding: var(--default);
}
@media (min-width: 600px) {
	.about {
		padding: var(--wide);
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
.read {
	composes: baseFontsize;
	margin-bottom: var(--default);
}
</style>