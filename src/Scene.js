class Scene {
   name = null;
   app = null; //ссылка на приложение

   constructor(name, app)
   {
      Object.assign(this, {name, app});
   }

   init() {} //инициализировать, создавать сцену

   start() {} //запускать

   update() {} //обновить сцену

   stop() {} //прекращать


}