
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
        
        let generatedComplementaryColor=[] ;
        let count = 1 ;
        color.forEach((i)=>{ 
            let y = hslToHex(i[0],i[1],i[2]) ;
            const colorEle = document.createElement("div")
            const hexText = document.createElement("p")
            hexText.classList.add(`hexText`);

            colorEle.classList.add(`color${count++}`, `cp`);
            colorEle.style.backgroundColor = y ;  
            colorEle.setAttribute("data-bgColor",y)
            colorEle.addEventListener("mouseover",function(){
                hexText.classList.add("dsFlx");
            })
            colorEle.addEventListener("mouseout",function(){
                hexText.classList.remove("dsFlx");
            })
            hexText.addEventListener("click",function(){
                // console.log(this);
                // console.log(this.parentElement);
            let temp = this.innerText ;
            navigator.clipboard.writeText(this.innerText);
            this.innerText = "Copied...!";
            setTimeout(()=>{
                this.innerText = this.parentElement.dataset.bgcolor;
                temp = "";
            },400)
            
            })
            generatedComplementaryColor.push(y);
            hexText.innerText = y ;

            colorEle.append(hexText);
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
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
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
