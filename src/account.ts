/** Class representing an Account */
export class Account {
    /**
     * @param {number} id 
     * @param {number} typeId 
     * @param {number} currencyId 
     * @param {string} name 
     * @param {string} number 
     * @param {number} initialBalance 
     * @param {number} minimumBalance 
     */
    constructor(
        public id: number,
        public typeId: number,
        public currencyId: number,
        public name: string,
        public number: string,
        public initialBalance: number,
        public minimumBalance: number
    ) { }
}
