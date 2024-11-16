import { supabase } from "@/supabase/client";
import type { SearchInput } from "@/types";

const convertBooleanToNumber = (value: boolean) => {
	return value ? 1 : 0;
};

export const fetchJobOffers = async (input: SearchInput) => {
	const data = await supabase
		.from("job_offers")
		.select("*")
		.gte("salary", input.salary)
		.eq("prefecture", input.prefecture)
		.gte("dormitory", convertBooleanToNumber(input.dormitory))
		.gte("bounty", convertBooleanToNumber(input.bounty))
		.gte("celebration_money", convertBooleanToNumber(input.celebrationMoney))
		.gte("proper", convertBooleanToNumber(input.proper));

	return data;
};
