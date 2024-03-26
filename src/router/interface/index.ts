export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	com?: any;
	index?: boolean;
	path?: string;
	isCache?: boolean;
	meta?: object;
	isLink?: string;
	title: string;
	key?: string;
}
