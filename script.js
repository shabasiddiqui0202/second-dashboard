// ===============================
// 1. LINE CHART
// ===============================

const linechart = document.getElementById("line");

new Chart(linechart, {
    type: "line",

    data: {
        labels: ["January", "February", "March", "April", "May"],

        datasets: [{
            label: "Sales",
            data: [120, 180, 150, 240, 300],

            borderColor: "#D4AF37",
            backgroundColor: "#D4AF37",

            borderWidth: 3
        }]
    },

    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});


// ===============================
// 2. BAR CHART
// ===============================

const barchart = document.getElementById("bar");

new Chart(barchart, {
    type: "bar",

    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

        datasets: [{
            label: "Sales",

            data: [120, 200, 150, 280, 350],

            backgroundColor: [
                "#0F766E",
                "#0891B2",
                "#2563EB",
                "#7C3AED",
                "#C026D3"
            ]
        }]
    },

    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});


// ===============================
// 3. PIE CHART
// ===============================

const piechart = document.getElementById("pie");

new Chart(piechart, {
    type: "pie",

    data: {
        labels: ["BMW", "Audi", "Mercedes", "Toyota", "Tesla"],

        datasets: [{
            label: "Cars Sold",

            data: [30, 20, 25, 15, 10],

            backgroundColor: [
                "#1E293B",
                "#D4AF37",
                "#7C3AED",
                "#0891B2",
                "#BE123C"
            ]
        }]
    }
});


// ===============================
// 4. DOUGHNUT CHART
// ===============================

const doughnutchart = document.getElementById("doughnut");

new Chart(doughnutchart, {
    type: "doughnut",

    data: {
        labels: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],

        datasets: [{
            label: "Car Types",

            data: [35, 20, 15, 20, 10],

            backgroundColor: [
                "#7F1D1D",
                "#92400E",
                "#047857",
                "#1D4ED8",
                "#6D28D9"
            ]
        }]
    }
});


// ===============================
// 5. SCATTER CHART
// ===============================

const scatterchart = document.getElementById("scatter");

new Chart(scatterchart, {
    type: "scatter",

    data: {
        datasets: [{
            label: "Car Price vs Mileage",

            data: [
                { x: 10, y: 18000 },
                { x: 20, y: 25000 },
                { x: 30, y: 32000 },
                { x: 40, y: 41000 },
                { x: 50, y: 55000 }
            ],

            backgroundColor: "#F59E0B",

            borderColor: "#B45309",

            pointRadius: 7
        }]
    },

    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Mileage (thousand km)"
                },

                grid: {
                    display: false
                }
            },

            y: {
                title: {
                    display: true,
                    text: "Car Price ($)"
                },

                grid: {
                    display: false
                }
            }
        }
    }
});