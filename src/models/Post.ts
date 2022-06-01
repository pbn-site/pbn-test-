export interface IPost {
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;
}

export default class Post implements IPost {
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;

    constructor(obj: any) {
        this.title = obj.title ?? "";
        this.content = obj.content ?? "";
        this.description = obj.description ?? "";
        this.date = obj.date ?? "";
        this.slug = obj.slug ?? "";
    }
}
