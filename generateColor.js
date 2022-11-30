const colorP = `<div class="colorPalette">
    <div class="color1"></div>
    <div class="color2"></div>
    <div class="color3"></div>
    <div class="color4"></div>
</div>` ;



// Complementary Color Scheme

    let generatedColors = [[],[],[]] ;
    var colorTemp = [] ;
    let colorNo = 0 ;
    let SecondColor;
    function generateColorsPalette(){
        

        

    }
    function generateColor(){
        //color range 0- 360 ;
        // saturation 0-100 ;
        // light 0 -100
        let h = randomNumberGen(0,360);
        let s = randomNumberGen(0,100);
        let l = randomNumberGen(0,100);
        colorTemp.push(h,s,l)
        
    }
    function randomNumberGen(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min) ;
    }

