function  drawFruits(){

    const remainingFruits = fruitsCordinates.filter((item) => {
    return !collectedFruits.some((collected) => {
        return collected.position.x === item.x1 && collected.position.y === item.y1;
      });
    });

    fruitsCordinates = remainingFruits;

    fruitsCordinates.forEach((item)=>{
    let selectedFruits = fruits[item.index]
    const selectedFruit = selectedFruits.sprite(item.x1,item.y1)
    selectedFruit.totalFrame = 17; 
    selectedFruit.position.x = item.x1;
    selectedFruit.position.y = item.y1;
    FruitCollisionCheck(player,selectedFruit)
    spriteSlider(selectedFruit)
  })
}

function FruitCollisionCheck(player,spriteInstance){
  if(onCollision(player,spriteInstance))
  {
    collectedFruits.push(spriteInstance);
    spriteInstance.spriteImg.src = "./assets/Items/Fruits/Collected.png"
    spriteInstance.totalFrame = 6

  }
}