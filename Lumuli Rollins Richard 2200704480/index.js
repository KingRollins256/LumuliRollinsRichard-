
let email = "yourstudentname@gmail.com";
let password = "yourregistrationnumber@2024";





// Function for the validation of the Email and password 
function validateCredentials(email, password) {
  if (email == "yourstudentname@gmail.com" && password == "yourregistrationnumber@2024") {
    console.log(`User email is  ${email}, login successfully! `);
  } else {
    console.log("Incorrect user credentials!");
  }

  }


// The correct arguments for the Login succesfull!
// validateCredentials('yourstudentname@gmail.com', 'yourregistrationnumber@2024');
// The wrong arguments for incorrect user credentials
validateCredentials('rollinsrichardlumuligmail.com', '22/U/4480/Ps@2024');
