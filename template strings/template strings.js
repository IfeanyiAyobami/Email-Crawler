//template strings/literals

const recipient = "James"

const sender = "Ifeanyi"


//Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Iffy"
//const email = `Hey ${recipient}! How is it going? cheers ${sender}`
// Break the email into multiple lines
const email = `
Hey 
${recipient}!
How is it going? cheers
${sender}`

console.log(email) 