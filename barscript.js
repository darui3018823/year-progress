function updateDays() {
    const month = document.getElementById('month').value;
    const yearType = document.getElementById('yearType').value;
    const daySelect = document.getElementById('day');
    daySelect.innerHTML = ''; // 初期化してからオプションを追加

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

document.getElementById('month').addEventListener('change', updateDays);
document.getElementById('yearType').addEventListener('change', updateDays);

document.getElementById('day').addEventListener('change', calculatePercentage);
document.getElementById('yearType').addEventListener('change', calculatePercentage);
