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
        const element = document.createElement("div");
        element.classList.add("colorPalette");
        
        let c=[] ;
        let count = 1 ;
        color.forEach((i)=>{ 
            let y = hslToHex(i[0],i[1],i[2]) ;
            const colorEle = document.createElement("div")

            colorEle.classList.add(`color${count++}`, `cp`);
            colorEle.style.backgroundColor = y ;  
            colorEle.setAttribute("data-bgColor",y)
            colorEle.addEventListener("mouseover",function(){
                console.log(this.dataset.bgcolor);
            })
            c.push(y);
            element.append(colorEle);
        })
        colorEle.append(element)
    }
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
          const k = (n + h / 30) % 12;
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
      }

    function randomNumberGen(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min) ;
    }

    let i = 0 

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
