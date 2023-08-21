export interface Job {
	role: string;
	company: string;
	description: string;
	url: string;
	from: string;
	to?: string;
	stack: string[];
	id: string;
}

export interface Project {
	name: string;
	description: string;
	image: Record<string, string>;
	slug: string;
	stack: string[];
	demourl: string;
	repourl: string;
	id: string;
	company?: string;
}
