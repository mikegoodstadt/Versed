import { Url } from 'url';
export declare class UuidService {
    idCache: string[];
    constructor();
    generate(url?: Url): string;
    cache(id: string): void;
    release(id: string): void;
    private idExists;
}
