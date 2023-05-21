function getRandomBetween(min, max) { //возвращает рандомное число от максимального до минимального
	return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom(...args) {  //возвращает случайный элемент среди всех аргументов, которые сюда передадутся
	const index = Math.floor(Math.random() * args.length);
	return args[index];
}

function isUnderPoint(point, element) { //просматриваем точку, где находится на поле
	const { left, top, width, height } = element.getBoundingClientRect();
	const { x, y } = point;

	return left <= x && x <= left + width && top <= y && y <= top + height;
}

function addEventListener(element, ...args) { //навешивает обработщик событий
	element.addEventListener(...args);
	return () => element.removeEventListener(...args);
}

function getRandomSeveral(array = [], size = 1) {
	array = array.slice();

	if (size > array.length) {
		size = array.length;
	}

	const result = [];

	while (result.length < size) {
		const index = Math.floor(Math.random() * array.length);
		const item = array.splice(index, 1)[0];
		result.push(item);
	}

	return result;
}


/*function getRandomBetween(min, max) //возвращает рандомное число от максимального до минимального
{
   return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandonFrom(...args) //возвращает случайный элемент среди всех аргументов, которые сюда передадутся
{
   const index = Math.floor(Math.random() * args.length);
   return args[index];
}

function isUnderPoint(point, element) //просматриваем точку, где находится на поле
{
   const { left, top, width, height } = element.getBoundingClientRect();
   const { x, y } = point;

   return left <= x && x <= left + width && top <= y && y <= top + height; //значит точка над этим элементом

}

function addEventListener(element, ...args) {
   element.addEventListener(...args);
   return () => element.removeEventListener(...args);
}
*/