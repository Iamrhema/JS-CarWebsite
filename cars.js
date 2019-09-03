function catalogue(brand,model, price,year,colour,car_segment,engine,top_speed,image,plate_num) {
  // assigning variable for use 
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.price = price;
  this.colour = colour;
  this.car_segment = car_segment;
  this.engine = engine;
  this.top_speed = top_speed;
  this.image = image;
  this.plate_num = plate_num;
  // asigned variable to create descrption box 
  this.showmore = function(){
    // create element
    let car_description = document.createElement("dialog");
    // dscription box 
    car_description.innerHTML = "<b>Year</b> " + year + "<br>" + "<b>Price</b> " + price + "<br>" + "<b>Color</b> " + colour + "<br>"
    + "<b>Car Segmnet</b> " + car_segment + "<br>" + "<b>Engine</b> " + engine + "<br>" + "<b>Top Speed </b> " + top_speed + "<br>" + "<b>Plate number</b> " + plate_num;
    // adding data to the body 
    document.body.appendChild(car_description);
    // enabling pop up description box
    car_description.showModal()
  }
  };

// car info
var car1 = new catalogue( 
    "Audi",
    "R8",
    "$147,676",
    "2010",
    "Mythos Blue",
    "sports cars",
    "V8",
    "201 mph",
    "https://previews.dropbox.com/p/thumb/AAfHUF2g0ze0ip6xrvcYGPkJlRQH2rqHA2wSb3kp0Xff7dS_yUT4pmvIlcxdme241Lh5rwh_tg1RuxapLx33AwxJWUYZmBHK5v4RoJe1yvt1HYeT-KVyizHXV1vMOJVDUC-3Z0imsOO6MM6Q8Zw5WMTklfzEFro6Loi2fs0u5YMeWwszXZi233LMihqQXasKCV0N_DChIHfN0xpAcGf5pWsmqB4vKqKWVC6w9MY3xkOXTEjbUR5eQkU8He_MGspYojVkWfhu8GtyHANdAPkkUgUAz3bhlQow7qisUBZ-Nij4IuEXpooEnTdneb09WcOTpn37XTM6wQdbX5gKg9t0QNBQ/p.jpeg?size=2048x1536&size_mode=3",
    "R8S P120"
)

var car2 = new catalogue(
    "Mclaren",
    "P1",
    "$3.36 million",
    "2014",
    "Mythos Black",
    "supercars",
    "V8",
    "217 mph",
    "https://previews.dropbox.com/p/thumb/AAfAc2wQFn7GCg9JNj_MchJFV1nkVsaEqblO9TsumlO097lbLHUl6W3CZTDcIcfBjZgdqfaEMgqDEs1hb3xllaAVEAAELdUVaZwqWhRqyOr6S0xc2HTKI783Us-eI7zEpFZnf5tarsfqfDE_HkXxoiCdYCDO2c_g3kvUWnXXmOGjPO_vrxK-fvU1oUkCRe9Po9vcYOgGEEqM5xMKoL2tt2Gb8RqRB0NwXHonFSkSuS58SdPXZP33_vvCuDPJfFLdA345Fn5emQ9VlONe6AA7AWT7gc48Ms-okWNL0meWiuKD75_lYp-gmiB6n62M-T1BRsdeqkZVlqQJm8Pe7Pb5q2Km/p.jpeg?fv_content=true&size_mode=5",
    "V20B 12P1"
)

