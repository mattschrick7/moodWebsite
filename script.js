const slider = document.getElementById('moodSlider');
const moodValue = document.getElementById('moodValue');
const status = document.getElementById('status');

// Convert 0-100 to climbing grades (YDS scale approximation)
function getClimbingGrade(value) {
    if (value <= 10) return '5.6';
    if (value <= 20) return '5.7';
    if (value <= 30) return '5.8';
    if (value <= 40) return '5.9';
    if (value <= 50) return '5.10a';
    if (value <= 60) return '5.10c';
    if (value <= 70) return '5.11a';
    if (value <= 80) return '5.11d';
    if (value <= 90) return '5.12b';
    return '5.13a';
}

slider.addEventListener('input', () => {
    moodValue.textContent = getClimbingGrade(slider.value);
});

slider.addEventListener('change', async () => {
    const mood = slider.value;
    

    try {
        const response = await fetch('https://3.136.236.215:3000/send-mood', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood })
        });

        
    } catch (error) {
        
        console.error(error);
    }
});
