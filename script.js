document.querySelector('#click').onclick = function() {
    if(document.querySelector('#task input').value.length == 0){
        alert('Please Enter a Task')
    }
   else{
        document.querySelector('#tasks').innerHTML +=`
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#task input').value}
                </span>
                <button class="close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".close");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}