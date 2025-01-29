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

    const lineCtx = document.getElementById('lostLine');

    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: [
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023'
            ],
            datasets: [{
                label: '% of Webpages Lost',
                data: [
                    100, 93.8, 87.6, 81.4, 75.2, 69, 62.8, 56.6, 50.4, 44.2, 38
                ],
                borderWidth: 2,
                backgroundColor: ['rgba(250, 172, 59, 0.5)'],
                borderColor: ['rgba(250, 172, 59, 1)']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });
}