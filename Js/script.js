var searchbar = document.querySelector("#searchbar");
var searchbtn = document.querySelector(".searchbtn");

searchbtn.addEventListener("click",function(){
    if(searchbar.value === "apple"){
        location.assign("/Fruits/Apple/apple.html")
    }else if(searchbar.value === "mango"){
        location.assign("/Fruits/Mango/mango.html")
    }else if(searchbar.value === "banana"){
        location.assign("/Fruits/Banana/banana.html")
    }else if(searchbar.value === "pineapple"){
        location.assign("/Fruits/Pineapple/pineapple.html")
    }else if(searchbar.value === "strawberry"){
        location.assign("/Fruits/Strawberry/strawberry.html")
    }else if(searchbar.value === "watermelon"){
        location.assign("/Fruits/Watermelon/watermelon.html")
    }else if(searchbar.value === "lemon"){
        location.assign("/Fruits/Lemon/lemon.html")
    }else if(searchbar.value === "grape"){
        location.assign("/Fruits/Grape/grape.html")
    }else if(searchbar.value === "cashew"){
        location.assign("/Fruits/Cashew/cashew.html")
    }else if(searchbar.value === "orange"){
        location.assign("/Fruits/Orange/orange.html")
    }else(
        alert("Entered fruit is not available")
    )
});
