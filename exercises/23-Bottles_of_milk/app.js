// Your code here:
let bottlesPlural = 'bottles'
let bottlesSingular = 'bottle'
let texto = '{0} {2} of milk on the wall, {0} {2} of milk.'+ 
            'Take one down and pass it around, {0} {3} of milk on the wall.'
 let texto2 =`No more bottles of milk on the wall, no more bottles of milk.`+
             `Go to the store and buy some more, 99 bottles of milk on the wall.`           



             function sing() {
                for (let i = 99; i > 0; i--) {
                    console.log(texto,i,bottlesSingular);
                    
                }
                
             }

             sing()