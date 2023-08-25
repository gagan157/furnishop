function clientSlider(id){
   let sliderContent = document.getElementById('clientSays_slider_card')
   let clientWidth = sliderContent.clientWidth
   sliderContent.scrollLeft = (clientWidth*id)
}

let clientbtns = document.getElementById("clientSays_slider_btns").children

Array.from(clientbtns).forEach(element => {
    element.addEventListener('change',()=>{
        let selectedId = 0;
        let {id} = element
        id = id.split('-')[1]
       if(id !== selectedId){            
            selectedId = id
            clientSlider(Number(id))
        }
    })
});

let searchBtn = document.getElementById('serachbtn')
let closeSearchBtn = document.getElementById('searchcrossbtn')
let searchInp = document.getElementById('searchinp')

searchBtn.addEventListener('click',(e)=>{

    searchInp.style.transition = "all .5s"
    searchInp.style.visibility = 'visible'
    searchInp.style.width = "100%"
    searchInp.style.opacity = "1"
    e.currentTarget.style.display = "none"
    closeSearchBtn.style.display = "unset"
})
closeSearchBtn.addEventListener('click',(e)=>{
    searchInp.style.visibility = 'hidden'
    searchInp.style.width = "0"
    searchInp.style.opacity = "0"
    e.currentTarget.style.display = "none"
    searchBtn.style.display = "block"
    
})


let menubar = document.getElementById('menubar')
let closeMenulist = document.getElementById('closemenulist')
let menuList = document.getElementById('menuList')

const menuToggle = (num,px)=>{
    let screenWidth = window.innerWidth
    if(screenWidth <= 1024){
        menuList.style.display = 'flex'
        menuList.style.transform = `translateY(${num}${px})`
    }
}

menuList.addEventListener('click',()=>menuToggle(-100,'%'))
menubar.addEventListener('click',()=>menuToggle(0,''))    

