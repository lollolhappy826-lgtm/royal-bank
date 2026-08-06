let balance = 10000;

const balanceText = document.getElementById("balance");

function updateBalance() {
    balanceText.textContent = "₱" + balance.toLocaleString();
}

function earn(min, max, job) {
    const money = Math.floor(Math.random() * (max - min + 1)) + min;

    balance += money;

    updateBalance();

    alert(`${job}\n\n+₱${money.toLocaleString()} 획득!`);
}

document.getElementById("parttime").onclick = () => {
    earn(300, 700, "💼 알바하기");
};

document.getElementById("company").onclick = () => {
    earn(800, 2000, "🏢 회사 다니기");
};

document.getElementById("royal").onclick = () => {
    earn(3000, 8000, "👑 황궁 아르바이트");
};

document.getElementById("beg").onclick = () => {
    earn(0, 100, "🎁 구걸하기");
};

updateBalance();