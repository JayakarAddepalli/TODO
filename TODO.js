let change = document.getElementById("changevalue");
let ChaValue = parseInt(change.textContent);

//For desktop design light

let sunlogo = document.getElementById("sun");
console.log(sunlogo);
sunlogo.addEventListener("click",sun);

let bodybg = document.querySelector("body");
let bgimage = document.querySelector(".container");
let inputcolor = document.querySelector(".C2");
let itemblock = document.querySelector(".Total");


console.log(bodybg);
console.log(bgimage);
let n = 0;

function sun(){    

    
    n = n + 1;
    if(n%2 !== 0){
        sunlogo.src = "icon-moon.svg";
        sunlogo.style.width ="20px";
        sunlogo.style.height ="20px";
        bodybg.style.backgroundColor = "white";
        bgimage.style.backgroundImage = "url(bg-desktop-light.jpg)";
        inputcolor.style.backgroundColor = "white";
        itemblock.style.backgroundColor = "white";
        itemblock.style.borderStyle = "lighter";
        itemblock.style.borderRadius = "5px";   

        let taskselements = document.querySelectorAll(".tasks");
        taskselements.forEach(function(container1){
            container1.style.backgroundColor = "white";
            let mattercol = container1.querySelector("p");
            let checkboxele = container1.querySelector("input");
            if(checkboxele.checked == true){
                mattercol.style.color = "grey";
            }
            else{
                mattercol.style.color = "black";
            }
        }) 

        
    }
    else{
        sunlogo.src = "icon-sun.svg";
        sunlogo.style.width = "20px";
        sunlogo.style.height = "20px";
        bodybg.style.backgroundColor = "rgb(17, 17, 18)";
        bgimage.style.backgroundImage = "url(bg-desktop-dark.jpg)";
        inputcolor.style.backgroundColor = " rgb(54, 54, 54)";
        itemblock.style.backgroundColor = "rgb(54, 54, 54)";
        itemblock.style.borderStyle = "lighter";
        itemblock.style.borderRadius = "5px";

        let taskselements = document.querySelectorAll(".tasks");
        taskselements.forEach(function(container1){
            container1.style.backgroundColor = "rgb(54, 54, 54)";
            let mattercol = container1.querySelector("p");
            let checkboxele = container1.querySelector("input");
            if(checkboxele.checked == true){
                mattercol.style.color = "grey";
            }
            else{
                mattercol.style.color = "white";
            }
        })
    }
    console.log(n);


    
}

// For add New tasks

