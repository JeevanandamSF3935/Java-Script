document.write("<h1>Objects</h1>")
function Cars(carModel,carColor,carPrice){
    this.CarModel=carModel;
    this.CarColor=carColor;
    this.CarPrice=carPrice;
    this.AutoPilot=function(){
        document.write("<h3>This is auto pilot</h3>")
    }
}
var car1 = new Cars("Honda","Red",200000);
document.write(`<h4>${car1.CarModel}</h4>`);
car1.AutoPilot();