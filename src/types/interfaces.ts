export interface Job {
	position: string;
	company: string;
	description: string;
	url: string;
	date: {
		from: string;
		to?: string;
	};
	stack: string[];
	id: string;
}

export interface Project {
	name: string;
	description: string;
	image: string;
	slug: string;
	stack: string[];
	demoUrl: string;
	repoUrl: string;
	id: string;
}
