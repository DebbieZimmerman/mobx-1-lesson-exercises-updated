import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const newLocation = prompt("Please enter a new location")
    this.props.store.editItem(this.props.item.name, newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className = {item.completed ? "crossed": null}>
      <input type="checkbox" onClick={this.checkItem}
          value={item.name}/> 
          {item.name} - {item.location} 
          <button className="editButton" onClick={this.editItem}>edit</button>
          <button className="deleteButton" onClick={this.deleteItem}>delete</button>
      </div>)
  }
}

export default observer(Item)