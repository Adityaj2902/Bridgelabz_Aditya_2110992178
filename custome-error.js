class ValidationError extends Error{
    constructor(message,field){
        super(message);
        this.name="validationError";
        this.field=field;
    }
}

class AuthorizationError extends Error{
    constructor(message){
        super(message);
        this.name='Authorization User';
        
    }
}

function validateUserInput(input) {
  if (!input.username) {
    throw new ValidationError('Username is required', 'username');
  }
  if (input.password.length < 6) {
    throw new ValidationError('Password must be at least 6 characters long', 'password');
  }
  if (!input.role) {
    throw new AuthorizationError('User role is missing');
  }
  return 'Validation successful';
}

try {
  const input = { username: 'Aditya', password: '1234567', role: null };
  console.log(validateUserInput(input));
} 
catch (error) {
  if (error instanceof ValidationError) {
    console.error(`${error.name} - ${error.message} in field: ${error.field}`);
  } else if (error instanceof AuthorizationError) {
    console.error(`${error.name} - ${error.message}`);
  } else {
    console.error('Unknown error:', error);
  }
}
 