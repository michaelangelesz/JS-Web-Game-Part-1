//Bonus part needs to be up top in code for the grass and sky to show on the background

let horizon = window.innerHeight / 1.80 //adjust exact location of horizon
let skyDepth = window.innerHeight-horizon //skydepth will take the rest of the height of the screen, minus grass horizon
let grassHeight = horizon

//defining starting locations of grass tile and sky tile
tile('assets/grass.png', 0, 0, window.innerWidth/100, grassHeight/100)
tile('assets/sky.png', 0, horizon, window.innerWidth/100, skyDepth/100)

//loop for horizon tiles
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

//1st part of the assignment
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/pine-tree.png', 450, 200)

//add query selector for player to pick up items on dblclick
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)