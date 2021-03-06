"use strict";

import HttpService from './HttpService';

export default class ReviewService {

    constructor(){
    }

    static baseURL() {return 'http://localhost:3000/reviews' }

    static getReviews(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    //
    // static createReview(review) {
    //     return new Promise((resolve, reject) => {
    //         HttpService.post(ReviewService.baseURL(), review, function(data) {
    //             resolve(data);
    //         }, function(textStatus) {
    //             reject(textStatus);
    //         });
    //     });
    // }

    static createReview(review) {
        return new Promise((resolve, reject) => {
            HttpService.post(ReviewService.baseURL(), review, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}
