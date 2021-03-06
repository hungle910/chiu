const view = {};
view.setActiveScreen = (screenName) => {
  // hiểu đây là 1 function
  switch (screenName) {
    case "welcomeScreen":
      document.getElementById("app").innerHTML = components.welcomeScreen;
      break;

    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen; // chèn nội dung từ component


      document
        .getElementById("redirect-to-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        });

        // lấy ra thẻ form
      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // khoong load lai trang
        loginForm.email.value = loginForm.email.value.trim(); // làm cho người dùng nhập 
        //không bị thừa dấu cách bên trái or phải
        const dataLogin = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(dataLogin); // gọi tới hàm controller để xử lý chính tả khi người dùng nhập

      })
      break;

    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("register-form");

      registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // loại bỏ tính năng restart trang web
        const data = { // tạo ra 1 đối tượng để lưu những thông tin mình nhập vào
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(data);
        controller.register(data);
      });

      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;


    // viết thêm phần này vào cho anh
    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen;
      document.getElementById("welcome-user").innerText = 'Welcome to ' + model.currentUser.displayName;
      break;
  }
};