// here i used keypress but it was late by one letter so i used keyup
document.getElementById('name').addEventListener('keyup',function(){
    //storing the typed value in a var each time the user press up a button
    let value = document.getElementById('name').value;
    //chnaging the name output accordinly
    document.getElementById('name-output').textContent = value;
    //fettching the data into this simple api that tells u how u old u should be according to ur age
    fetch(`https://api.agify.io?name=${value}`).then((res)=>{
        //hundling the respond and converting it to json
        return res.json();
    }).then(data =>{
        //taking the age from the respond and print it into the document
        document.getElementById('age-output').textContent = data.age;
    }).catch(err => console.log(err));
});