
import { Account } from './account'
import { Payee } from './payee'
import { Category } from './category'
import { Tag } from './tag'
import { Transaction } from './transaction'


export class HomeBankData {
    /**
     * @param {Account[]} accounts 
     * @param {Payee[]} payees 
     * @param categories 
     * @param tags 
     * @param transactions 
     */
    constructor(
        public accounts: Account[],
        public payees: Payee[],
        public categories: Category[],
        public tags: Tag[],
        public transactions: Transaction[]
    ) { }
}
