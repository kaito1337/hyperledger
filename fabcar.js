/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const info = {
            users: [
                {
                    "id": 1,
                    "login": "shop1",
                    "name": "shop1",
                    "pass": "123",
                    "role": 6,
                    "balance": 50,
                    "tempRole": 6,
                    "shopId": 1,
                },
                {
                    "id": 2,
                    "login": "shop2",
                    "name": "shop3",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 2
                },
                {
                    "id": 3,
                    "login": "shop3",
                    "name": "shop3",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 3
                },
                {
                    "id": 4,
                    "login": "shop4",
                    "name": "shop4",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 4
                },
                {
                    "id": 5,
                    "login": "shop5",
                    "name": "shop5",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 5
                },
                {
                    "id": 6,
                    "login": "shop6",
                    "name": "shop6",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 6
                },
                {
                    "id": 7,
                    "login": "shop7",
                    "name": "shop7",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 7
                },
                {
                    "id": 8,
                    "login": "shop8",
                    "name": "shop8",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 8,
                },
                {
                    "id": 9,
                    "login": "shop9",
                    "name": "shop9",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 9,
                },
                {
                    "id": 10,
                    "login": "shop10",
                    "name": "shop10",
                    "pass": "123",
                    "shopId": 10,
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                },
                {
                    "id": 11,
                    "login": "shop11",
                    "name": "shop11",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 11,
                },
                {
                    "id": 12,
                    "login": "ivan",
                    "name": "Ivanov Ivan Ivanovich",
                    "pass": "123",
                    "role": 3,
                    "balance": 50,
                    "tempRole": 3,
                    "shopId": 0
                },
                {
                    "id": 13,
                    "login": "semen",
                    "pass": "123",
                    "name": "Semenov Semen Semenovich",
                    "role": 2,
                    "balance": 70,
                    "tempRole": 2,
                    "shopId": 1,
                },
                {
                    "id": 14,
                    "login": "petr",
                    "pass": "123",
                    "name": "Petrov Petr Petrovich",
                    "role": 1,
                    "balance": 110,
                    "tempRole": 1,
                    "shopId": 0,
                },
                {
                    "id": 15,
                    "login": "goldfish",
                    "pass": "123",
                    "name": "goldfish",
                    "role": 4,
                    "balance": 100,
                    "tempRole": 4,
                    "shopId": 0,
                },
                {
                    "id": 16,
                    "login": "ugin",
                    "pass": "123",
                    "name": "Evgenieva Evgeniya Evgenivna",
                    "role": 2,
                    "balance": 80,
                    "tempRole": 2,
                    "shopId": 3,
                },
                {
                    "id": 17,
                    "login": "dima",
                    "pass": "123",
                    "name": "Dmitriev Dmitriy Dmitrievich",
                    "role": 2,
                    "balance": 90,
                    "tempRole": 2,
                    "shopId": 5,
                },
                {
                    "id": 18,
                    "login": "vasya",
                    "pass": "123",
                    "name": "Vasilyev Vasiliy Vasilyevich",
                    "role": 2,
                    "balance": 100,
                    "tempRole": 2,
                    "shopId": 7,
                },
                {
                    "id": 19,
                    "login": "igor",
                    "pass": "123",
                    "name": "Igorev Igor Igorevich",
                    "role": 2,
                    "balance": 150,
                    "tempRole": 2,
                    "shopId": 8,
                },
                {
                    "id": 20,
                    "login": "roman",
                    "pass": "123",
                    "name": "Romanov Roman Romanovich",
                    "role": 1,
                    "balance": 80,
                    "tempRole": 1,
                    "shopId": 0,
                },
                {
                    "id": 21,
                    "login": "nikola",
                    "pass": "123",
                    "name": "Nikolaev Nikolay Nikolaevich",
                    "role": 1,
                    "balance": 90,
                    "tempRole": 1,
                    "shopId": 0,
                },
                {
                    "id": 22,
                    "login": "oleg",
                    "pass": "123",
                    "name": "Olegov Oleg Olegovich",
                    "role": 1,
                    "balance": 100,
                    "tempRole": 1,
                    "shopId": 0,
                },
                {
                    "id": 23,
                    "login": "alex",
                    "pass": "123",
                    "name": "Alexandrova Alexandra Alexandrovna",
                    "role": 1,
                    "balance": 120,
                    "tempRole": 1,
                    "shopId": 0,
                }
            ],
            shops: [{
                "id": 1,
                "city": "Dmitrov",
                "employees": ["semen"],
                "login": "shop1",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 2,
                "city": "Kaluga",
                "employees": [],
                "login": "shop2",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 3,
                "city": "Moscow",
                "employees": ["ugin"],
                "login": "shop3",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 4,
                "city": "Ryazan",
                "employees": [],
                "login": "shop4",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 5,
                "city": "Samara",
                "employees": ["dima"],
                "login": "shop5",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 6,
                "city": "Saint-Petersburg",
                "employees": [],
                "login": "shop6",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 7,
                "city": "Taganrog",
                "employees": ["vasya"],
                "login": "shop7",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 8,
                "city": "Tomsk",
                "employees": ["igor"],
                "login": "shop8",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            },
            {
                "id": 9,
                "city": "Habarovsk",
                "employees": [],
                "login": "shop9",
                "rate": 0,
                "products": [{}],
                "orders": [{}],
                "returns": [{}]
            }
            ],
            coms: [
                {
                    "text": "Отличное качество товара!",
                    "id": 1,
                    "parent": 1,
                    "point": 10,
                    "login": "10",
                    "likes": 25,
                    "dislikes": 0,
                    "answers": [{
                        "text": "подтверждаю",
                        "id": 1,
                        "login": "petr",
                        "point": 9,
                        "likes": 20,
                        "dislikes": 2
                    }]
                },
                {
                    "text": "Быстрое обслуживание",
                    "id": 2,
                    "parent": 1,
                    "point": 9,
                    "login": "petr",
                    "likes": 15,
                    "dislikes": 1,
                    "answers": [{
                        "text": "А я долго ждал(((",
                        "id": 1,
                        "login": "nikola",
                        "point": 2,
                        "likes": 0,
                        "dislikes": 11
                    },
                    {
                        "text": "Магазин приносит свои извинения",
                        "id": 2,
                        "login": "semen",
                        "point": 0,
                        "likes": 40,
                        "dislikes": 15
                    }]
                },
                {
                    "text": "Ничего особенного",
                    "id": 3,
                    "parent": 3,
                    "point": 5,
                    "login": "roman",
                    "likes": 3,
                    "dislikes": 20,
                    "answers": [{
                        "text": "Не согласен с вами, всё супер!",
                        "id": 1,
                        "login": "petr",
                        "point": 10,
                        "likes": 15,
                        "dislikes": 0
                    }]
                },
                {
                    "text": "Спасибо мне всё понравилось!",
                    "id": 4,
                    "parent": 3,
                    "point": 8,
                    "login": "alex",
                    "likes": 23,
                    "dislikes": 1,
                    "answers": [{
                        "text": "И мне!",
                        "id": 1,
                        "login": "roman",
                        "point": 9,
                        "likes": 36,
                        "dislikes": 5
                    }]
                },
                {
                    "text": "Мне нахамил продавец.",
                    "id": 5,
                    "parent": 8,
                    "point": 1,
                    "login": "alex",
                    "likes": 10,
                    "dislikes": 2,
                    "answers": [{
                        "text": "Поддерживаю",
                        "id": 1,
                        "login": "petr",
                        "point": 2,
                        "likes": 11,
                        "dislikes": 0
                    }]
                },
                {
                    "text": "Сервис на троечку",
                    "id": 6,
                    "parent": 8,
                    "point": 3,
                    "login": "oleg",
                    "likes": 15,
                    "dislikes": 2,
                    "answers": [{
                    }]
                }],

            products: [
                {
                    "title": "Креветка",
                    "manufacturer": "Россия",
                    "date": "5/4/21",
                    "shelfLife": 30,
                    "minTemperature": -20,
                    "maxTemperature": -5,
                    "izm": "КГ", // unit
                    "price": 0.03,
                }
            ],
            deliveryRequests: [
                {
                    "shopId": 2,
                    "title": "Apple",
                    "count": 20,
                    "price": 5,
                    "status": false,
                    "deliveryTemperature": [5, 2, 3, 5, 1],
                }
            ],

        }

        const objKeys = Object.keys(info);

        for (let i = 0; i < objKeys.length; i++) {
            await ctx.stub.putState(objKeys[i], Buffer.from(JSON.stringify(info[objKeys[i]])));
        }
        const p = await ctx.stub.getState('users');
        console.log(p);
        console.info('============= END : Initialize Ledger ===========');
    }

    async transfer(ctx, from, to, value) {
        let result = false;
        let users = JSON.parse((await ctx.stub.getState('users')).toString());
        if (users[from].balance >= value) {
            users[from].balance -= value;
            users[to].balance += value;
            result = true;
            await ctx.stub.putState('users', Buffer.from(JSON.stringify(users)));
        }
        return result;
    }
    
    async checkTemperatureOut(ctx, index) {
        let products = JSON.parse((await ctx.stub.getState('products')).toString());
        let deliveryRequests = JSON.parse((await ctx.stub.getState('deliveryRequests')).toString());
        let product = products.find((el) => el.title == deliveryRequests[index].title);
        let discountCounter = 0;
        for (let i of deliveryRequests[index].deliveryTemperature) {
            if (i < product.minTemperature || i > product.maxTemperature) {
                discountCounter++;
            }
        }
        if (discountCounter !== 0) {
            deliveryRequests[index].price -= deliveryRequests[index].price * (discountCounter * 0.1);
        }
        await ctx.stub.putState('deliveryRequests', Buffer.from(JSON.stringify(deliveryRequests)))
        return discountCounter;
    }

    async createProduct(ctx, title, manufacturer, date, shelfLife, minTemperature, maxTemperature, izm, price) {
        let product = { title, manufacturer, date, shelfLife, minTemperature, maxTemperature, izm, price }
        let products = JSON.parse((await ctx.stub.getState('products')).toString());
        products.push(product);
        await ctx.stub.putState('products', Buffer.from(JSON.stringify(products)));
        return JSON.stringify("Success");
    }

    async getProducts(ctx) {
        const products = (await ctx.stub.getState('products')).toString()
        return products;
    }

    async getDelivery(ctx) {
        const deliveryRequests = (await ctx.stub.getState('deliveryRequests')).toString();
        return deliveryRequests;
    }

    async getMyDelivery(ctx, shopId) {
        const deliveryRequests = JSON.parse((await ctx.stub.getState('deliveryRequests')).toString());
        const index = deliveryRequests.findIndex((el) => el.shopId == shopId);
        console.log(deliveryRequests);
        if(index == -1){
            return JSON.stringify("Shop not found");
        }
        const request = deliveryRequests[index];
        return request;
    }

    async getRate(ctx, shopId) {
        let shops = JSON.parse((await ctx.stub.getState('shops')).toString());
        let coms = JSON.parse((await ctx.stub.getState('coms')).toString());
        let index = shops.findIndex((el) => el.id == shopId);
        if (index == -1) {
            console.log(index);
            console.log(shopId);
            console.log(shops);
            return JSON.stringify(index, shopId);
        }
        let commArray = coms.filter((el) => el.parent == shopId);
        if (commArray.length == 0) {
            return JSON.stringify("Rate = 0")
        }
        let sumOfComm = 0;
        let sumOfAns = 0;
        let counter = 0;
        for (let i = 0; i < commArray.length; i++) {
            if (commArray[i].likes >= 10 && commArray[i].point !== 0 && commArray[i].likes > commArray[i].dislikes) {
                sumOfComm += commArray[i].point * (commArray[i].likes / (commArray[i].likes + commArray[i].dislikes));
                for (let j = 0; j < commArray[i].answers.length; j++) {
                    if (commArray[i].answers[j].likes >= 10 && commArray[i].answers[j].point !== 0 && commArray[i].answers[j].likes > commArray[i].answers[j].dislikes) {
                        sumOfAns += commArray[i].answers[j].point * (commArray[i].answers[j].likes / (commArray[i].answers[j].likes + commArray[i].answers[j].dislikes))
                        counter++
                    }
                }
                counter++
            }
        }
        let rate = Math.ceil((sumOfComm + sumOfAns) / counter * 100) / 100;
        shops[index].rate = rate;
        await ctx.stub.putState('shops', Buffer.from(JSON.stringify(shops)))
        return rate;
    }

    async requestDelivery(ctx, shopId, title, count){
        let products = JSON.parse((await ctx.stub.getState('products')).toString());
        let deliveryRequests = JSON.parse((await ctx.stub.getState('deliveryRequests')).toString());
        let shops = JSON.parse((await ctx.stub.getState('shops')).toString());
        let product = products.find((el) => el.title == title);
        let shop = shops.find((el) => el.id == shopId);
        if (shop) {
            if (product) {
                let cof = count <= 100 ? 1 : count <= 1000 ? 0.95 : 0.9
                let price = Math.ceil((product.price - (product.price * shop.rate) / 100) * count * cof * 100000) / 100000;
                deliveryRequests.push({ shopId, title, count, price, status: false, deliveryTemperature: [] });
                await ctx.stub.putState('deliveryRequests', Buffer.from(JSON.stringify(deliveryRequests)))
                return JSON.stringify("Success added a request");
            }
            return JSON.stringify("Product not found");
        }
        return JSON.stringify("Shop not found");
    }

    async acceptPrice(ctx, solution, shopId){
        const deliveryRequests = JSON.parse((await ctx.stub.getState('deliveryRequests')).toString());
        const index = deliveryRequests.findIndex((el) => el.shopId == shopId);
        let products = JSON.parse((await ctx.stub.getState('products')).toString());
        const product = products.find((el) => el.title == deliveryRequests[index].title);
        if (index == -1) {
            return JSON.stringify("Request not found");
        }
        if (solution) {
            deliveryRequests[index].status = solution;
            for (let i = 0; i < 5; i++) {
                let temperature = Math.floor(Math.random() * (product.maxTemperature - product.minTemperature + 1) + product.minTemperature)
                deliveryRequests[idx].deliveryTemperature.push(temperature);
            }
            await ctx.stub.putState('deliveryRequests', Buffer.from(JSON.stringify(deliveryRequests)))
            return JSON.stringify("Price accepted");
        } else {
            deliveryRequests.splice(index, 1);
            await ctx.stub.putState('deliveryRequests', Buffer.from(JSON.stringify(deliveryRequests)))
            return JSON.stringify("Price canceled");
        }
        
    }

}
module.exports = FabCar;
