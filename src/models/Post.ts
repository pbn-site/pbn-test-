export interface IPost {
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;
    image: string;
}

export default class Post implements IPost {
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;
    image: string;

    constructor(obj: any) {
        this.title = obj.title ?? "";
        this.content = obj.content ?? "";
        this.description = obj.description ?? "";
        this.date = obj.date ?? "";
        this.slug = obj.slug ?? "";
        this.image = obj.image ?? "";
    }
}
