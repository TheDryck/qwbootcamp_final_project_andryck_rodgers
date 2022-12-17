
class Product{
    get itemName(){
        return ('p.chakra-text.css-1n64n71');
    }

    get itemPrice(){
        return ('p.chakra-text.css-0')
    }

    get selectSortOption(){
        return ('#sort')
    }

    get selectCategoryOption(){
        return ('#category')
    }

    get selectFavourite(){
        return('#add-to-favorite')
    }

    get removeFavourite(){
        return ('#remove-from-favorite')
    }

    selectSort(sort){
        cy.get(this.selectSortOption).select(sort)
    }

    selectCategory(category){
        cy.get(this.selectCategoryOption).select(category)
    }
}

export default new Product()