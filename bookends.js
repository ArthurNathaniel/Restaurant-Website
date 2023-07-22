
    document.addEventListener("DOMContentLoaded", function () {

        const futureDateInputs = document.getElementById("futureDateInputs");
        // Initialize Flatpickr
        flatpickr(futureDateInputs, {
            minDate: "today", // Allow only dates from the current date onwards
            dateFormat: "Y-m-d",
            onChange: function (selectedDates, dateStr, instance) {
                const selectedDate = selectedDates[0];

                // Perform any additional actions when the date is changed here
                console.log("Selected date:", selectedDate.toISOString().split("T")[0]);
            },
        });
    });



    
    