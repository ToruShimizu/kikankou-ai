import React from "react";

const Links = [
	<React.Fragment key="factory-navigation">
		<a href="https://px.a8.net/svt/ejp?a8mat=3ZK8UX+5I9DZU+2LNO+60H7L" rel="noreferrer nofollow" target="_blank">
			<img
				style={{ border: 0 }}
				height="60"
				alt="工場求人ナビ"
				src="https://www25.a8.net/svt/bgt?aid=241129689333&wid=002&eno=01&mid=s00000012138001010000&mc=1"
			/>
		</a>
		<img
			style={{ border: 0 }}
			width="1"
			height="1"
			src="https://www17.a8.net/0.gif?a8mat=3ZK8UX+5I9DZU+2LNO+60H7L"
			alt="工場求人ナビ"
		/>
	</React.Fragment>,
	<React.Fragment key="mitsubishi-car">
		<a href="https://px.a8.net/svt/ejp?a8mat=457GS2+FSL09M+5FS2+61JSH" rel="noreferrer nofollow" target="_blank">
			<img
				width="728"
				height="97"
				alt=""
				src="https://www27.a8.net/svt/bgt?aid=250611122955&wid=002&eno=01&mid=s00000025373001015000&mc=1"
			/>
		</a>
		<img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=457GS2+FSL09M+5FS2+61JSH" alt="" />
	</React.Fragment>,
];

export const AdsLink = () => {
	const count = Links.length;

	// 0〜count-1のランダムな整数を生成
	const index = Math.floor(Math.random() * count);
	return Links[index];
};
