# 🌻Flowers Handle Event💐


   ## TODO 1: Implement a method named handleEvent.
   
   * "handleEvent" should advance to the next frame in the sequence.
   
   * >this.handleEvent = function() {
   
   ###  In other words, add 1 to this.frame, and set
   
   > this.img.src = this.images[this.frame] 
   
   ### Dont increase this.frame beyond the number of frame_images available.
   

  
   ## TODO 2: add an event listener for "click" to >this.img
   
   * (This should be outside of the handleEvent function, but inside the >ClickToAdvance Object...)
   
   * Instead of passing the function >handleEvent in as a callback, pass >this.
   
   * >this.img.addEventListener("click", this);
   
   * >this referes to the object from >ClickToAdvance itself.
   
   * That object has a >handleEvent method on it, so >addEventListener will call that method automatically.
   
   * Now open up the page and try it!  Your flowers should grow :)
   
