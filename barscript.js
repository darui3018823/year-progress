function calculatePercentage() {
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const yearType = document.getElementById('yearType').value;

    if (!month || !day || !yearType) {
        document.getElementById('progress-container').style.display = 'none';
        document.getElementById('markers').style.display = 'none';
        return;
    }

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

    document.getElementById('result').textContent = `選択された日は ${percentage}%！`;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;

    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('markers').style.display = 'flex';
}
