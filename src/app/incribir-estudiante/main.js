function main(){
    navigator.mediaDevices.getUserMedia({ video : true }).then((stream) => {
        console.log(stream);
    }).catch((err) => console.log(err));
}