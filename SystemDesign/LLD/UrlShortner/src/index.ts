class URLShorteningService {
    generateRandomIdentifier(): string {
        return Math.random().toString(32).substring(2, 8);
    }

    shortUrl(): string {
        const generateRandomIdentifier = this.generateRandomIdentifier();
        return 'https://tinyurl.com/'+generateRandomIdentifier;
    }
}

class DatabaseService {
    urlMapping: Map<String, String>;
    constructor() {
        this.urlMapping = new Map();
    }
    setMapping(originalUrl: string, shortner: string) {
        this.urlMapping.set(originalUrl, shortner);
    }
    getShortner(url: string) {
        return this.urlMapping.get(url);
    }
}

const urlShortingService = new URLShorteningService();
const getShortURL = urlShortingService.shortUrl();

const dataBaseService = new DatabaseService();
dataBaseService.setMapping('https://atiqueahmed.com', getShortURL);

console.log(dataBaseService.getShortner('https://atiqueahmed.com'))