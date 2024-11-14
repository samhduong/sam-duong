function openTab(event, tabName) {
    //Hide all tab content
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    //Remove active class from all tab buttons
    let tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    //Show the clicked tab's content
    document.getElementById(tabName).classList.add('active');

    //Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

document.querySelector('.tab-button').click();