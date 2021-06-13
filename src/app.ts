const Cowin=require('./Cowin');



let request:{
    pin:string,
    date:string
}[]=[
    {
       pin:"400080",
       date:"13-06-2021" 
    },
    {
        pin:"400081",
        date:"13-06-2021" 
     }
];


request.forEach(function(val,key){
    new Cowin(val.pin,val.date).getResult().then(
        res=>console.log(res)
    );
});

