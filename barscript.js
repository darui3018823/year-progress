function updateDays() {
    const month = document.getElementById('month').value;
    const yearType = document.getElementById('yearType').value;
    const daySelect = document.getElementById('day');
    daySelect.innerHTML = '<option selected disabled>何日?</option>';

    if (!month || !yearType) return;

    const daysInMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysInMonthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const daysInMonth = yearType === 'leap' ? daysInMonthLeap : daysInMonthNormal;

    for (let i = 1; i <= daysInMonth[month - 1]; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

document.getElementById('day').addEventListener('change', calculatePercentage);
document.getElementById('yearType').addEventListener('change', calculatePercentage);

function calculatePercentage() {
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const yearType = document.getElementById('yearType').value;

    if (!month || !day || !yearType) return;

    const daysInMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysInMonthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const daysInMonth = yearType === 'leap' ? daysInMonthLeap : daysInMonthNormal;

    let daysElapsed = 0;
    for (let i = 0; i < month - 1; i++) {
        daysElapsed += daysInMonth[i];
    }
    daysElapsed += parseInt(day);

    const totalDays = yearType === 'leap' ? 366 : 365;
    const percentage = ((daysElapsed / totalDays) * 100).toFixed(2);

    document.getElementById('result').textContent = `選択された日にちは ${percentage}%!`;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;
}
