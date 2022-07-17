/**
 * Function to populate values in card from form input
 */
 function generateCard() {
  // Get value of Student name from form input 
  const nameElement = document.getElementById("name");
  const nameValue = nameElement.value; 
  // Assign the value of student name to generated card
  const cardNameElement = document.getElementById("cardName");
  cardNameElement.innerHTML = nameValue;

  // Get value of college name from form input 
  const collegeNameValue = document.getElementById("collegeName").value;
  // Assign the value of college name to generated card
  document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

  // Get value of location name from form input 
  const locationValue = document.getElementById("location").value;
  // Assign the value of location name to generated card
  document.getElementById("cardLocation").innerHTML = locationValue;

  // Get value of file name from form input 

  

  
  // Display final generated card to user     
  document.getElementById("collegeCard").style.display = "block";
}

  function loadImage(event) {
    const image = document.getElementById("file").files[0].value;
    image.src = event.target.value;
    imagestore = document.getElementById("fileLocation");
    imagestore =  image.src ;
      console.log(imagestore );
    

  }
