 
function updateValue() {
            var slider = document.getElementById("exampleRange");
            var output = document.getElementById("sliderValue");
            output.textContent = " " + slider.value + "%";}
          
 function updateValues() {
                var slider = document.getElementById("exampleRanges");
                var output = document.getElementById("sliderValues");
                output.textContent = " " + slider.value + "%";}


document.addEventListener("DOMContentLoaded", function() {
                      // Function to create responsive options
                      function createResponsiveOptions() {
                        return {
                          cutout: '90%',
                          plugins: {
                            legend: {
                              display: false
                            },
                            tooltip: {
                              enabled: false
                            },
                            datalabels: {
                              formatter: function(value, context) {
                                return value + '%';
                              },
                              textContent: '95%',
                              color: 'black',
                              anchor: 'center',
                              align: 'center',
                              offset: 0,
                              font: {
                                weight: 'bold',
                                size: 16
                              }
                            }
                          }
                        };
                      }
                
                      // HTML Chart
                      var htmlChart = new Chart(document.getElementById('htmlChart').getContext('2d'), {
                        type: 'doughnut',
                        data: {
                          labels: ['HTML', 'Remaining'],
                          datasets: [{
                            data: [95, 5],
                
                           backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 255, 255, 0)']
                          }]
                        },
                        options: createResponsiveOptions()
                      });
                
                      // CSS Chart
                      var cssChart = new Chart(document.getElementById('cssChart').getContext('2d'), {
                        type: 'pie',
                        data: {
                          labels: ['CSS', 'Remaining'],
                          datasets: [{
                            data: [85, 15],
                            backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 255, 255, 0)']
                          }]
                        },
                        options: createResponsiveOptions()
                      });
                
                      // Bootstrap Chart
                      var bootstrapChart = new Chart(document.getElementById('bootstrapChart').getContext('2d'), {
                        type: 'pie',
                        data: {
                          labels: ['Bootstrap', 'Remaining'],
                          datasets: [{
                            data: [65, 35],
          
                            backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 255, 255, 0)']
                          }]
                        },
                        options: createResponsiveOptions()
                      });
                
                      // JavaScript Chart
                      var javascriptChart = new Chart(document.getElementById('javascriptChart').getContext('2d'), {
                        type: 'pie',
                        data: {
                          labels: ['JavaScript', 'Remaining'],
                          datasets: [{
                            data: [55, 45],
                            backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 255, 255, 0)']
                          }]
                        },
                        options: createResponsiveOptions()
                      });
                    });
           
                
