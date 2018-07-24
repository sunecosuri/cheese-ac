<template>
  <section id="access" :class="$style.access">
		<h2 :class="$style.headline">access</h2>
		<p :class="$style.subcopy">会社概要</p>
		<div :class="$style.mapWrap">
			<iframe :class="$style.map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3241.388580031115!2d139.71172686525847!3d35.667432880197424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95riv5Yy65YyX6Z2S5bGxMy01LTYg6Z2S5pyL44OT44OrMkY!5e0!3m2!1sja!2sjp!4v1532276489122" frameborder="0" style="border:0" allowfullscreen></iframe>
		</div>
		<dl :class="$style.addressWrap">
			<dt :class="$style.listTitle">学校名</dt>
			<dd :class="$style.detail"><address :class="$style.address">チーズアカデミーTOKYO</address></dd>
			<dt :class="$style.listTitle">事務所所在地</dt>
			<dd :class="$style.detail"><address :class="$style.address">〒107-0061東京都港区北青山3-5-6 青朋ビル2F</address></dd>
			<dt :class="$style.listTitle">TEL</dt>
			<dd :class="$style.detail"><address :class="$style.address">03-5413-5045</address></dd>
			<dt :class="$style.listTitle">FAX</dt>
			<dd :class="$style.detail"><address :class="$style.address">03-5413-5046</address></dd>
			<dt :class="$style.listTitle">MAIL</dt>
			<dd :class="$style.detail"><address :class="$style.address">dummy@cheeseacademy.tokyo</address></dd>
		</dl>
	</section>
</template>

<style module>

@import '~/assets/css/values.css';

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

.access {
	margin-top: var(--default);
	padding: var(--default) 0 var(--xnarrow);
	background: #fafafa;
}
@media (min-width: 600px) {
	.access {
		margin-top: var(--wide);
		padding: var(--wide) 0;
	}
}
.headline {
	padding: var(--default) 0 var(--narrow);
	text-align: center;
	text-transform: uppercase;
	font-size: var(--font-size-l);
}
@media (min-width: 600px) {
	.headline {
		padding: var(--medium) 0 var(--default);
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
.mapWrap {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
}
@media (min-width: 600px) {
	.mapWrap {
		padding-bottom: 30%;
	}
}
.map {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.addressWrap {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: 520px;
	margin: var(--medium) auto var(--wide);
	padding: 0 var(--narrow);
}
.listTitle {
	width: 30%;
	padding: var(--narrow);
}
.detail {
	width: 70%;
	padding: var(--narrow);
}
.address {
	font-style: normal;
	word-break: break-all;
}
</style>