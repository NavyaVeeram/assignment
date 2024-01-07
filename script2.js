document.addEventListener('DOMContentLoaded', function () {
        // Sample data (replace with your actual data)
        var subjectLabels = ['Subject1', 'Subject2', 'Subject3', 'Subject4'];
        var yearLabels = ['Year1', 'Year2', 'Year3'];

        var marksData = [
            [85, 90, 78, 92],
            [70, 82, 88, 95],
            [75, 85, 80, 90]
        ];

        // Create a data object for Chart.js
        var data = {
            labels: yearLabels,
            datasets: []
        };

        // Add datasets for each subject
        for (var i = 0; i < subjectLabels.length; i++) {
            var dataset = {
                label: subjectLabels[i],
                backgroundColor: 'rgba(75, 192, 192, 0.7)', // Adjust the color as needed
                data: marksData.map(function (marks) {
                    return marks[i];
                })
            };

            data.datasets.push(dataset);
        }

        // Chart.js configuration
        var options = {
            scales: {
                x: { stacked: true },
                y: { stacked: true }
            }
        };

        // Get the canvas element
        var ctx = document.getElementById('marksChart').getContext('2d');

        // Create the stacked bar graph
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    });

