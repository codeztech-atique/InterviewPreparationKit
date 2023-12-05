"use strict";
class URLShortner_Service {
    generateRandom_String() {
        return Math.random().toString(32).substring(2, 8);
    }
    genratedShortUrl() {
        const getRandom = this.generateRandom_String();
        return "https://tinyurl.com/" + getRandom;
    }
}
class DatabaseService {
    constructor() {
        this.mapUrl = new Map();
    }
    setUrl(originalUrl, tinyUrl) {
        this.mapUrl.set(originalUrl, tinyUrl);
    }
    getUrl(originalUrl) {
        return this.mapUrl.get(originalUrl);
    }
}
const url = "https://atiqueahmed.com";
const urlShortner = new URLShortner_Service();
const databaseService = new DatabaseService();
databaseService.setUrl(url, urlShortner.genratedShortUrl());
console.log(databaseService.getUrl(url));
console.log(databaseService.mapUrl);
