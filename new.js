// let a = document.getElementById("one");
// a.addEventListener("mouseenter",()=>{
//     a.style.backgroundColor="yellow";
//     const r= Math.floor(Math.random()*100);
//     a.innerText=r;
// });
// a.addEventListener("mouseleave",()=>{
//     a.style.backgroundColor="white";
// });

// let b= document.getElementById("two");
// let color="red";
// b.addEventListener("mouseover",()=>{
//     if(color=="red"){
//         b.style.backgroundColor="red";
//         color="green";
//     }
//     else if(color=="green"){
//         b.style.backgroundColor="blue";
//         color="pink";
//     }else{
//         b.style.backgroundColor="pink";
//         color="red";
//     }
// });
// b.addEventListener("mouseleave",()=>{
//     b.style.backgroundColor="white";
// });


// let c= document.getElementById("three");
// c.addEventListener("mouseover",()=>{

//      const m=Math.floor(Math.random()*90);
//      const n=Math.floor(Math.random()*255);
//      const o=Math.floor(Math.random()*150);
//      c.style.backgroundColor=`rgb(${m},${n},${o})`;
// });
// c.addEventListener("mouseleave",()=>{
//     c.style.backgroundColor="white";
// });


// let d = document.getElementById("four");
// d.addEventListener("click",()=>{
//     const m=Math.floor(Math.random()*90);
//     const n=Math.floor(Math.random()*255);
//     const o=Math.floor(Math.random()*234);
//     c.style.backgroundColor=`rgb(${m},255,0)`;
//     b.style.backgroundColor=`rgb(255,${n},0)`;
//     a.style.backgroundColor=`rgb(0,255,${o})`;

// });
// d.addEventListener("mouseleave",()=>{
//     d.style.backgroundColor="white";
// });

let a = document.getElementById("one");
a.addEventListener("mouseover", () => {
    a.style.backgroundColor = "yellow";
    const r = Math.floor(Math.random() * 100);
    a.innerText = r;
});
a.addEventListener("mouseleave", () => {
    a.style.backgroundColor = "white";
});

let b = document.getElementById("two");
let color = "red";
b.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 100); // random number
    b.innerText = r; // show it
    if (color == "red") {
        b.style.backgroundColor = "red";
        color = "green";
    } else if (color == "green") {
        b.style.backgroundColor = "blue";
        color = "pink";
    } else {
        b.style.backgroundColor = "pink";
        color = "red";
    }
});
b.addEventListener("mouseleave", () => {
    b.style.backgroundColor = "white";
});

let c = document.getElementById("three");
c.addEventListener("mouseover", () => {
    const m = Math.floor(Math.random() * 255);
    const n = Math.floor(Math.random() * 255);
    const o = Math.floor(Math.random() * 255);
    c.style.backgroundColor = `rgb(${m},${n},${o})`;
    const r = Math.floor(Math.random() * 100); // random number
    c.innerText = r; // show it
});
c.addEventListener("mouseleave", () => {
    c.style.backgroundColor = "white";
});

let d = document.getElementById("four");
d.addEventListener("click", () => {
    const m = Math.floor(Math.random() * 255);
    const n = Math.floor(Math.random() * 255);
    const o = Math.floor(Math.random() * 255);

    c.style.backgroundColor = `rgb(${m},255,0)`;
    b.style.backgroundColor = `rgb(255,${n},0)`;
    a.style.backgroundColor = `rgb(0,255,${o})`;
    d.style.backgroundColor = `rgb(${m},${n},${o})`;

    // show random numbers in all four
    a.innerText = Math.floor(Math.random() * 100);
    b.innerText = Math.floor(Math.random() * 100);
    c.innerText = Math.floor(Math.random() * 100);
    d.innerText = Math.floor(Math.random() * 100);
});
d.addEventListener("mouseleave", () => {
    d.style.backgroundColor = "white";
});