import { observable, makeObservable } from 'mobx'

export class Item {

    constructor(name) {
        this.name = name
        this.location = "Super Sell"
        this.completed = false
        this.location = "Super Sell"

        makeObservable(this, {
            name: observable,
            location: observable,
            completed: observable
        })
    }
}