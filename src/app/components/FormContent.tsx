"use client";

import { useFormContext } from "react-hook-form";

const Salaries = [
	{ label: "20万円以上", value: 200000 },
	{ label: "25万円以上", value: 250000 },
	{ label: "30万円以上", value: 300000 },
	{ label: "35万円以上", value: 350000 },
];

const Prefectures = [
	{ label: "愛知県", value: "愛知県" },
	{ label: "茨城県", value: "茨城県" },
	{ label: "大分県", value: "大分県" },
	{ label: "神奈川県", value: "神奈川県" },
	{ label: "群馬県", value: "群馬県" },
	{ label: "静岡県", value: "静岡県" },
	{ label: "栃木県", value: "栃木県" },
	{ label: "福岡県", value: "福岡県" },
	{ label: "福島県", value: "福島県" },
];

type Props = {
	isLoading: boolean;
};

export const FormContent = ({ isLoading }: Props) => {
	const { register } = useFormContext();
	return (
		<div className="grid gap-6 ">
			<div className="grid gap-1 w-56">
				<label htmlFor="salary" className="leading-7 text-sm text-gray-600">
					希望月収
				</label>
				<select
					id="salary"
					className="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
					disabled={isLoading}
					{...register("salary")}
				>
					{Salaries.map((salary) => (
						<option key={salary.label} value={salary.value}>
							{salary.label}
						</option>
					))}
				</select>
			</div>
			<div className="grid gap-1 w-56">
				<label htmlFor="prefecture" className="leading-7 text-sm text-gray-600">
					希望勤務地
				</label>
				<select
					id="prefecture"
					className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
					disabled={isLoading}
					{...register("prefecture")}
				>
					{Prefectures.map((prefecture) => (
						<option key={prefecture.label} value={prefecture.value}>
							{prefecture.value}
						</option>
					))}
				</select>
			</div>

			<div className="grid gap-6">
				<div>
					<p className="leading-7 text-sm text-gray-600 mb-2">その他希望条件</p>
					<div className="flex items-center">
						<input
							id="dormitory"
							type="checkbox"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
							disabled={isLoading}
							{...register("dormitory")}
						/>
						<label htmlFor="dormitory" className="ms-2 text-sm font-medium text-gray-900">
							寮
						</label>
					</div>
				</div>
				<div className="flex items-center">
					<input
						id="bounty"
						type="checkbox"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
						disabled={isLoading}
						{...register("bounty")}
					/>
					<label htmlFor="bounty" className="ms-2 text-sm font-medium text-gray-900">
						満了慰労金あり
					</label>
				</div>
				<div className="flex items-center">
					<input
						id="celebrationMoney"
						type="checkbox"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
						disabled={isLoading}
						{...register("celebrationMoney")}
					/>
					<label htmlFor="celebrationMoney" className="ms-2 text-sm font-medium text-gray-900">
						入社特典あり
					</label>
				</div>
				<div className="flex items-center">
					<input
						id="proper"
						type="checkbox"
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
						disabled={isLoading}
						{...register("proper")}
					/>
					<label htmlFor="proper" className="ms-2 text-sm font-medium text-gray-900">
						正社員登用制度あり
					</label>
				</div>
			</div>
		</div>
	);
};
