'use strict';

let hour = ['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total']


let seattle = {
    Location:'Seattle',
    minCusPerHour:23 ,
    maxCusPerHour :65 ,
    avgCookPerCus :6.3,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        for(let i = 0 ; i <hour.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
        }
    },

    randCusPerHour:function(min,max)
    {
    
        let sum = 0;
        return Math.floor(Math.random() * (max - min + 1) + min); 

    },
    calCookPerHour:function(){
      for(let i=0;i<hour.length;i++)
      {
          this.cookPerHour.push(Math.floor(this.randCusPerHour(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPerCus));
      }
     
    }

};
seattle.calCookPerHour();
seattle.render();
console.log(seattle.cookPerHour);

let tokyo = {
    Location:'Tokyo',
    minCusPerHour:3 ,
    maxCusPerHour :24 ,
    avgCookPerCus :1.2,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        for(let i = 0 ; i <hour.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
        }
    },
    randCusPerHour:function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min); 

    },
    calCookPerHour:function(){
      for(let i=0;i<hour.length;i++)
      {
          this.cookPerHour.push(Math.floor(this.randCusPerHour(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPerCus));
      }
    }

};
tokyo.calCookPerHour();
tokyo.render();
console.log(tokyo.cookPerHour);

   

    


let dubai = {
    Location:'Dubai',
    minCusPerHour:11 ,
    maxCusPerHour:38 ,
    avgCookPerCus:3.7,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        for(let i = 0 ; i <hour.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
        }
    },
    randCusPerHour:function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min); 

    },
    calCookPerHour:function(){
      for(let i=0;i<hour.length;i++)
      {
          this.cookPerHour.push(Math.floor(this.randCusPerHour(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPerCus));
      }
    }

};
dubai.calCookPerHour();
dubai.render();
console.log(dubai.cookPerHour);




let paris = {
    Location:'Paris',
    minCusPerHour:20,
    maxCusPerHour :38 ,
    avgCookPerCus :2.3,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        for(let i = 0 ; i <hour.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
        }
    },
    randCusPerHour:function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min); 

    },
    calCookPerHour:function(){
      for(let i=0;i<hour.length;i++)
      {
          this.cookPerHour.push(Math.floor(this.randCusPerHour(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPerCus));
      }
    }
};
paris.calCookPerHour();
paris.render();
console.log(paris.cookPerHour);





let lima = {
    Location:'Lima',
    minCusPerHour:2,
    maxCusPerHour:16,
    avgCookPerCus:4.6,
    cookPerHour:[],
    render:function (){
        let parent=document.getElementById('mainpage')
        let ulEl = document.createElement('ul');
        let shopName = document.createElement('h1');
        shopName.textContent=this.Location;
        parent.appendChild(shopName);
        parent.appendChild(ulEl);
        let liEl; 
        for(let i = 0 ; i <hour.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hour[i]+' : ' + this.cookPerHour[i];
        }
    },
    randCusPerHour:function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min); 

    },
    calCookPerHour:function(){
      for(let i=0;i<hour.length;i++)
      {
          this.cookPerHour.push(Math.floor(this.randCusPerHour(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPerCus));
      }
    }
};
lima.calCookPerHour();
lima.render();
console.log(lima.cookPerHour);







