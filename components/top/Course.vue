<template>
  <section id="course" :class="$style.course">
		<h2 :class="$style.headline">course</h2>
		<p :class="$style.subcopy">
			未経験からでもスタートができるよう、カリキュラムは多くの専門家や<br>
			現役チーズ職人のアドバイスのもと、作られました。
		</p>
		<div :class="$style.wrap">
			<div :class="$style.details">
				<div :class="$style.detail">
					<img :class="$style.img" src="../../assets/img/course_01.jpg" alt="農園">
					<div :class="$style.text">
						<div :class="$style.inner">
							<h3 :class="$style.headline3">本格的な農園を使った実地研修</h3>
							<p :class="$style.read">
								チーズアカデミーでは、本格的な農園を使った実地研修を行うことができます。プロとして活躍するチーズ職人も使用するような、広大で環境も整った農園を余すところなく使い、卒業時には本格的なチーズを自分の力で作れる実践力の養成を目指します。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div :class="$style.details">
				<div :class="$style.detail">
					<img :class="$style.img" src="../../assets/img/course_02.jpg" alt="講師">
					<div :class="$style.text">
						<div :class="$style.inner">
							<h3 :class="$style.headline3">必要な知識もしっかりと取得</h3>
							<p :class="$style.read">
								チーズ作りには、しっかりとした食に関する知識が欠かせません。チーズアカデミーでは、一流講師陣による、チーズ作りに必要ないろはを余すところなく学べます。チーズそのものでなく、栄養学全般を学ぶことも可能ですので、チーズ以外への展開も夢ではないでしょう。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div :class="$style.details">
				<div :class="$style.detail">
					<img :class="$style.img" src="../../assets/img/course_03.jpg" alt="レストラン">
					<div :class="$style.text">
						<div :class="$style.inner">
							<h3 :class="$style.headline3">卒業制作はティスティング審査あり</h3>
							<p :class="$style.read">
								チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。卒業制作として、チーズ作りを実際に行います。卒業後、一般参加によるティスティング審査があるため、作り手の目線だけでなく、消費者の目線から、卒業制作作品としてのチーズを、しっかりと評価いただくことができます。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

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

.course {
	padding: var(--default);
}
@media (min-width: 600px) {
	.course {
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
.wrap {
	margin: var(--default) auto;
}
@media (min-width: 600px) {
	.wrap {
		margin: var(--wide) auto;
	}
}
.details {
	margin-bottom: var(--default);
}
@media (min-width: 600px) {
	.details {
		margin-bottom: 0;
	}
}
.detail {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: var(--md);
	margin: 0 auto;
	background: #fafafa;
}
@media (min-width: 600px) {
	.detail {
		flex-wrap: nowrap;
	}
}
.headline3 {
	font-size: var(--font-middle);
	padding-bottom: var(--narrow);
}
.img {
	width: 100%;
	align-self: center;
}
@media (min-width: 600px) {
	.img {
		width: 50%;
	}
	.details:nth-child(even) .img {
		order: 2;
	}
}
.text {
	display: flex;
	align-items: center;
	width: 100%;
	padding: var(--default);
	background: #fafafa;
}
@media (min-width: 600px) {
	.text {
		width: 50%;
		padding: var(--wide);
	}
	.details:nth-child(even) .text {
		justify-content: flex-end;
	}
}
.inner {
	max-width: 480px;
}
.read {
	composes: baseFontsize;
	text-align: justify;
}
</style>