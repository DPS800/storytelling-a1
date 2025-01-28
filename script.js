$(document).ready(start);

function start() {


    const datactx = document.getElementById('dataBar');

    new Chart(datactx, {
        type: 'bar',
        data: {
            labels: ['Videos', 'Audio', 'Software', 'Images', 'Collections'],
            datasets: [{
                label: 'In millions',
                data: [16, 13.269, 1.2, 5.1, 2.5],
                borderWidth: 1,
                backgroundColor: [
                    // 'rgba(250, 172, 59, 0.75)',
                    'rgba(242, 100, 74, 0.75)',
                    'rgba(0, 174, 242, 0.75)',
                    'rgba(158, 206, 79, 0.75)',
                    'rgba(170, 152, 202, 0.75)',
                    'rgba(77, 101, 255, 0.75)',
                ],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                subtitle: {
                    display: true,
                    text: 'In Millions of Saved Items'
                }
            }
        }
    });
}