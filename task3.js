/*let link="https://api.github.com/users"

fetch(link)
.then(response=>response.json())
.then((data)=>{

    let index=0;
    let dataLenght=data.length;

    while(index < dataLenght){
    document.querySelector("#slt").innerHTML +="<option value="+index+">"+data[index].login+"</option>"

        ++index;
    }
    console.log(data[0])
})

document.querySelector("#slt").addEventListener("change",function(){

    var selected=this.value;

    fetch(link)
.then(response=>response.json())
.then((data)=>{

    document.querySelector(".info").innerHTML = `<img src=${data[selected].avatar_url}><br>Github:<a href=${data[selected].html_url}>${data[selected].html_url}</a>`

     })

})*/

//first try























let link = "https://api.github.com/users"

fetch(link)
    .then(response => response.json())
    .then((data) => {

        let index = 0;
        let dataLenght = data.length;

        while (index < dataLenght) {
            document.querySelector(".slt").innerHTML += `<option value=${data[index].login}>`

                ++index;
        }

    })



document.querySelector(".realUsers").addEventListener("change", function () {

    var selected = this.value;

    if (selected === "") {
        alert("Hey try another one😊")
        //document.querySelector(".realUsers").setAttribute("style","background:red")

    } else {

        fetch(link + "/" + selected)
            .then(response => response.json())
            .then((data) => {


                document.querySelector(".details").setAttribute("style", "opacity:1")

                document.querySelector(".photo").innerHTML = `<a target="_blank" href="${data.html_url}"><img src="${data.avatar_url}"></a>`

                document.querySelector(".folowers").innerHTML = `folowers: ${data.followers}`
                document.querySelector(".folowing").innerHTML = `folowing: ${data.following}`
                document.querySelector(".repo").innerHTML = `repos: ${data.public_repos}`
                document.querySelector(".sub").innerHTML = `gists: ${data.public_gists}`
                document.querySelector("h2").innerHTML = data.name

            })
    }
})


//for testing
/*fetch("https://api.github.com/users/joyo-banik698")
.then(response=>response.json())
.then((data)=>{
console.log(data)
})*/