
import * as fs from 'fs'
import * as path from 'path'
import * as xml2js from 'xml2js'
import { HomeBankData } from './homebank'
import { Account } from './account';
import { Payee } from './payee';
import { Category } from './category';
import { Tag } from './tag';
import { Transaction } from './transaction';
import { JulianConverter } from './julian'

export interface IHomeBankParser {

}

export class HomeBankParser implements IHomeBankParser {

    parseString = (xml: string): Promise<HomeBankData> => {
        return new Promise((resolve, reject) => {
            xml2js.parseString(xml, (err, result) => {
                if (err !== undefined && err !== null) {
                    console.error(err);
                    reject(err);
                    return;
                }

                const dateConverter = new JulianConverter();
                const data: any = {};

                data.accounts = result.homebank.account.map(({ $ }) => {
                    return new Account(
                        parseInteger($.key),
                        parseInteger($.type),
                        parseInteger($.curr),
                        $.name,
                        $.number,
                        parseFloat($.initial),
                        parseFloat($.minimum)
                    );
                });

                data.payees = result.homebank.pay.map(({ $ }) => {
                    return new Payee(
                        parseInteger($.key),
                        $.name
                    );
                });

                data.categories = result.homebank.cat.map(({ $ }) => {
                    return new Category(
                        parseInteger($.key),
                        parseInteger($.parent),
                        $.flags,
                        $.name
                    );
                });

                data.tags = result.homebank.tag.map(({ $ }) => {
                    return new Tag(
                        parseInteger($.key),
                        $.name
                    );
                });

                data.transactions = result.homebank.ope.map(({ $ }) => {
                    return new Transaction(
                        $.date,
                        parseFloat($.amount),
                        parseInteger($.account),
                        parseInteger($.dst_account),
                        parseInteger($.paymode),
                        $.flags,
                        parseInteger($.category),
                        parseInteger($.kxfer),
                        parseInteger($.st),
                        $.wording,
                        $.tags,
                        parseInteger($.payee)
                    );
                });

                const homeBankData = new HomeBankData(data.accounts, data.payees, data.categories, data.tags, data.transactions);
                resolve(homeBankData);
                return;
            });
        });
    };

    parseStream = (stream: fs.ReadStream) => { };

    parseFile = (filePath: string): Promise<HomeBankData> => {
        return new Promise((resolve, reject) => {
            const fileExists = fs.existsSync(filePath);
            if (!fileExists) {
                reject("File not found");
                return;
            }

            const fileContent = fs.readFileSync(filePath);
            resolve(this.parseString(fileContent.toString()));
            return;
        });
    };
}


const parseInteger = (x: any): number => {
    const n = parseInt(x, 10);
    return isNaN(n) ? undefined : n;
}