function bounce(Ob1,Ob2) {
    if (Ob1.x - Ob2.x < Ob2.width/2 + Ob1.width/2
      && Ob2.x - Ob1.x < Ob2.width/2 + Ob1.width/2) {
    Ob1.velocityX = Ob1.velocityX * (-1);
    Ob2.velocityX = Ob2.velocityX * (-1);
  }
  if (Ob1.y - Ob2.y < Ob2.height/2 + Ob1.height/2
    && Ob2.y - Ob1.y < Ob2.height/2 + Ob1.height/2){
    Ob1.velocityY = Ob1.velocityY * (-1);
    Ob2.velocityY = Ob2.velocityY * (-1);
  }
  }