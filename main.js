function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const states = {};
    checkboxes.forEach(checkbox => {
        states[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('checkboxStates', JSON.stringify(states));
}
function loadCheckboxStates() {
    const states = JSON.parse(localStorage.getItem('checkboxStates')) || {};
    for (const [id, checked] of Object.entries(states)) {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.checked = checked;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadCheckboxStates);
addEventListener('change', saveCheckboxStates);