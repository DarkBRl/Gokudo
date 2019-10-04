import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";
@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  model = new Model();
  getName() {
  	return this.model.user;
  }
  getTodoItems() {
  	return this.model.items;
  }

  //getTodo
  getTodoItemsFalse(){
  	return this.model.items.filter(item => !item.done);
  	
  }
  getTodoItemsTrue(){
  	return this.model.items.filter(item => item.done);
  }
  //getTodo,

  addItem(newItem,alta,media,baixa,data){
  	if (alta.checked) {
  		if (newItem != "") {
  			this.model.items.push(new TodoItem(newItem, false, "Alta", data.value))
  		}
  	}
	if (media.checked) {
  		if (newItem != "") {
  			this.model.items.push(new TodoItem(newItem, false, "Média", data.value))
  		}
  	}
	if (baixa.checked) {
  		if (newItem != "") {
  			this.model.items.push(new TodoItem(newItem, false, "Baixa", data.value))
  		}
  	}
  }
   dateOrder(){
    return this.model.items.sort((a,b)=>{
      return <any>new Date(b.data)-<any>new Date(a.data);
    });
  }
}