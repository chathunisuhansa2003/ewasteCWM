// EPA saha LCA standards walata anuwa estimated average carbon saved per unit (kg CO2e)
const items = [
    { name: "Desktop Computer", carbon: 45.0 },
    { name: "Laptop", carbon: 25.0 },
    { name: "CRT Monitor", carbon: 30.0 },
    { name: "LCD Monitor (17 inches)", carbon: 18.0 },
    { name: "Printer", carbon: 12.0 },
    { name: "Server", carbon: 90.0 },
    { name: "Network Switch", carbon: 15.0 },
    { name: "Refrigerator (Medium)", carbon: 120.0 },
    { name: "Washing Machine", carbon: 85.0 },
    { name: "Ceiling Fan", carbon: 10.0 },
    { name: "Pedestal Fan", carbon: 8.0 },
    { name: "Landline Telephone", carbon: 1.5 },
    { name: "Fax Machine", carbon: 10.0 },
    { name: "DVD-ROM Drive", carbon: 2.0 },
    { name: "Biometric Device", carbon: 3.5 },
    { name: "Cash Counting Machine", carbon: 8.0 },
    { name: "Toner Cartridge", carbon: 3.0 },
    { name: "Ribbon Cartridge", carbon: 0.8 },
    { name: "Rice Cooker", carbon: 7.0 },
    { name: "Bread Toaster", carbon: 4.0 },
    { name: "Gas Cooker", carbon: 15.0 },
    { name: "Photograph Machine", carbon: 20.0 },
    { name: "TV Box", carbon: 2.5 },
    { name: "Check Deposit Machine", carbon: 35.0 },
    { name: "Cash Validator", carbon: 10.0 },
    { name: "Big Printer", carbon: 55.0 },
    { name: "Amplifiers", carbon: 12.0 },
    { name: "Wall Fan", carbon: 7.0 },
    { name: "Water Boilers", carbon: 18.0 },
    { name: "Exhaust Fans", carbon: 5.0 },
    { name: "Blenders", carbon: 4.5 },
    { name: "T-Flash Drives", carbon: 0.2 },
    { name: "General Motors", carbon: 150.0 },
    { name: "Nescafe Machines", carbon: 25.0 },
    { name: "DVRs", carbon: 6.0 },
    { name: "Radios", carbon: 3.0 },
    { name: "Coolers", carbon: 30.0 },
    { name: "Microwave Ovens", carbon: 25.0 },
    { name: "Room Heaters", carbon: 18.0 },
    { name: "UPS Power Banks", carbon: 15.0 },
    { name: "AC-DC Adapters", carbon: 1.0 },
    { name: "Network Switches (Addl)", carbon: 10.0 },
    { name: "UPS Batteries", carbon: 12.0 },
    { name: "Ink Cartridges", carbon: 1.0 },
    { name: "CCTV Camera (Central)", carbon: 5.0 },
    { name: "Ceiling Speakers", carbon: 3.0 },
    { name: "Electric Irons", carbon: 5.0 },
    { name: "Electric Kettles", carbon: 6.0 },
    { name: "Wall Clocks", carbon: 1.0 },
    { name: "Telephone Chargers", carbon: 0.5 },
    { name: "Teller Machines (ATM)", carbon: 200.0 },
    { name: "Calculators", carbon: 0.5 },
    { name: "Power Adapters", carbon: 1.0 },
    { name: "Safety Lockers", carbon: 40.0 },
    { name: "Torches", carbon: 0.8 },
    { name: "Emergency Lamps", carbon: 2.5 },
    { name: "Water Dispensers", carbon: 30.0 },
    { name: "Typewriters", carbon: 15.0 },
    { name: "Ultraviolet Lamps", carbon: 2.0 },
    { name: "Water Filters", carbon: 5.0 },
    { name: "Scales", carbon: 4.0 },
    { name: "Routers", carbon: 3.0 },
    { name: "Hard Drives", carbon: 2.0 },
    { name: "CFL Bulbs", carbon: 0.5 }
];

// HTML eke cards tika auto generate kireema
const grid = document.getElementById('cardsGrid');

items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <label>${item.name}</label>
        <div class="card-inputs">
            <input type="number" id="qty-${index}" placeholder="Qty" min="0" value="0">
            <!-- Separate button for each item -->
            <button onclick="calculateSingle(${index})">Calc</button>
        </div>
    `;
    grid.appendChild(card);
});

// Thani item ekaka quantity eka calculate kirima
function calculateSingle(index) {
    const qtyInput = document.getElementById(`qty-${index}`);
    const qty = parseFloat(qtyInput.value) || 0;
    
    if(qty > 0) {
        const singleCarbon = qty * items[index].carbon;
        alert(`${items[index].name} (${qty} items)\n\nCarbon Prevented: ${singleCarbon.toFixed(2)} kg CO₂e`);
    } else {
        alert('Karunakarala valid quantity ekak type karanna.');
    }
}

// Okkoma items wala total eka saha equivalencies calculate kirima
function calculateTotal() {
    let totalCarbon = 0;

    items.forEach((item, index) => {
        const qty = parseFloat(document.getElementById(`qty-${index}`).value) || 0;
        totalCarbon += qty * item.carbon;
    });

    // EPA Standards based conversion rates
    // 1 kg CO2e ≈ 0.426 liters of gasoline 
    // 1 kg CO2e ≈ 70.5 aluminum cans 
    // 1 kg CO2e ≈ 0.046 trees (annual uptake)
    
    const gasoline = totalCarbon * 0.426;
    const cans = totalCarbon * 70.5;
    const trees = totalCarbon * 0.046;

    // Display values in the HTML
    document.getElementById('totalCarbon').innerText = totalCarbon.toFixed(2);
    document.getElementById('gasoline').innerText = gasoline.toFixed(2);
    document.getElementById('cans').innerText = cans.toFixed(2);
    document.getElementById('trees').innerText = trees.toFixed(2);
}