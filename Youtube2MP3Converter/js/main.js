// This registers the click from the user and tell the function to run with the information inside the button
document.querySelector('button').addEventListener('click',getLink)

// function saves the input as videoID and then sends it to API which gives the link to download as an MP3
function getLink(){
    let videoID = document.querySelector('input').value
    console.log(`https://convert2mp3s.com/api/single/mp3?url=${videoID}`)
    document.querySelector('iframe').src = (`https://convert2mp3s.com/api/single/mp3?url=${videoID}`)
}