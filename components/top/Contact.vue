<template>
  <section id="contact" :class="$style.contact">
		<h2 :class="$style.headline">contact</h2>
		<p :class="$style.subcopy">説明会お申し込み・お問い合わせ</p>
		<p :class="$style.read">ぜひ1度、足を運んでみませんか。説明会は随時開催中。<br>
		その他、お問い合わせもお気軽にどうぞ。お待ちしております。</p>
		<p :class="$style.read">※チーズアカデミーは実際には存在しません。<br>
		間違っても問い合わせしないようお願いいたします。</p>
		<form :class="$style.form">
			<dl :class="$style.inner">
				<dt :class="$style.title">名前</dt>
				<dd :class="$style.item"><input :class="$style.input" type="text" name="name" placeholder="チーズ太郎" inputmode="kana-name" required></dd>
				<dt :class="$style.title">カナ</dt>
				<dd :class="$style.item"><input :class="$style.input" type="text" name="name" placeholder="チーズタロウ" inputmode="katakana"></dd>
				<dt :class="$style.title">メールアドレス</dt>
				<dd :class="$style.item"><input :class="$style.input" type="email" name="email" placeholder="cheese@email.com" inputmode="verbatim" required></dd>
				<dt :class="$style.title">チーズアカデミーを知ったきっかけ</dt>
				<dd :class="$style.item">
					<select :class="$style.select" name="trigger">
						<option value="google" selected="selected">google</option>
						<option value="SNS">SNS</option>
						<option value="紹介">紹介</option>
						<option value="たまたま通りかかった">たまたま通りかかった</option>
						<option value="その他">その他</option>
					</select>
				</dd>
				<dt :class="$style.title">志望動機選択肢</dt>
				<dd :class="$style.item">
					<label :class="$style.checkboxWrap">
						<input :class="$style.checkbox" type="checkbox" name="reason" value="起業をしたい">
						<span :class="$style.checkboxText">起業をしたい</span>
					</label>
					<label :class="$style.checkboxWrap">
						<input :class="$style.checkbox" type="checkbox" name="reason" value="チーズ系企業に就職・転職したい">
						<span :class="$style.checkboxText">チーズ系企業に就職・転職したい</span>
					</label>
					<label :class="$style.checkboxWrap">
						<input :class="$style.checkbox" type="checkbox" name="reason" value="チーズと関わる仕事をしており、仕事に生かしたい">
						<span :class="$style.checkboxText">チーズと関わる仕事をしており、仕事に生かしたい</span>
					</label>
					<label :class="$style.checkboxWrap">
						<input :class="$style.checkbox" type="checkbox" name="reason" value="チーズの教養を身につけたい">
						<span :class="$style.checkboxText">チーズの教養を身につけたい</span>
					</label>
				</dd>
				<dt :class="$style.title">詳細</dt>
				<dd :class="$style.item">
					<textarea :class="$style.textarea" name="detail" placeholder="祖父母が酪農を行なっており、新鮮なチーズを小さい頃から食べる機会に恵まれていた。新鮮でおいしいチーズをたくさんの人に提供したいと考えており、そのためにはチーズ作りから流通に到るまでの全てを学ぶ必要があると思い、志望しました。"></textarea>
				</dd>
			</dl>
		</form>
		<div :class="$style.buttonWrap">
			<v-button :class="$style.button">送信</v-button>
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

.contact {
	padding: var(--default);
}
@media (min-width: 600px) {
	.contact {
		padding: var(--wide);
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
.form {
	padding-top: var(--default);
}
.inner {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: 600px;
	border-top: 2px solid #bfbfbf;
	margin: var(--wide) auto;
}
.title {
	width: 30%;
	border-right: 1px solid #bfbfbf;
	border-bottom: 1px solid #bfbfbf;
	padding: var(--narrow);
}
.item {
	width: 70%;
	border-bottom: 1px solid #bfbfbf;
	padding: var(--narrow);
}
.input {
	width: 100%;
	max-width: 20rem;
	border: 1px solid #bfbfbf;
	border-radius: 4px;
	padding: var(--narrow);
}
.select {
	width: 100%;
	height: 36px;
	max-width: 20rem;
	border: 1px solid #bfbfbf;
	border-radius: 4px;
	margin-top: 10px;
	padding: var(--xnarrow);
}
.checkboxWrap {
	position: relative;
  display: block;
  word-break: break-all;
}
.checkbox {
	padding-left: var(--xnarrow);
}
.checkboxText {
	display: inline-flex;
	position: relative;
  padding: var(--xnarrow) var(--xnarrow) var(--xnarrow) var(--wide);
}
.checkbox[type="checkbox"] {
  position: absolute;
  top: 7px;
  left: 0;
  opacity: 0;
}
.checkbox[type="checkbox"] + .checkboxText::before, .checkbox[type="checkbox"] + .checkboxText::after {
  position: absolute;
  top: 7px;
  left: 0;
  display: inline-block;
  content: '';
  box-sizing: border-box;
}
.checkbox[type="checkbox"] + .checkboxText::before {
  z-index: 0;
  background-color: #efefef;
  width: 24px;
  height: 24px;
  border: 1px #efefef solid;
  border-radius: 4px;
}
.checkbox[type="checkbox"] + .checkboxText::after {
  z-index: 1;
  margin: 6px 9px;
  width: 6px;
  height: 9px;
}
.checkbox[type="checkbox"]:checked + .checkboxText::before {
  background-color: #ffd61a;
}
.checkbox[type="checkbox"]:checked + .checkboxText::after {
  border: 2px solid #fff;
  border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}
.textarea {
	width: 100%;
	height: 10rem;
	max-width: 30rem;
	border: 1px solid #bfbfbf;
	border-radius: 4px;
	padding: var(--narrow);
}
.buttonWrap {
	text-align: center;
}
.button {
	width: 100%;
	max-width: 300px;
}
</style>