import type { JobOffer, SearchInput } from "@/types";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const convertJobOffer = (jobOffers: JobOffer[]) => {
	return jobOffers.map((jobOffer) => {
		return {
			会社名: jobOffer.name,
			勤務地: jobOffer.prefecture,
			月収例: jobOffer.salary,
			寮: jobOffer.dormitory === 1 ? "あり" : "なし",
			満了慰労金: jobOffer.bounty === 1 ? "あり" : "なし",
			入社祝い金: jobOffer.celebration_money === 1 ? "あり" : "なし",
			正社員登用制度: jobOffer.proper === 1 ? "あり" : "なし",
		};
	});
};

export async function POST(req: Request) {
	const { jobOffers, requirements }: { jobOffers: JobOffer[]; requirements: SearchInput } = await req.json();

	if (!jobOffers || jobOffers.length === 0) {
		return NextResponse.json({ message: "条件に一致する求人が見つかりませんでした。" }, { status: 404 });
	}

	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

	try {
		const prompt = `求職者が自動車関係の期間従業員の求人情報を見ているとします。
この求人情報は、あなたが提供するものです。
求職者の背中を押すような魅力的な求人情報を提供してください。

## 期間従業員の求人情報
  ${JSON.stringify(convertJobOffer(jobOffers))}

## 求職者の希望条件
  希望月収: ${requirements.salary}
  希望勤務地: ${requirements.prefecture}

	## 求職者の希望条件
  希望月収: ${requirements.salary}
  希望勤務地: ${requirements.prefecture}

  その他希望条件
  寮: ${requirements.dormitory === true ? "あり" : "どちらでも"}
  満了慰労金: ${requirements.bounty === true ? "あり" : "どちらでも"}
  入社祝い金: ${requirements.celebrationMoney === true ? "あり" : "どちらでも"}
  正社員登用制度: ${requirements.proper === true ? "あり" : "どちらでも"}

## テンプレート
求職者の条件を元に、最適な募集条件の求人を理由をつけて提案してください。
他社との比較も行い、求職者に魅力的な求人情報を提供してください。
与えられた情報以外の情報は追加しないでください。
必要に応じて改行や箇条書きを入れて、スマートフォンでも見やすい文章にしてください。
お急ぎくださいなどの、緊急性や誘導するような


【】の次は改行してください。
【会社名】
会社名が入ります。
【月収例】
月収例が入ります。
期間従業員の求人情報で渡された月収を参考にしてください。
【その他条件】
満了慰労金、入社祝い金、正社員登用制度などの特典情報が入ります。
【他社比較】
他に条件に合う求人がある場合、他社との比較を行い、当社の求人情報の魅力をアピールしてください。

### 注意点
- 500文字以内でお願いします。
`;

		const response = await openai.chat.completions.create({
			model: "gpt-4",
			messages: [
				{ role: "system", content: "あなたは求人アドバイザーです。" },
				{ role: "user", content: prompt },
			],
		});

		return NextResponse.json({ message: response.choices[0].message.content });
	} catch (error) {
		console.error("OpenAI API error:", error);
		return NextResponse.json({ message: "AIとの連携中にエラーが発生しました。" }, { status: 500 });
	}
}
