

export interface GifI {
    id: string,
    title: string,
    url: string,
}

export class Convert {
    public static SearchResponseFromJSon(body: any): GifI[] {
        const { data } = body;
        const gifs = data.map((e: any) => {
            const gif: GifI = {
                id: e['id'],
                title: e['title'],
                url: e['images']['downsized_medium']['url']
            }
            return gif;
        }

        );

        return gifs;
    }
}
