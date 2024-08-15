let audioElement=new Audio("Song/1.mp3")
let songInfo=Array.from(document.getElementsByClassName("yet"))
let masterPlay=document.getElementById("masterPlay")
let mastPlay=document.getElementById("mastPlay")
let songIndex=0
let vertical_image=document.getElementById("vertical_bar")
let myProgressBar=document.getElementById("myProgressBar")
let images=document.getElementsByClassName("img")
let next=document.getElementById("next")
let previous =document.getElementById("previous")
songs=[

    {songName:"Its just a burning memory" , coverPath:"cover/1.jpeg", filePath:"Song/1.mp3"} ,
    {songName:"Sunsetz" ,coverPath:"cover/2.jpeg" , filePath:"Song/1.mp3"},
    {songName:"Apocalypse" ,coverPath:"cover/3.jpeg" , filePath:"Song/1.mp3"},
    {songName:"Opera House" ,coverPath:"cover/4.jpeg", filePath:"Song/1.mp3"},
    {songName:"A Lovely Night" ,coverPath:"cover/5.jpeg", filePath:"Song/1.mp3"},
    {songName:"Havana" ,coverPath:"cover/6.jpeg", filePath:"Song/1.mp3"},
    {songName:"City Of Stars (Deluxe)" ,coverPath:"cover/7.jpeg", filePath:"Song/1.mp3"},
    {songName:"City Of Stars" ,coverPath:"cover/8.jpeg", filePath:"Song/1.mp3"},
    {songName:"Vampire" ,coverPath:"cover/9.jpeg", filePath:"Song/1.mp3"},
    {songName:"Everthing in its Right Place" ,coverPath:"cover/10.jpeg", filePath:"Song/1.mp3"}


]
songInfo.forEach((e,i)=>{
    e.getElementsByClassName("title")[0].innerText=songs[i].songName
    e.getElementsByClassName("covers")[0].src=songs[i].coverPath
    e.getElementsByClassName("track-info")[0].src=songs[i].filePath
    
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.src<0){
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        mastPlay.classList.remove("fa-play")
        mastPlay.classList.add("fa-pause")
        audioElement.play()
    }
    else{
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        mastPlay.classList.remove("fa-pause")
        mastPlay.classList.add("fa-play")
        audioElement.pause()
    }
})
mastPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.src<0){
        mastPlay.classList.remove("fa-play")
        mastPlay.classList.add("fa-pause")
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        audioElement.play()
    }
    else{
        mastPlay.classList.remove("fa-pause")
        mastPlay.classList.add("fa-play")
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        audioElement.pause()
    }
})


Array.from(document.getElementsByClassName("title")).forEach((element)=>{

    element.addEventListener("click",(e)=>{
        songIndex=parseInt(e.target.id)
        console.log(songIndex)

        if(audioElement.paused || audioElement.src<0){
            audioElement.src=`Song/${songIndex+1}.mp3`
            mastPlay.classList.remove("fa-play")
            mastPlay.classList.add("fa-pause")
            masterPlay.classList.remove("fa-play")
            masterPlay.classList.add("fa-pause")
            audioElement.play()
            vertical_image.src=`cover/${songIndex+1}.jpeg`
            myProgressBar.innerText=songs[songIndex].songName
            images.src= `cover/${songIndex+1}.jpeg`

            
        }
        else{
            mastPlay.classList.remove("fa-pause")
            mastPlay.classList.add("fa-play")
            masterPlay.classList.remove("fa-pause")
            masterPlay.classList.add("fa-play")
            audioElement.pause()
        }
    })
})



next.addEventListener("click",(i)=>{
    if(songIndex<0){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`Song/${songIndex+1}.mp3`
    myProgressBar.innerText=songs[songIndex].songName
    audioElement.play()
    mastPlay.classList.remove("fa-play")
    mastPlay.classList.add("fa-pause")
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    // images.src= `cover/${songIndex}.jpeg`
          vertical_image.src=`cover/${songIndex+1}.jpeg`

})

previous.addEventListener("click",(i)=>{
    if(songIndex<0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`Song/${songIndex+1}.mp3`
    myProgressBar.innerText=songs[songIndex].songName
    audioElement.play()
    mastPlay.classList.remove("fa-play")
    mastPlay.classList.add("fa-pause")
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    // images.src= `cover/${songIndex}.jpeg`
          vertical_image.src=`cover/${songIndex+1}.jpeg`

})

Array.from(document.getElementsByClassName("covers")).forEach((element)=>{

    element.addEventListener("click",(e)=>{
       
        
        songIndex=parseInt(e.target.id)
        console.log(songIndex)

        if(audioElement.paused || audioElement.src<0){
            audioElement.src=`Song/${songIndex+1}.mp3`
            mastPlay.classList.remove("fa-play")
            mastPlay.classList.add("fa-pause")
            masterPlay.classList.remove("fa-play")
            masterPlay.classList.add("fa-pause")
            audioElement.play()
            vertical_image.src=`cover/${songIndex+1}.jpeg`
            myProgressBar.innerText=songs[songIndex].songName
            images.src= `cover/${songIndex+1}.jpeg`

            
        }
        else{
            mastPlay.classList.remove("fa-pause")
            mastPlay.classList.add("fa-play")
            masterPlay.classList.remove("fa-pause")
            masterPlay.classList.add("fa-play")
            audioElement.pause()
        }
    })
})





