document.addEventListener('DOMContentLoaded', () => {
    const reportData = [
        { id: 'order-summary-count', total: 500 },
        { id: 'vehicle-report-count', total: 200 },
        { id: 'affixation-centres-count', total: 50 },
        { id: 'affixation-summary-count', total: 30 },
        { id: 'affixation-detailed-count', total: 100 },
        { id: 'customer-order-count', total: 400 },
        { id: 'cancel-order-count', total: 20 },
        { id: 'pending-affixation-count', total: 15 },
        { id: 'rejection-summary-count', total: 10 },
        { id: 'grievance-report-count', total: 25 },
        { id: 'pending-grievance-24hr-count', total: 8 },
        { id: 'pending-grievance-48hr-count', total: 5 },
    ];

    reportData.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) element.textContent = item.total;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.see-more');  // Select all 'See More' buttons

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Navigating to detailed report...');  // Show an alert when a button is clicked
        });
    });
});