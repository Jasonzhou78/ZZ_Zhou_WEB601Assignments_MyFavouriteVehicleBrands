export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    drive: any;
    imgURL?: string;
    type?: string;
    tags?: string[];
}