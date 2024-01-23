// [id , brand , model , type , pricePerDay, available]
let carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45,12]
];
//1.Print all car brands
carBooking.forEach(b => {
        console.log(b[2]);
    });
    

//2.Print total number of cars available
console.log(" cars available-----------");
c=carBooking.map(i=>i[5]).reduce((s1,s2)=>s1+s2)
console.log(c);

//3.Print sedan cars details
console.log(" cars details-----------");
console.log(carBooking[4]);


//4.Print cars with price per day greater than 60
console.log(" cars price>60-----------");
g=carBooking.filter(num=>num[4]>60).forEach(i => {console.log(i);});

//5.Print details of 'jeep wrangler'
console.log(" jeep deatails-----------");
console.log(carBooking[3]);

//6.Sort cars based on the descending order of the price per day
console.log("  descending order of the price per day-----------");
carBooking.sort((p,q)=>q[4]-p[4]).forEach(i=>console.log(i[4]));

//7.Sort cars based on ascending order of available cars
console.log("  ascending order of available cars-----------");
carBooking.sort((p,q)=>p[5]-q[5]).forEach(i=>console.log(i[5]));
//8.Find the car with the most available cars(availability)
console.log("   of available cars-----------");
c=carBooking.reduce((s1,s2)=>s1[5]>s2[5]?s1:s2)
console.log(c[1]);

//9.Calculate the revenue if all the cars are rented for the day
console.log("   revenue-----------");
c=carBooking.map(i=>i[2]).reduce((s1,s2)=>s1[4]*s2[5] && s1[4]+s2[4])
console.log(c);

//10.Count the number of sedan cars
console.log("   sedan-----------");
g = carBooking.filter(n=>n[3]==='sedan')
console.log(g);


//11.Find the total number of available cars of all type
console.log("---------------------------");
c=carBooking.map(i=>i[5]).reduce((s1,s2)=>s1+s2)
console.log(c);

//12.Find the cars with least availability
c=carBooking.reduce((s1,s2)=>s1[5]<s2[5]?s1:s2)
console.log(c[1]);

//13.Check if there is any car with a price per day of exactly 55
c=carBooking.some(num=>num[4]>55)//
console.log(c?'yes':'no');forEach(i => {
        console.log(i);
   
});


//14)