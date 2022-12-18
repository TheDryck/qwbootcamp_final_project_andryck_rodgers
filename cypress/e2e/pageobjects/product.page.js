
class Product{
    get itemName(){
        return ('p.chakra-text.css-1n64n71');
    }

    get itemPrice(){
        return ('div.chakra-stack.css-1ieohnc > p.chakra-text.css-0')
    }

    get selectSortOption(){
        return ('#sort')
    }

    get selectCategoryOption(){
        return ('#category')
    }

    selectSort(sort){
        cy.get(this.selectSortOption).select(sort)
    }

    selectCategory(category){
        cy.get(this.selectCategoryOption).select(category)
    }
}

export default new Product()