const images = ["flower0.png", "flower1.png", "flower2.png"];
const container_div = document.getElementById("container_div");

/**
 * flower_images is an array of image URLs.
 * target_div is the HTML element within which the image should be appended.
 * x and y are the coordinates for where to position the image.
 */
function ClickToAdvance(flower_images, target_div, x, y) {
  this.images = flower_images; // An array of image urls
  this.frame = 0; // Index of the frame to show
  this.img = document.createElement("img");
  this.img.src = this.images[0];
  this.img.style.position = "absolute";
  this.img.style.left = x + "px";
  this.img.style.top = y + "px";
  target_div.appendChild(this.img);

  /**
   * TODO 1: Implement a method named handleEvent.
   * "handleEvent" should advance to the next frame in the sequence.
   *
   * this.handleEvent = function() {
   *    // Your Code Here...
   * };
   *
   * In other words, add 1 to this.frame, and set
   * this.img.src = this.images[this.frame]
   *
   * Dont increase this.frame beyond the number of frame_images available.
   *
   */

  /**
   * TODO 2: add an event listener for "click" to this.img
   *
   * (This should be outside of the handleEvent function, but inside the ClickToAdvance Object...)
   *
   * Instead of passing the function handleEvent in as a callback,
   * pass `this`.
   *
   * this.img.addEventListener("click", this);
   *
   * `this` referes to the object from ClickToAdvance itself.
   * That object has a handleEvent method on it, so addEvent listener will call that method automatically.
   *
   * Now open up the page and try it!  Your flowers should grow :)
   */
}

for (let i = 0; i < 5; i++) {
  const x = 150 * i;
  const y = Math.floor(Math.random() * 500);
  const flower = new ClickToAdvance(images, container_div, x, y);
}
