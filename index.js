document.getElementById("call-btn").addEventListener("click", () => {
    alert("Calling NIVAS at +91-9418189944...");
  });
  
  document.getElementById("mail-btn").addEventListener("click", () => {
    window.location.href = "mailto:nivasmodular@gmail.com?subject=Inquiry from Website";
  });
  
  document.getElementById("chat-btn").addEventListener("click", () => {
    alert("Opening chat support soon! Stay tuned 😄");
  });

  document.getElementById("send-btn").addEventListener("click", () => {
    const name = document.getElementById("name-Input").value.trim();
    const message = document.getElementById("message-input").value.trim();
  
    if (!name || !message) {
      alert("Please enter both your name and message.");
      return;
    }
  
    alert(`Thanks, ${name}! Your message has been sent successfully.`);
    // Optionally reset the form:
    document.getElementById("name-Input").value = "";
    document.getElementById("message-input").value = "";
  });
  
  