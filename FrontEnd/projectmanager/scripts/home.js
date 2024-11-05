var projectListObject=[];
var idName=0;

function showProjects(listID){
        projectListObject.forEach(function(value,index) {
            var template='<div class="project-card">'+ value.name +
        '<ul>'+
            '<li class="task-list">Task one</li>'+
            '<li class="task-list">Task two</li>'+
        '</ul>'+
        '</div>';
        
            document.getElementById(listID).innerHTML += template;
        });
}

function toggleMenu(){
    var toggleVariable=document.getElementsByClassName('menu')[0];
    toggleVariable.style.display=toggleVariable.style.display==='none'?'':'none';
}
function removeBoards(boardId){

    var boardElement=document.getElementById(boardId);
    if(boardElement){
        var boardIndex=projectListObject.findIndex(board=>board.id===boardId);
        if(boardIndex!==-1){
            projectListObject.splice(boardIndex,1);
        }
        boardElement.remove();
    }else{
        console.log("Board not found!");
        return;
    }
    var menuItems=document.getElementById('menuList').getElementsByTagName('li');
    for(var i=0;i<menuItems.length;i++){
        if(menuItems[i].onclick.toString().includes(boardId)){
            menuItems[i].remove();
            break;
        }
    }
    
}

function addBoard(id){
    
    var boardName=id.value.trim();
    if(boardName.length<5){
        alert("Board name can't be less than five characters!")
        return;
    }
    if (projectListObject.some(board => board.name.toLowerCase() === boardName.toLowerCase())) {
        alert("This board name already exists! Please choose a different name.");
        id.value=id.defaultValue;
        return;
    }
    

    idName++;
    var listID='projectList_'+idName;
    var boardId='board_' + idName;
    projectListObject.push({id: boardId,name:boardName});
    var templateBlock='<section class="board-block" id='+boardId+ '>'+
    '<div class="board-name">' +id.value+'<button id="removeBoards" onclick="removeBoards(\'' + boardId + '\')">Remove Card</button></div>'+
   ' <div class="project-block" id='+listID+'>'+
    '</div>'+
   ' </section>';
         document.getElementById('boardBlockList').innerHTML += templateBlock;
         showProjects(listID);
         document.getElementById('menuList').innerHTML +='<li onclick="loadMenu('+boardId +')"> '+id.value+"</li>";
         alert("Board name "+id.value+" added!")
         id.value=id.defaultValue;
    }



function loadMenu(element){
console.log(element.id);
var show_card=document.getElementById(element.id);
if(getComputedStyle(show_card).display==='none'){
    show_card.style.display= 'block';
}else{
    show_card.style.display= 'none';
}
}

function checkEnter(event){
    if(event.key==="Enter"){
        addBoard(newBoardText);
    }
}
function hideAll(){
    var boards=document.querySelectorAll('.board-block');
    boards.forEach(function(board){
        board.style.display='none';
    });
}
function showAll(){
    var boards=document.querySelectorAll('.board-block');
    boards.forEach(function(board){
        board.style.display='block';
    });
}