var car3 = new catalogue(
  "Lamborghini",
  "Murcielago",
  "$279 900",
  "2001-2006",
  "Yellow",
  "supercars",
  "V12",
  "201.9 mph",
  "https://previews.dropbox.com/p/thumb/AAfLrHnOhN86k2qZ4rA2H_ncXiv7US6mgYdxkUkEOeRz07gIwAnPPJ0DahyPnfpZo4JMh8tq8PAKR7vtMGSlomFPDxJstTHYBCQRxdiW2MSx8sC-uWfjAFcMe1xH5_QuDR2SNSLuTNNio6ZrAal06jRAwS9Di8eM4veaP1AoAjfEsIk7YLeNMZRDuQNnbjB9md8nRpFhjtXbOBBkUUVDQDI3fgfAb5nM1XO10prN0G5r0cn470RJetm89Wnbo6DvWF3FKAnhaD5dSlETSehMxtzdpUMRz4sTl4CrRrLufJbasi2g6ZYbRoua_CM0WCfguKEhtxQdsDZJaI1QcD6Sp8wU/p.jpeg?fv_content=true&size_mode=5",
  "MLP 3004"
)


var car4 = new catalogue(
    "Lamborghini",
    "Gallardo",
    "$4.5 million",
    "2013",
    "White",
    "supercars",
    "V12",
    "201.9 mph",
    "https://previews.dropbox.com/p/thumb/AAcxve9S1BKiwT-BGy3ckGmwdeuZ9gZ8fAThSdwlN4B9WszaV7RVKX7eU_YPdrm32BYlhC7bOdhPLqTlRBl2vFN-DoRSb8hq_nTLBnxInnnkcSIiz4JxwB8MJqWr-lv5Ut_Cq6pu6gRmMvTsPq0rQ2Jo9NhxWAjB19ANPuYU0dszV0M1PIdlDgsFLfyrqZ14Lj6EFbt1sn4ltsC4oDQ3gX0qjGvf0yaH3cdhdc3BTfE0__0fOlae7p0D7fFuL3xyFG41RTP-DI3Q2Qv8ROOQBjTAespytyAXbDMRFu6vLmLYhNlq_aoNmqMlPPlDylugwhgw6gxTU5d3aORWhBl5Z7SJ/p.jpeg?fv_content=true&size_mode=5",
    "lG E-401"
)

var car5 = new catalogue(
    "Bugatti",
     "Veyron",
    "$3 million,",
    "2005–2015",
     "White",
    "supercars",
    "V10",
    "267.856 mph",
    "https://previews.dropbox.com/p/thumb/AAde2CyLFvZ30Mb6ZlpFCYbyN8ewn0AZdHVlB8AenPK_4wTeJ56hEGpbL24MKHkVpyLF9OhXJ_wTYhOmd7dY7paVtJPLtLhojpqVW4JKGOZlsQNEMCqRbwrcyVhS0QxLnfE2XY7bNza1RGmzW45JZ3vexkSg6dB3Va3A6nAgtvPS5S-Sna2PeZQ5RwrO8kmXA-TIAVnGocxp_77X1NtNoxBe3lqgleYX0b3G4kbP5bSWh8zCT9DvFucIXWvaM0grI16ZlE21cm83-1MJQAHFQMXlJKkt91x0m9PyIgzgQNrj2pMT4Z56CwVHJYpokYYE3cJ9g7Z3mV1zSWQyU8yp_VvO/p.jpeg?size=2048x1536&size_mode=3",
     "BG RUS-32"
)



// fetching a an id from the html file to print on
var carCatalogue = document.getElementById("container");


// adding all objects to be rann through with all the information 
 let objectArray = [car1,car2,car3,car4,car5];

//  assigning a foreach loop for the content
 objectArray.forEach(myfunction);
//  function to pop up car images and name and model
    function myfunction(car){
      let carName = document.createElement("h2");
      carName.innerHTML = car.brand +" " + car.model;
      // making a an image tag
      let carImages = document.createElement("img");
      // function for the image tag when pressed pops up a description box
      carImages.onclick = function(){
        car.showmore()
      }
      // catalogue image 
      carImages.src = car.image;

    // adding the info in the div
      carCatalogue.appendChild(carName);
      carCatalogue.appendChild(carImages);
      // giving the images a class
      carImages.classList.add("img-thumbnail")
    }

    