let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    let personas = parseInt(guests)
    if(personas > 200){
        cost = 20000
     } else{
        if(personas <= 200 && personas >= 101){
            cost = 15000
        } else{
            if(personas <= 100 && personas >= 51){
                cost = 10000
            }else{
                cost = 4000
            }
        }
     }
        return cost;
    }
    let price = getPrice(guests);
    console.log('Your wedding will cost '+price+' dollars');
        