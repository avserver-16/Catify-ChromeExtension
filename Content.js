let avserver=[
    "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg",
    "https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg?semt=ais_hybrid&w=740&q=80",
    "https://i.ytimg.com/vi/mkBxuf-Iubc/maxresdefault.jpg",
    "https://www.shutterstock.com/image-photo/closeup-portrait-fluffy-purebred-cat-600nw-2447243735.jpg",
    "https://thumbs.dreamstime.com/b/portrait-funny-cat-looking-out-box-portrait-funny-cat-looking-out-box-isolated-white-background-121112695.jpg"
]

const img=document.getElementsByTagName("img");
for(i of img){
    const idx=Math.floor(Math.random()*avserver.length);
    i.src=avserver[idx];
}