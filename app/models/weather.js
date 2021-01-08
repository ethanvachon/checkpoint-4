export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.far = Math.floor((data.main.temp - 273.15) * 9/5 + 32)
    this.cel = Math.floor(data.main.temp - 273.15)
  }
  get Template(){
    return `
    
                <div class="card text-left">
                  <div class="card-body">
                    <h5 class="card-title">${this.city}</h5>
                    <h5 onclick="app.weatherController.changeTemp()"><span id="temp">${this.far}</span>°<span id="temp-unit">F</span></h5>
                    <p class="card-text">${this.description}</p>
                  </div>
                </div>
    
    
    
    `
  }
}