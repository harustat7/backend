// async js coding

// jab line by line code chlta toh synchronous
// jo bhi code async nature ka ho,usey side stack mein bhej doh and agle code ko chalao
// jo bhi sync nature ka ho;jab bhi sara sync code chal jaye ,tab check kro ki async 
// code complete hua ya nhi and agr voh complete hua ho toh usey main stack mein laho aur chala doh.


// fetch is async by nature as we dont how much time it will take to fetch data from the url

async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans= await blob.json();

    console.log(ans);
}