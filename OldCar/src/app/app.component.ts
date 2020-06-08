import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // variable to hold API responce data
  carDataAllInOne;
  
  // constructor
  constructor(private service:PostService) {}
  
  // OnInIt function to call the API to get the data
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          // Using 'dataRestructureing' function to add fav and add to cart value to the responce JSON
          this.carDataAllInOne = this.dataRestructureing(response);
        });
  }
  
  // function to add fav and add to cart value to the responce JSON
  dataRestructureing(response){
    for (let objs of response) {
      for (let car of objs.cars.vehicles) {
        car["fav"] = false;
        car["addedToCart"] = false;
      } 
    }

    return response;
  }

  // function on click to FAV
  addToFab($event, carId){    
    for (let objs of this.carDataAllInOne) {
      for (let car of objs.cars.vehicles) {
        if(car["_id"] == carId) {
          car["fav"] = !car["fav"];
        }  
      } 
    }
  }  

  // function on click to add to cart
  addToCart($event, carId){    
    for (let objs of this.carDataAllInOne) {
      for (let car of objs.cars.vehicles) {
        if(car["_id"] == carId) {
          car["addedToCart"] = !car["addedToCart"];
        }  
      } 
    }   
  } 
}