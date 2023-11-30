"use strict";
class URLShorteningService {
    generateRandomIdentifier() {
        return Math.random().toString(32).substring(2, 8);
    }
    shortUrl() {
        const generateRandomIdentifier = this.generateRandomIdentifier();
        return 'https://tinyurl.com/' + generateRandomIdentifier;
    }
}
class DatabaseService {
    constructor() {
        this.urlMapping = new Map();
    }
    setMapping(originalUrl, shortner) {
        this.urlMapping.set(originalUrl, shortner);
    }
    getShortner(url) {
        return this.urlMapping.get(url);
    }
}
const urlShortingService = new URLShorteningService();
const getShortURL = urlShortingService.shortUrl();
const dataBaseService = new DatabaseService();
dataBaseService.setMapping('https://atiqueahmed.com', getShortURL);
console.log(dataBaseService.getShortner('https://atiqueahmed.com'));
