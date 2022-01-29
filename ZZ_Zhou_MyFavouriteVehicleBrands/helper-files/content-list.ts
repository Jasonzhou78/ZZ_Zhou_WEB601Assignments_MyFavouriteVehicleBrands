class ContentList {
    private _cars: Content[]; //define a private array _cars
    constructor() {    //set the initial value of the _cars empty
        this._cars = [];
    }
    get cars(): Content[] {  // define a get function to return _cars
        return this._cars;
      }
/*     set cars(newCars: Content[]) {
        this._cars = newCars;
      } */

      //function to add one car to end of _cars array
      addCars (car:Content) {
        this.cars.push(car);
      }
      
      //function to return the length of _cars array
      numberOfCars (cars:Content[]): number {
          return this._cars.length;
      }

      //function to output properties of a car (with specific index)
      outputOfCarProperty (index:number):string{
          return '<h1>Title:' + this._cars[index].title +'</h1>'+'<h1>Description:'+ this._cars[index].description + '</h1>'+'<h1>Creator:' + this._cars[index].creator + '</h1>' + '<h1>ImgURL:'+ '</h1>' + '<img src = this._cars[index].imgURL>' + '<h1>Type:'+ this._cars[index].type+'</h1>';
      }

}