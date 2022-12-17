
class Product{
    get itemName(){
        return ('p.chakra-text.css-1n64n71');
    }

    get itemPrice(){
        return ('p.chakra-text.css-0')
    }

    get selectSort(){
        return ('#sort')
    }

    selectSort(sort){
        cy.get(this.selectSort).select(sort)
    }
}