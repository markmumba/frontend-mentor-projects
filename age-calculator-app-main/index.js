const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const button = document.querySelector('button');

const calculatedYears = document.getElementById('calculatedYears');
const calculatedMonths = document.getElementById('calculatedMonths');
const calculatedDays = document.getElementById('calculatedDays');

let dayValue;
let monthValue;
let yearValue;

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


button.addEventListener('click', (e) => {
    e.preventDefault()
    dayValue = parseInt(day.value);
    monthValue = parseInt(month.value) - 1;
    yearValue = parseInt(year.value);
    errorGenerator();
    calculateAge();



}
)

const calculateAge = () => {
    let days = 0;
    let months = 0;
    let years = 0;

    if (yearValue && dayValue && monthValue) {
        years = currentYear - yearValue
        if (monthValue > currentMonth) {
            years -= 1
            months = (currentMonth + 12) - monthValue
            if (dayValue > currentDay) {
                months -= 1
                days = (currentDay + 30) - dayValue

            }
            else {
                days = currentDay - dayValue
            }
        }
        else {
            months = currentMonth - monthValue;
        }
    }

    calculatedDays.innerHTML = `${days}  `.concat(calculatedDays.textContent);
    calculatedMonths.innerHTML = `${months} `.concat(calculatedMonths.textContent);
    calculatedYears.innerHTML = `${years}`.concat(calculatedYears.textContent);
    console.log([years, months, days])
}





const errorGenerator = () => {
    if (yearValue > currentYear) {
        const errors = document.createElement('p');
        errors.innerHTML = "Should not exceed current year"
        errors.style.color = 'red';
        document.getElementById('yearsection').appendChild(errors);
    }
    if (monthValue > 11) {
        const errors = document.createElement('p');
        errors.innerHTML = "Should not exceed 12"
        errors.style.color = 'red';
        document.getElementById('monthsection').appendChild(errors);
    }
    if (dayValue > 31) {
        const errors = document.createElement('p');
        errors.innerHTML = "maximum number is 31"
        errors.style.color = 'red';
        document.getElementById('daysection').appendChild(errors);
    }
    if (!dayValue && !monthValue && !yearValue) {
        const dayErrors = document.createElement('p');
        dayErrors.innerHTML = 'Input is required';
        dayErrors.style.color = 'red';

        const monthErrors = document.createElement('p');
        monthErrors.innerHTML = 'Input is required';
        monthErrors.style.color = 'red';

        const yearErrors = document.createElement('p');
        yearErrors.innerHTML = 'Input is required';
        yearErrors.style.color = 'red';

        document.getElementById('daysection').appendChild(dayErrors);
        document.getElementById('monthsection').appendChild(monthErrors);
        document.getElementById('yearsection').appendChild(yearErrors);
    }

}