
export class Transaction {
    constructor(
        public date: Date,
        public amount: number,
        public sourceAccountId: number,
        public destinationAccountId: number,
        public paymentTypeId: number,
        public flags: string,
        public categoryId: number,
        public transferId: number,
        public statusId: number,
        public description: string,
        public tags: string,
        public payeeId: number
    ) { }
}