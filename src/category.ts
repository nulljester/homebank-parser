
export class Category {
    /**
     * @param {number} id 
     * @param {number} parentCategoryId 
     * @param {string} flags 
     * @param {string} name 
     */
    constructor(
        public id: number,
        public parentCategoryId: number,
        public flags: string,
        public name: string
    ) { }
}
