<template>
  <div :class="$style.heroImage">
		<div :class="$style.inner">
			<h1 :class="$style.mainCopy">セカイを変える<span :class="$style.lineBreake">チーズを作ろう</span></h1>
			<p>チーズ職人養成学校<span :class="$style.lineBreake">「チーズアカデミーTOKYO」</span></p>
		</div>
	</div>
</template>

<style module>

@import '../../assets/css/values.css';

.heroImage {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 400px;
	background: url('~/assets/img/mainbg.png') no-repeat center center;
	background-size: cover;
	margin: auto;
	padding: 16px;
	color: #fff;
	text-align: center;
	font-size: var(--font-size-xl);
}
.lineBreake {
	display: inline-block;
}
.mainCopy {
	margin: var(--default) auto;
}
</style>