const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchBox=document.querySelector('#search');

searchBox.addEventListener('keyup',(e)=>{
searchText=e.target.value.toLowerCase().trim();
boxes.forEach((box)=>{
    const data=box.dataset.item;
    if(data.includes(searchText)){
        box.style.display='block';
    }else{
        box.style.display='none';
    }
});
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfliter=e.target.dataset.fliter;

        boxes.forEach((box=>{
            if(btnfliter=='all'){
                box.style.display='block';
            }else{

                const boxfliter=box.dataset.item;
                if(btnfliter==boxfliter) {
                    box.style.display="block";
                }else{
                    box.style.display= "none";
                }
            }
        }));
    });
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
};