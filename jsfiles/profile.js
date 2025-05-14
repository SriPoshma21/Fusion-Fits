
// Check if the user is logged in via localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      // No user logged in, redirect to login page
      window.location.href = "index.html";
    } else {
      document.getElementById("userName").textContent = userData.name || "User";
      document.getElementById("personalName").textContent = userData.name || "User";
      document.getElementById("personalGender").textContent = userData.gender || "N/A";
      document.getElementById("personalDOB").textContent = userData.dob || "N/A";
      document.getElementById("contactPhone").textContent = userData.phone || "N/A";
      document.getElementById("contactEmail").textContent = userData.email;
      document.getElementById("accountCreated").textContent = userData.accountCreated || "N/A";
    }

    // Logout function
    function logout() {
      localStorage.removeItem("user");
      window.location.href = "index.html"; // Redirect to login page
    }

    // Edit profile function (for future implementation)
    function editProfile() {
      // Placeholder for editing profile
      alert("Edit profile functionality will be added soon.");
    }