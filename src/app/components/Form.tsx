"use client";

const Salaries = [
	{ id: 1, name: "20万円以上" },
	{ id: 2, name: "25万円以上" },
	{ id: 3, name: "30万円以上" },
	{ id: 4, name: "35万円以上" },
];

const Prefectures = [
	{ id: 1, name: "北海道" },
	{ id: 2, name: "栃木県" },
	{ id: 3, name: "神奈川県" },
	{ id: 4, name: "愛知県" },
];

export const Form = () => {
	return (
		<form className="max-w-sm mx-auto">
			<div className="grid gap-6 ">
				<div>
					<label htmlFor="salary" className="leading-7 text-sm text-gray-600">
						月収例
					</label>
					<select
						id="salary"
						name="salary"
						className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
					>
						{Salaries.map((salary) => (
							<option key={salary.id} value={salary.name}>
								{salary.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="salary" className="leading-7 text-sm text-gray-600">
						希望勤務地
					</label>
					<select
						id="salary"
						name="salary"
						className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
					>
						{Prefectures.map((prefecture) => (
							<option key={prefecture.id} value={prefecture.name}>
								{prefecture.name}
							</option>
						))}
					</select>
				</div>

				<div className="grid gap-4">
					<div>
						<p className="leading-7 text-sm text-gray-600 mb-2">その他希望条件</p>
						<div className="flex items-center">
							<input
								id="dormitory"
								type="checkbox"
								value=""
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label htmlFor="dormitory" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">
								寮
							</label>
						</div>
					</div>
					<div className="flex items-center">
						<input
							id="bounty"
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label htmlFor="bounty" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">
							満了慰労金あり
						</label>
					</div>
					<div className="flex items-center">
						<input
							id="celebrationMoney"
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label htmlFor="celebrationMoney" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600">
							入社祝い金あり
						</label>
					</div>
				</div>
			</div>
		</form>
	);
};
