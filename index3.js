// explain tax rates brackets based on income
const taxRates =[
    [0,24000, 0.1],
    [24001, 32333, 0.25],
    [32334, 500000, 0.3],
    [500001, 800000, 0.325],
    [800001, Infinity, 0.4]
];
// explain NHIF rates brackets based on income
const nhifRates =[
    [0, 5999, 150],
    [6000, 7999, 300],
    [8000, 11999, 400],
    [12000, 14999, 500],
    [15000, 19999, 600],
    [20000, 24999, 750],
    [25000, 29999, 850],
    [30000, 34999, 900],
    [35000, 39999, 950],
    [40000, 44999, 1000],
    [45000, 49999, 1100],
    [50000, 59999, 1200],
    [60000, 69999, 1300],
    [70000, 79999, 1400],
    [80000, 89999, 1500],
    [90000, 99999, 1600],
    [100000, Infinity, 1700]
];
// explain the NSSF rate
const nssfRate= 0.06;
// a function to calculate the taxable income
function calculateTaxableIncome(basicsalary, allowances) {
    return basicsalary+ allowances;
}
// a function to calculate the tax paid based on taxable income
function taxPaid(taxableIncome) {
    let tax= 0;
    for (const [lower,upper,rate] of taxRates) {
        if (taxableIncome <= lower) {
            break;
        }
        // calculate tax at each rate
        const taxAtThisRate = Math.min(upper-lower,taxableIncome-lower);
        tax += taxAtThisRate *rate
    }
    // return total tax paid
    return tax;
}
// a function to calculate NHIF deductions based on the salary
function nhifDeductions(salary) {
    let nhif=0;
    for (const {lower,upper,amount} of nhifRates) {
        if (salary >=lower && salary <=upper) {
            nhif=amount
            break;
        }
    }
    return nhif;
}
// a function to calculate NSSF deductions
function nssfDeductions(basicsalary) {
    return basicsalary *nssfRate;
}
// a function to calculate the gross salary
function calculateGrossSalary(basicsalary, allowances) {
    return basicsalary+allowances;
}
// a function to calculate the net salary
function calculateNetSalary(basicsalary, allowances) {
    // calculate taxable income
    const taxableIncome =calculateTaxableIncome(basicsalary, allowances);
    // calculate tax paid
    const tax=taxPaid(taxableIncome);
    // calculate the NHIF deductions
    const nhif=nhifDeductions(basicsalary);
    // calculate the NSSF deductions
    const nssf=nssfDeductions(basicsalary);
    // calculate the gross salary
    const grossSalary=calculateGrossSalary(basicsalary, allowances);
    // calculate the net salary
    const netSalary=grossSalary-tax-nhif-nssf;
    return netSalary;
}
// an example to define the basic salary and the allowances
const basicsalary=30029900;
const allowances=2999000;
// calculate the net salary by invoking the above function and print out the result in the console
const netSalary=calculateNetSalary(basicsalary,allowances);
console.log("Net Salary:"+ netSalary);