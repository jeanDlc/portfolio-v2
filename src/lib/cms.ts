interface ReqParams {
	query: string;
	variables: any;
	includeDrafts?: boolean;
}

const DATO_CMS_URL = process.env.DATO_CMS_URL ?? "";

export const performRequest = async <T>({ query, variables, includeDrafts = false }: ReqParams) => {
	const response = await fetch(DATO_CMS_URL, {
		headers: {
			Authorization: `Bearer ${process.env.DATO_CMS_API_TOKEN}`,
			...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
		},
		method: "POST",
		body: JSON.stringify({ query, variables }),
	});

	const resJson = await response.json();

	const data: T = resJson.data;

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(resJson)}`);
	}

	return data;
};
