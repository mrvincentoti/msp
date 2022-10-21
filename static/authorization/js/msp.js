var options = {
    theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },
    series: [{
        name: 'Budget',
        data: [44, 55, 57, 56, 61]
    }, {
        name: 'Actual',
        data: [40, 70, 101, 40, 59]
    }, {
        name: 'Difference',
        data: [4, -15, -44, 16, 2]
    }],
    chart: {
        type: 'bar',
        height: 400,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Cross River', 'Kano', 'Sokoto', 'Benue', 'Kaduna'],
    },
    yaxis: {
        title: {
            text: 'N (Million)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "N " + val + " Million"
            }
        }
    },
    title: {
        text: 'Budget vs Actual vs Difference',
        floating: true,
        align: 'center',
        style: {
            color: '#444'
        }
    }
};

var chart = new ApexCharts(document.querySelector("#dashboardColumnChart"), options);
chart.render();