let balance = Number(localStorage.getItem("balance")) || 10000;

const balanceText = document.getElementById("balance");

function updateBalance() {
    balanceText.textContent = "₱" + balance.toLocaleString();

    localStorage.setItem("balance", balance);
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
document.getElementById("lotto").onclick = () => {

    if (balance < 1000) {
        alert("잔액이 부족합니다.");
        return;
    }

    balance -= 1000;

    const chance = Math.random() * 100;

    let prize = 0;
    let message = "";

    if (chance < 5) {
        prize = 1000000;
        message = "🏆 1등 당첨!";
    } else if (chance < 15) {
        prize = 10000;
        message = "🥈 2등 당첨!";
    } else if (chance < 50) {
        prize = 5000;
        message = "🥉 3등 당첨!";
    } else {
        message = "😭 꽝!";
    }

    balance += prize;

    updateBalance();

    if (prize > 0) {
        alert(`${message}\n\n+₱${prize.toLocaleString()}`);
    } else {
        alert(message);
    }

};
updateBalance();