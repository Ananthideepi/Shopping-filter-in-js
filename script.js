const stored=[{
    id:1,
    name:"samsung 24",
    img:"image/4.jpg",
    amount:20000,
    seller:"samsung store",
    category:"Monitors",
},
{
    id:2,
    name:"song 24",
    img:"image/5.jpg",
    amount:25000,
    seller:"sony store",
    category:"Monitors",
},
{
    id:3,
    name:"Onida 24",
    img:"image/6.jpg",
    amount:18000,
    seller:"Onida store",
    category:"Monitors",
},
{
    id:4,
    name:"Rolex",
    img:"image/1.jpg",
    amount:1000,
    seller:"Rolex store",
    category:"Watch",
},
{
    id:5,
    name:"Fast Track ",
    img:"image/2.jpg",
    amount:500,
    seller:"FastTrack store",
    category:"Watch",
},
{
    id:6,
    name:"Canon",
    img:"image/12.jpg",
    amount:30000,
    seller:"canon store",
    category:"Camera",
},
{
    id:7,
    name:"LG 24",
    img:"image/7.jpg",
    amount:700,
    seller:"LG store",
    category:"Clock",
},
{
    id:8,
    name:"clock 24",
    img:"image/8.jpg",
    amount:1000,
    seller:"Super store",
    category:"Clock",
},
{
    id:9,
    name:"Wall-clock 23",
    img:"image/9.jpg",
    amount:2000,
    seller:" Astore",
    category:"Clock",
},
{
    id:10,
    name:"Clock 10",
    img:"image/10.jpg",
    amount:5000,
    seller:"Ajenta",
    category:"Clock",
},
{
    id:11,
    name:"samsung 24",
    img:"image/11.jpg",
    amount:20000,
    seller:"samsung store",
    category:"Watch",
},
];
// console.log(stored)
const productdisplay=document.querySelector(".products");
const Categrory_list=document.querySelector(".Categrory-list");
 function display(products){
    // console.log(products)
    if(products.length>0){
 const  product_details=products.map((product)=>`<div class="product">
 <div class="img">
     <img src="${product.img}" alt="${product.name}">
 </div>
 <div class="product-details">
     <span class="productname">${product.name}</span>
     <span class="amount">Rs:${product.amount}</span>
     <span calss="seller">${product.seller}</span>
 </div>
</div>
       `).join(" ");
    //    console.log(product_details)
       productdisplay.innerHTML= product_details;
    }
    else{
        productdisplay.innerHTML=`<h3>No product avaliable<h3>`
    }
}
 display(stored);
 setcategory();
 pricefield();
// .....................................list the category................................................
function setcategory(){
   
    const product_list=stored.map((data)=>data.category);
    // console.log(product_list);
    const  lists=["All", ...product_list.filter((item,index)=>product_list.indexOf(item)===index),];
    //  console.log(lists);
    Categrory_list.innerHTML=lists.map((item)=>`<li>${item}</li>`).join(" ");
// ............................display the particular product.........................................
    Categrory_list.addEventListener("click",(event)=>{ 
            const click=event.target.textContent;
            click=== "All"? display(stored): display(stored.filter((item)=>item.category==click));
    })
// ........................price......................................................

}

function pricefield(){
        const priceval=document.getElementById("pricevalue");
        const range=document.getElementById("range");
        const priceList=stored.map((item)=>item.amount);
        //  console.log(priceList);
        const minprice=Math.min(...priceList);
        const maxprice=Math.max(...priceList);
 range.min=minprice;
 range.max=maxprice;
 priceval.innerText="Rs:"+maxprice;

 range.addEventListener("input",(event)=>{
    priceval.innerText="Rs:"+event.target.value; 
    display(stored.filter((item)=>item.amount <=event.target.value))
 });
}

const search_field=document.getElementById("text_search");
search_field.addEventListener("input", (event)=>{
   const value=event.target.value.toLowerCase().trim();
   if(value){
    display(stored.filter((item)=>item.name.toLocaleLowerCase().includes(value)));
   }
   else{
    display(stored);
   }
})