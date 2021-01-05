/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = this.list.length
        
        makeObservable(this, {
            list: observable,
            checkItem: action,
            addItem: action,
            editItem:action,
            deleteItem:action,
            length: observable
        })

    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        const item = new Item(name)
        this.list.push(item)
    }
    editItem = (itemName, newLocation) => {
        const item = this.list.find(l => l.name === itemName)
        item.location = newLocation
    }
    deleteItem = (itemName) => {
        const index = this.list.findIndex(l => l.name === itemName)
        this.list.splice(index, 1)
    }
}

