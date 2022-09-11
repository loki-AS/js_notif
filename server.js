const button = document.querySelector("button")

button.addEventListener("click", ()=> {
  Notification.requestPermission().then(prem => {
    if(prem === "granted"){
      const notification = new Notification("Example Notification",{
        body:"This is more text",
        data: {hello: "world!" },
        icon: "xxxtentacion1.jpg"
      })

      notification.addEventListener("error", e => {
        console.log(e)
      })
    }
  })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
  if(document.visibilityState === "hidden"){
    const leaveDate = new Date()
    interval = setInterval(() => {
notification = new Notification("Come back please",{
      body:`You have been gone for ${Math.round((new Date() - leaveDate)/1000)} seconds`,
      tag:"Come Back"
    }) 
    }, 100)
  }else{
    if(interval) clearInterval(interval)
    if(notification) notification.close()
  }
})