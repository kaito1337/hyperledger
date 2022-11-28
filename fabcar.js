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
                    "id": 3 ,
                    "login": "shop3" ,
                    "name": "shop3",
                    "pass": "123",
                    "role": 6,
                    "balance": 0,
                    "tempRole": 6,
                    "shopId": 3
                }
            ],
            shops: [
                
            ],
            coms: [

            ],
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
        }

        const objKeys = Object.keys(info);

        for (let i = 0; i < objKeys.length; i++) {
            await ctx.stub.putState(objKeys[i], Buffer.from(JSON.stringify(info[objKeys[i]])));
        }
        const p = await ctx.stub.getState('users');
        console.log(p);
        console.info('============= END : Initialize Ledger ===========');
    }

    async yanis(ctx, title, kek){
        const p = await ctx.stub.getState('users');
        console.log(title, kek);
        return p.toString();
    }
    
    async createProduct(ctx, title, manufacturer, date, shelfLife, minTemperature, maxTemperature, izm, price){
        let product = {title, manufacturer, date, shelfLife, minTemperature, maxTemperature, izm, price}
        let products = JSON.parse((await ctx.stub.getState('products')).toString());
        console.log(products);
        products.push(product);
        console.log(products)
        await ctx.stub.putState('products', Buffer.from(JSON.stringify(products)));
        return JSON.stringify("Success");
    }

    async getProducts(ctx){
        const products = await ctx.stub.getState('products')
        return products.toString();
    }

    async getRate(ctx, shopId){
        let shops = await ctx.stub.getState('shops');
        let coms = await ctx.stub.getState('coms');
        let index = shops.findIndex((el) => el.id == shopId);
        if(index == -1){
            return res.status(500).json({error: "Shop not found"});
        }
        let commArray = coms.filter((el) => el.parent == shopId);
        if(commArray.length == 0){
            return res.status(200).json({message: "Rate = 0"});
        }
        let sumOfComm = 0;
        let sumOfAns = 0;
        let counter = 0;
        for(let i = 0; i < commArray.length; i++){
            if(commArray[i].likes >= 10 && commArray[i].point !== 0 && commArray[i].likes > commArray[i].dislikes){
                sumOfComm += commArray[i].point * (commArray[i].likes/(commArray[i].likes+commArray[i].dislikes));
                for(let j = 0; j < commArray[i].answers.length; j++){
                    if(commArray[i].answers[j].likes >= 10 && commArray[i].answers[j].point !== 0 && commArray[i].answers[j].likes > commArray[i].answers[j].dislikes){
                    sumOfAns += commArray[i].answers[j].point * (commArray[i].answers[j].likes/(commArray[i].answers[j].likes+commArray[i].answers[j].dislikes))
                    counter++
                    }
                }
                counter++
            }
        }
        const rate = Math.ceil((sumOfComm + sumOfAns) / counter * 100) / 100;
        shops[index].rate = rate;
        await ctx.stub.putState('shops', Buffer.from(JSON.stringify(shops)))
        return rate.toString();
    }

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllCars(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}
module.exports = FabCar;
