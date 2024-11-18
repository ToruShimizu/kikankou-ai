export type SearchInput = {
	salary: string;
	prefecture: string;
	dormitory: boolean;
	bounty: boolean;
	celebrationMoney: boolean;
	proper: boolean;
};

export type JobOffer = {
	bounty: number;
	celebration_money: number;
	created_at: string;
	dormitory: number;
	id: number;
	link: string;
	name: string;
	prefecture: string;
	proper: number;
	salary: number;
};
