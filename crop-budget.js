// Crop budget calculator on crop-management.html — persists to localStorage

const BUDGET_STORAGE_KEY = 'agricare_budgets';

function loadBudgets() {
    return JSON.parse(localStorage.getItem(BUDGET_STORAGE_KEY) || "[]");
}

function saveBudgets(budgets) {
    localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgets));
}

function calculateAndSave() {
    const budgetName = document.getElementById('budget-name').value;
    if (budgetName.trim() === "") { alert("Please enter a Budget Name!"); return; }

    const acreage = parseFloat(document.getElementById('acreage').value) || 0;
    const seed = parseFloat(document.getElementById('seed-cost').value) || 0;
    const fert = parseFloat(document.getElementById('fertilizer-cost').value) || 0;
    const pest = parseFloat(document.getElementById('pesticide-cost').value) || 0;
    const labor = parseFloat(document.getElementById('labor-cost').value) || 0;
    const other = parseFloat(document.getElementById('other-cost').value) || 0;
    const yieldVal = parseFloat(document.getElementById('expected-yield').value) || 0;
    const price = parseFloat(document.getElementById('price-per-bushel').value) || 0;

    const totalCost = (seed + fert + pest + labor + other) * acreage;
    const totalRevenue = (yieldVal * price) * acreage;
    const totalProfit = totalRevenue - totalCost;

    document.getElementById('budget-result').innerHTML = `
        <h4>Results for: ${budgetName}</h4>
        <p>Profit: <b>$${totalProfit.toFixed(2)}</b></p>
        <p style="color:blue">✅ Saved!</p>
    `;

    const budgets = loadBudgets();
    budgets.unshift({
        budget_name: budgetName,
        acreage: acreage,
        total_cost: totalCost,
        total_revenue: totalRevenue,
        total_profit: totalProfit,
        created_at: new Date().toLocaleString()
    });
    saveBudgets(budgets);
    loadHistory();
}

function loadHistory() {
    const tableBody = document.getElementById('history-table-body');
    tableBody.innerHTML = "";

    loadBudgets().forEach(row => {
        const profitColor = row.total_profit >= 0 ? '#27ae60' : '#e74c3c';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.budget_name}</td>
            <td>${row.acreage} acres</td>
            <td>$${row.total_cost.toFixed(2)}</td>
            <td>$${row.total_revenue.toFixed(2)}</td>
            <td style="color: ${profitColor}; font-weight:bold;">$${row.total_profit.toFixed(2)}</td>
            <td>${row.created_at}</td>
        `;
        tableBody.appendChild(tr);
    });
}

loadHistory();
