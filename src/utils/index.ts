import type { Job } from "@/types/interfaces";

const displayDate = (from: string | number, to: string | number) => {
	return [from, to].join(" ─ ");
};

const MONTHS = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
] as const;

export const getMonth = (date: Date) => MONTHS[date.getMonth()];

/**
 *
 * Return an ideal parsed date for the UI
 * @example
 * "JAN - FEB 2021"
 * "2022 - 2023"
 * "2021 - PRESENT"
 */
export const parseDate = (date: Job["date"]) => {
	const { from, to } = date;
	const dateFrom = new Date(from);
	if (!to) {
		return displayDate(dateFrom.getFullYear(), "PRESENT");
	}

	const dateTo = new Date(to);

	if (dateFrom.getFullYear() === dateTo.getFullYear()) {
		const year = dateFrom.getFullYear();
		return displayDate(getMonth(dateFrom), `${getMonth(dateTo)} ${year}`);
	}

	return displayDate(dateFrom.getFullYear(), dateTo.getFullYear());
};
