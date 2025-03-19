const allBtns = document.querySelectorAll('.completed-btn');
const taskBtnsArray = Array.from(allBtns);


for (const btn of allBtns) {
    btn.addEventListener('click', function () {

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
        if (taskReturn < 1) {
            alert("Congrates!! You've successfully completed all the task.")
        }

        btn.disabled = true;
        btn.classList.remove('bg-purple-600')
        btn.classList.add('bg-gray-200');


        // Activity add to history log.
        const selectedTitle = `title-${taskBtnsArray.indexOf(btn) + 1}`;
        const title = document.getElementById(selectedTitle).innerText;
        const historyContainer = document.getElementById('activity-log-container');

        const getTime = currentTime(new Date());

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
             <p class="bg-custom1 p-3 mb-4 rounded-md shadow-md">
             You have completed the task <span class="font-semibold text-blue-500">${title}</span> at ${getTime}
             </p>
         `;

        historyContainer.appendChild(newHistory)


    })
};

document.getElementById('clearHistory').addEventListener('click', function () {
    document.getElementById('activity-log-container').innerHTML = '';
});


document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'blog.html'
});


document.getElementById('backtoDashboard').addEventListener('click', function () {
    window.location.href = 'index.html'
});