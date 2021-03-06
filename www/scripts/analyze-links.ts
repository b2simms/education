
import { linksObj } from "./links";

interface ILink {
	count: number,
	href: string,
	text: string,
	id: string;
}

async function find() {
	const map = new Map();
	try {
		// match group one will contain the link text
		const regexHref = new RegExp(/href=(["'])(.*?)\1/g);

		for (const link of linksObj) {
			const href = link.href.match(regexHref);
			if (!href) {
				continue;
			}
			let text = link.href.replace(/<[^<>]*\>/g, "");
			text = text.replace(/\s/g, "");
			const hrefLink = href[0].substring(6, href[0].length - 1);
			map.set(hrefLink, buildData(map, hrefLink, text, link.key));
		}
		map.forEach((item) => {
			console.log();
			console.info("ID: " + item.id);
			console.info("Name: " + item.text);
			console.info("Link: " + item.href);
			console.log();
		});
	} catch (err) {
		console.error("Error occurred:", err);
	};
}

function buildData(map: Map<string, ILink>, key: string, text: string, id: string): ILink {
	// if it does not exist, create a default object
	if (!map.has(key)) {
		return {
			count: 1,
			id: "INDICATORS_" + id,
			text,
			href: key,
		}
	}
	const curr = map.get(key)!;
	return {
		count: curr.count + 1,
		text,
		id: curr.id,
		href: key,
	}
}

find();
