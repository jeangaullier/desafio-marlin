export class Noticia{
    id: number = 0;
    title: string = "";
    body: string = "";
    image: string = "";

    constructor(id: number, image:string, title: string, body: string){
        this.id = id;
        this.image = image;
        this.title = title;
        this.body = body;
    }
}