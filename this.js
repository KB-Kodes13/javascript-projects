// Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.
const photoSlideShow = {
//The object should have properties for:
  // 1. An array called photoList that contains the names of the photos as strings
    photoList: ['photo1', 'photo2', 'photo3', 'photo4'],

  // 2. An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 0,

  // 3. A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, 
  //and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow"
    nextPhoto () {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
          }
    },
  // 4. A prevPhoto() function that does the same thing, but backwards.
    prevPhoto () {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
          } else {
            console.log("Start of slideshow");
          }
      
    },

  // 5. A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto () {
        return this.photoList[this.currentPhotoIndex];
    }
}

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();