const allBtns = document.querySelectorAll('.completed-btn');

for(const btn of allBtns){
    btn.addEventListener('click', function(){

        alert("You've successfully completed the task.")
        const navNumber = document.getElementById('nav-number');
        const getValue = navNumber.innerText;
        const convertedNavNumber = parseInt(getValue);
        const numberReturn = convertedNavNumber + 1;
        navNumber.innerText = numberReturn;

        const taskNumber = document.getElementById('task-complete');
        const taskValue = taskNumber.innerText;
        const convertedTaskValue = parseInt(taskValue);
        const taskReturn = convertedTaskValue - 1;
        taskNumber.innerText = taskReturn;
        if(taskReturn <1){
            alert("Congrates!! You've successfully completed all the task.")
        }

        btn.disabled = true;
        btn.classList.remove('bg-purple-600')
        btn.classList.add('bg-gray-200');

        
    })
}
