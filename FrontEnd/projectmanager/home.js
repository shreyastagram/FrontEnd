var projectListObject=[{
    name:'JavaScript one'
},
{
    name:'Javascript two'
}
];

function showProjects(listID){
        projectListObject.forEach(function(value,index) {
            var template='<div class="project-card">'+ value.name +
        '<ul>'+
            '<li>Task one</li>'+
            '<li>Task two</li>'+
        '</ul>'+
        '</div>';
        
            document.getElementById(listID).innerHTML += template;
        });
}
function toggleMenu(){
    var toggleVariable=document.getElementsByClassName('menu')[0];
    if(toggleVariable.style.display=='none'){
        toggleVariable.style.display='';
    }else{
        toggleVariable.style.display='none';
    }
}
function removeCard(){
    document.getElementById('projectList').innerHTML=''

}
var idName=1;
function addBoard(id){
    idName++;
    var listID='projectList_'+idName;
    var boardId='board_' + idName;
    var templateBlock='<section class="board-block" id='+boardId+'>'+
    '<div>' +id.value+'<button onclick="removeCard('+listID+')">Remove Card</button></div>'+
   ' <div class="project-block" id='+listID+'>'+
    '</div>'+
   ' </section>';
         document.getElementById('boardBlockList').innerHTML += templateBlock;
         showProjects(listID);
         document.getElementById('menuList').innerHTML +='<li onclick="loadMenu('+boardId +')">'+id.value+"</li>";
}

function loadMenu(element){

console.log(element.id);
document.getElementById(element.id).style.display = 'block';

}