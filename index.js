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


function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

tile('assets/grass.png', 0, 0)
tile('assets/sky.png', 0, 500)

for tile(let y = 0; y < window.innerHeight; y += imageHeight) {
    for (let x = 0; x < window.innerWidth; x += imageWidth) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.style.position = 'fixed';
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      document.body.append(img);
    }
  }

//let grassHeight =window.innerheight-500
//let skyHeight =window.innerHeight -100