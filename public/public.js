let card = document.getElementsByClassName('card')
card.addEventListener('submit',(e)=>{
    e.preventDefault()
    keyfunction()
    card.reset()
})
let keyfunction = async() =>{
    try{
        const res = await fetch('http://localhost:3000/')
        const data = await res.json()
        console.log(data)
        if(data.error){
            document.getElementsByClassName('card-img-top').innerText = ''
            document.getElementsByClassName('card-title').innerText = ''
            document.getElementsByClassName('card-text').innerText = ''
        }
        else{
            document.getElementsByClassName('card-img-top').innerText = 'data'
            document.getElementsByClassName('card-title').innerText = 'data'
            document.getElementsByClassName('card-text').innerText = 'data'

        }
    }
    catch(e){
            console.log(e)
    }
}
    
