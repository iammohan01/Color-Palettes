const colorP = 
`<div class="colorPalette">
    <div class="color1"></div>
    <div class="color2"></div>
    <div class="color3"></div>
    <div class="color4"></div>
</div>` ;



// Complementary Color Scheme
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    let c4 = document.getElementById("c4");
    let colorEle = document.querySelector(".paletteTab");
    let generatedColors = [[],[],[],[]] ;
    var colors = [] ;
    let colorNo = 0 ;
    let SecondColor;
    function generateColorsPalette(){
        generatedColors[0][0] = randomNumberGen(0,360);
        generatedColors[0][1] = randomNumberGen(50,80) ;
        generatedColors[0][2] = randomNumberGen(30,80) ;

        generatedColors[1][0] = (generatedColors[0][0] + 180)%360 ;
        generatedColors[1][1] = generatedColors[0][1] ;
        generatedColors[1][2] = generatedColors[0][2] ;

        generatedColors[2][0] = randomNumberGen(0,360);
        generatedColors[2][1] = generatedColors[0][1];
        generatedColors[2][2] = generatedColors[0][2] + 10 ;

        generatedColors[3][0] = randomNumberGen(0,360);
        generatedColors[3][1] = generatedColors[0][1] ;
        generatedColors[3][2] = generatedColors[0][2] + 20 ;

        colors.push(generatedColors) ;
        createColorPalatteEle(generatedColors)
        

    }
    function createColorPalatteEle(color){
        let c=[] ;
        let temp = `<div class="colorPalette">`
        let count = 1 ;
        color.forEach((i)=>{ 
            let x = `hsl(${i[0]},${i[1]}%,${i[2]}%)` ;
            c.push(x)
            temp +=( `<div class='color${count++} cp' style="background-color:` + x + `" ></div>` );
        })
        temp += `</div>` ;
        colorEle.innerHTML += temp ; 
    }

    function randomNumberGen(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min) ;
    }



function test(){
    for(let i = 0 ; i < 100 ; i++){
        generateColorsPalette()
    }
}

test();
   
let lastContainer = colorEle.lastChild
colorEle.addEventListener('scroll', () => {
    const scrolled = colorEle.scrollTop+1000;
    const elementPosition = lastContainer.offsetTop;
    if(scrolled >= elementPosition){
        test();
        lastContainer = colorEle.lastChild ;
    }
})
document.getElementsByClassName("cp").addEventListener("mouseover",()=>{
    console.log("df");
})