function add(){
    let textcontent = document.getElementById("textcontent");
    let taskvalue = textcontent.value;
    
    ChaValue = ChaValue + 1;

    change.textContent = ChaValue;

    console.log(ChaValue);
    console.log(typeof(ChaValue));

   
    
    let container = document.getElementById("tasks");
    let container1 = document.createElement("p");
    container1.classList.add("tasks");
    container1.style.display = "flex";
    container1.style.flexDirection = "row";
    
    console.log(container)
    console.log(container1)

    // For the Each checkbox

    let checkBox =document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.width = "25px";
    checkBox.style.height = "25px";
    checkBox.style.borderStyle = "solid";
    checkBox.style.borderRadius = "25px";
    checkBox.style.borderTopLeftRadius = "25px";
    checkBox.style.backgroundColor = "black"
    checkBox.style.marginTop  = "10px";
    checkBox.style.marginLeft = "10px";
    checkBox.id = "check"
    checkBox.addEventListener("click", checkmatter); // Attach the function as an event listener


    console.log(checkBox)
    
    // For the tasks entered by the user

    let matter= document.createElement("p");
    matter.textContent  = taskvalue;
    matter.style.letterSpacing = "0px"
    matter.style.fontWeight = "200px"
    matter.style.marginLeft = "10px";
    //matter.classList.add("para");


   
    container1.addEventListener("mouseover",mouseOver);
    container1.addEventListener("mouseout",mouseOut);
    
    let divcon = document.createElement("div");
    

    let x = window.matchMedia("(min-width:1440px) and (max-width:1920px)");
    let y = window.matchMedia("(min-width:1024px)");
    let z = window.matchMedia("(min-width:768px)");
    let z1 = window.matchMedia("(width:720px) and (height:1520px)");
    let w = window.matchMedia("(min-width:425px)");
    let p = window.matchMedia("(min-width:375px)");
    let q = window.matchMedia("(min-width:320px)");
    // For the remove button
    
    let buton = document.createElement("img");
    buton.setAttribute("class","btn");
    buton.src = "icon-cross.svg";
    buton.style.position = "absolute";
    if(x.matches){
        buton.style.left = "64%";
        buton.style.transform = "translateX(-64%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "20px";
        matter.style.marginTop = "6px";
    }

    else if (y.matches){
        buton.style.left = "71%";
        buton.style.transform = "translateX(-71%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "20px";
        matter.style.marginTop = "6px";
    }
    else if (z.matches){
        buton.style.left = "78%";
        buton.style.transform = "translateX(-78%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "20px";
        matter.style.marginTop = "6px";
    }
    else if (z1.matches){
        buton.style.left = "70%";
        buton.style.transform = "translateX(-70%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "20px";
        matter.style.marginTop = "6px";
    }
    else if (w.matches){
        buton.style.left = "89%";
        buton.style.transform = "translateX(-89%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "15px";
        matter.style.marginTop = "10px";
    }
    else if (p.matches){
        buton.style.left = "88%";
        buton.style.transform = "translateX(-88%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "14px";
        matter.style.marginTop = "11px";
    }
    else if (q.matches){
        buton.style.left = "87%";
        buton.style.transform = "translateX(-87%)";
        buton.style.transform = "translateY(-5%)";

        matter.style.fontSize = "11px";
        matter.style.marginTop = "14px";
    }


    buton.addEventListener("click",remove);

    
    divcon.appendChild(buton);
    
    console.log(divcon)

    function mouseOver(){
        
        
        
        buton.style.marginLeft = "0px";
        buton.style.marginTop = "13px";
        buton.style.display = "block";
        buton.style.height = "20px"; 
        buton.style.padding = "0px";
        buton.style.alignContent = "center"

        container1.appendChild(divcon);
    }

    function mouseOut(){
        

        buton.style.marginLeft = "0px";
        buton.style.display = " none";

        container1.appendChild(divcon);
    }

    function remove(){
        container1.remove();

        
        if(checkBox.checked == true){
            change.textContent = ChaValue;
        }
        else{
            ChaValue--;
            change.textContent = ChaValue;

            
        }
        
        
    }
    

    console.log(container1);

    container.appendChild(container1);
    container1.appendChild(checkBox);
    container1.appendChild(matter);

    textcontent.value = " "
    
    function checkmatter(){
        if(checkBox.checked == true) {
            if(n%2 !== 0){
                matter.style.textDecoration = "line-through";
                matter.style.color = "grey";
            }
            else{
                matter.style.textDecoration = "line-through";
                matter.style.color = "grey";
            }
           
            ChaValue--;
            change.textContent = ChaValue;
            
        } else {
            if(n%2 !== 0){
                matter.style.textDecoration = "none";
                matter.style.color = "black";
            }
            else{
                matter.style.textDecoration = "none";
                matter.style.color = "white";
            }

            ChaValue++;
            change.textContent = ChaValue;
        }
         
    }

    // Get the "All" button element by its ID
    let all = document.getElementById("All");

    // Attach a click event listener to the "All" button
    all.addEventListener("click", AllElements);

    // Function to handle the "All" button click event
    function AllElements() {
    // Select all checkboxes inside elements with the class "tasks"
    let checkboxes = document.querySelectorAll(".tasks input[type='checkbox']");
    
        all.style.color = "blue";
        active.style.color = "grey";
        completed.style.color = "grey";
        clearcompleted.style.color ="grey";


        // Loop through each checkbox
        checkboxes.forEach(function (checkbox) {
            let parent = checkbox.parentNode;
            
            // Display the parent element (show the checkbox and its content)
            parent.style.display = "flex";
        });
    }

    // Get the "Active" button element by its ID
    let active = document.getElementById("Active");

    // Attach a click event listener to the "Active" button
    active.addEventListener("click", ActiveElements);

    // Function to handle the "Active" button click event
    function ActiveElements() {

        all.style.color = "grey";
        active.style.color = "blue";
        completed.style.color = "grey";
        clearcompleted.style.color ="grey";
        
        let checkboxes = document.querySelectorAll(".tasks input[type='checkbox']");
        
        checkboxes.forEach(function (checkbox) {
            let parent = checkbox.parentNode;
            
            // Check if the checkbox is checked
            if (checkbox.checked) {
            // Hide the parent element (hide the checkbox and its content)
            parent.style.display = "none";
            } else {
            // Display the parent element (show the checkbox and its content)
            parent.style.display = "flex";
            }
        });
    }

    // Get the "Completed" button element by its ID
    let completed = document.getElementById("Completed");

    

    // Attach a click event listener to the "Completed" button
    completed.addEventListener("click", CompletedElements);

    // Function to handle the "Completed" button click event
    function CompletedElements() {

        all.style.color = "grey";
        active.style.color = "grey";
        completed.style.color = "blue";
        clearcompleted.style.color ="grey";

        let checkboxes = document.querySelectorAll(".tasks input[type='checkbox']");
        
        checkboxes.forEach(function (checkbox) {
            let parent = checkbox.parentNode;
            
            // Check if the checkbox is checked
            if (checkbox.checked) {
            // Display the parent element (show the checkbox and its content)
            parent.style.display = "flex";
            } else {
            // Hide the parent element (hide the checkbox and its content)
            parent.style.display = "none";
            }
        });
    }

    let clearcompleted = document.getElementById("ClearCompleted");

    

    clearcompleted.addEventListener("click",ClearCompletedElements);


    function ClearCompletedElements(){

        all.style.color = "grey";
        active.style.color = "grey";
        completed.style.color = "grey";
        clearcompleted.style.color ="blue";

        let checkboxes = document.querySelectorAll(".tasks input[type='checkbox']");
        
        checkboxes.forEach(function(checkbox){
            let parent = checkbox.parentNode;

            if(checkbox.checked){
                container1.remove();
            }
            else{
                parent.style.display = "flex";
            }
        });
        
    }

    //Check if it is dark mode or light mode

    

    if(n % 2 !== 0){
        container1.style.backgroundColor = "white";
        matter.style.color = "black";
        
    }
    else{ 
        container1.style.backgroundColor = "rgb(54, 54, 54)";
        matter.style.color = "white";
        

    }

    
}

