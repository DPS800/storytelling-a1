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
                label: '% of Webpages Lost', fill: 'origin',
                data: [
                    0, 3.8, 7.6, 11.4, 15.2, 19, 22.8, 26.6, 30.4, 34.2, 38
                ],
                borderWidth: 2,
                backgroundColor: ['rgba(255, 205, 39, 0.5)'],
                borderColor: ['rgba(255, 205, 39, 1)']
            }]
        },
        options: {
            scales: {
                y: {
                    max: 100,
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

    const pieCtx = document.getElementById('TLDPie');

    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: [
                '.com',
                '.net',
                '.ru',
                '.org',
                '.de',
                '.jp',
                '.co.uk',
                '.ir',
                'Other'
            ],
            datasets: [{
                label: '% used',
                data: [47.9, 5.22, 4.77, 4.61, 2.32, 1.49, 1.29, 1.24, 60.8],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(77, 101, 255, 1)',
                    'rgba(170, 152, 202, 1)',
                    'rgba(158, 206, 79, 1)',
                    'rgba(0, 174, 242, 1)',
                    'rgba(242, 100, 74, 1)',
                    'rgba(250, 172, 59, 1)',
                    'rgba(255, 205, 39, 1)',
                    'rgba(252, 245, 230, 1)',
                    'rgba(153, 153, 153, 1)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },

            }
        }
    });
}