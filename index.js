// log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
//grab the unordered list and store in a const variable called ulEl

const ulEl = document.getElementById("ul-el")

// store the delete button in a deleteBtn variable

const deleteBtn = document.getElementById("delete-btn")

// Grab the save tab button and store it in a tab btn button

const tabBtn = document.getElementById("tab-btn")



// save a key-value pair in localStorage
// let name = localStorage.getItem("myLeads", "examplelead.com")

// Get the leads from the localStorage-P.S: JSON.PARSE()

//JSON.parse( localStorage.getItem("myLeads"))
// turn myLeads string into an array
//myLeads = JSON.parse(myLeads);

// Push a new value to the array
//myLeads.push("www.lead2.com")

//Turn the array into a string again

//myLeads = JSON.stringify(typeof myLeads)

 
 

// Store it in a variable, leadsFromlocalStorage
const leadsFromlocalStorage = JSON.parse( localStorage.getItem("myLeads"))


// Check if leadsFromLocalStorage is truthy

if(leadsFromlocalStorage) {
    myLeads = leadsFromlocalStorage
    render(myLeads )
}


// Listen for clicks on tabBtn. Log Ify's fb url to the console
tabBtn.addEventListener("click", function() {
    // Grab the URL of the current tab! via stackoverflow

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
        //since only one tab should be active and in the current window at once
        // the return variable should only have one entry

        //let activeTab = tabs[0]
        // let activeTabid // or do whatever you need
    });

    //save the URL instead of just logging it out
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify( myLeads ))
      

    //console.log(myLeads)

    // Call the renderLeads() function
    render(myLeads)


    //console.log(tabs[0].url)
})

 





// Wrap the code bow in a renderLeads() function


function render(leads) {

    //Create a variable, listItems, to hold all the HTML for the lis items
  let listItems = ""



// Assign it to an empty string to begin with 
// log out the items in the myLeads array using a for loop


// Render the leads in the unordered list using ulEl.textcontent
 
   for (let i = 0; i < leads.length; i++) {

   // ulEl.textContent += myLeads[i] + " "
   // Replace .texctontent with .innerHTML and use <li> tags
   //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // Add the item to the listItems variable instead of the ulEl.innerHTML
    //wrap the link in an anchor tag (<a>) inside the <li>

    // Can you make link open in a new tab?
    // listItems += "<li><a  target= '_blank' href ='#'>" + myLeads[i] + "</a></li>"
   // template strings
   listItems += 
   `
        <li>
            <a  target= '_blank' href ='${leads[i]}'>  
               +${leads[i]}
            </a>
        </li>
   
   `
   
    // Let's try a different method
    // create element

   // const li = document.createElement("li")
    // set text content
    //li.textContent = myLeads[i]
    // append to ul
    //ulEl.append(li) 


   



   }
 //Render the listItems inside the unordered list using ulEl. innerHTML

   ulEl.innerHTML = listItems 



}

 

// If so, set myLeads to its value and call renderleads()

// Log out the vaiable
//console.log(leadsFromlocalStorage)

//Listen for double clicks on the delete button

deleteBtn.addEventListener("dblclick", function() {
     localStorage.clear()
     myLeads = []
     render(myLeads)
})



inputBtn.addEventListener("click", function() {
    // Push the value fromthe inputEl into the myLeads array
    // instead 0f the hard coded wwww..... value
    // Google-> "get value from input field javascript"
    myLeads.push(inputEl)
       // clear out the input field
    inputEl.value = "" //Save the myleads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
      

    //console.log(myLeads)

    // Call the renderLeads() function
    render(myLeads)

    // to verify that it works:
    //console.log(localStorage.getItem("myLeads"))


}) 


