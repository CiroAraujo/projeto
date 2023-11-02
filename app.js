async function getUsers() {
    const resp =await fetch("https://jsonplaceholder.typicode.com/users")
    const users =await resp.json();

    return users;

}
async function updateTable(){
        let tableBody = document.querySelector(".js-user-line")
        let users = await getUsers()
        let linhas = ""

        for(let user of users) {
            linhas +=  `
            <tr>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>
                            <button onclick="userDetail()" >Exibir</button>   
                        </td>
                        
            </tr>
            
            `

    
            
            
            

        }
        tableBody.innerHTML = linhas
        console.log(users)
    
    }
    async function userDetail(userid){
        const resp =await fetch('https://jsonplaceholder.typicode.com/users')
        const user =await resp.json();
        
        document.querySelector(".js-user-name").value = user.name   
        document.querySelector(".js-user-username").value = user.username
    }

    updateTable()
    async function getTips() {
        const resp = await fetch("https://api.adviceslip.com/advice")
        const tip = await resp.json()
    }

    setTimeout(() => {
        document.querySelector(".tips").innerText = tip.slip.advice
        document.querySelector(".tips").style.display = "inline-block"
        
    }, 5000);
    setInterval(() => {
        getTips()
        console.log('teste')
        
    }, 8000);
    
    