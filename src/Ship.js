class Ship {
	size = null;
	direction = null;
	killed = false;

	x = null;
	y = null;

	get placed() {
		return this.x !== null && this.y !== null;
	}

	constructor(size, direction) {
		this.size = size;
		this.direction = direction;
	}
}


/*class Ship {
   size = null;
   direction = null;
   killed = false; //изначально не убит

   x = null; //координаты
   y = null;

   get placed() //узнаем расположен ли корабдь уже на поле
   {
      return this.x !== null && this.y !== null;
   }

   constructor(size, direction) {
      this.size = size;
      this.direction = direction;
   }
}
*/