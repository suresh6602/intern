const protectEmail = (email) => {
    // Split the email address into local part and domain
    const [localPart, domain] = email.split('@');
    
    // Get the first two letters and last two letters of the local part
    const firstTwoLetters = localPart.substring(0, 2);
    const lastTwoLetters = localPart.substring(localPart.length - 2);
    
    // Replace the remaining characters in the local part with asterisks
    const protectedLocalPart = firstTwoLetters + '*'.repeat(localPart.length - 4) + lastTwoLetters;
    
    // Concatenate the protected local part and domain back together
    const protectedEmail = `${protectedLocalPart}@${domain}`;
    
    return protectedEmail;
  };
  
  const email = 'navadhiti@gmail.com';
  const protectedEmail = protectEmail(email);
  console.log(protectedEmail); 
  