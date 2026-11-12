const APP_VERSION = 'ver0.0.18';
const APP_UPDATE_DATE = '2026/11/12';

const defaultPlayers = [
    { id: 1, name: 'プレイヤー1' },
    { id: 2, name: 'プレイヤー2' },
    { id: 3, name: 'プレイヤー3' },
    { id: 4, name: 'プレイヤー4' }
];

function getPlayers() {
    return JSON.parse(localStorage.getItem('mahjong_players')) || defaultPlayers;
}

function savePlayers(players) {
    localStorage.setItem('mahjong_players', JSON.stringify(players));
}

function initializeFooters() {
    const footers = document.querySelectorAll('.app-footer');
    footers.forEach(footer => {
        footer.innerHTML = `<span>${APP_UPDATE_DATE}</span><span>${APP_VERSION}</span>`;
    });
}

document.addEventListener('DOMContentLoaded', initializeFooters);
