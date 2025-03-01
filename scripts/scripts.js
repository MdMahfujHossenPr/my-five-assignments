document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".card-btn");
    const sendMessage = document.querySelector("#send-message");
    const dateUpdate = document.querySelector("#date-update");
    let dateUpdates = parseInt(dateUpdate.innerHTML);
    console.log(typeof dateUpdates, dateUpdates);
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        alert("akta alert file asar kotha chilo")
        dateUpdates += 1;
        dateUpdate.innerHTML = dateUpdates;
        let sendMessageValue = parseInt(sendMessage.innerHTML) - 1;
        sendMessage.innerHTML = sendMessageValue;
        this.disabled = true;
        this.classList.add("bg-blue-200", "cursor-not-allowed");
        this.classList.remove("bg-blue-700", "hover:bg-blue-800", "dark:bg-blue-600", "dark:hover:bg-blue-700");
      });
    });
  });
  
 


 


