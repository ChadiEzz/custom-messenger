export function hideTabBar() {
    var tabBar = document.getElementsByTagName('ion-tab-bar');

    if (tabBar !== null) {
        tabBar[0].style.display = 'none';
    }
}

export function showTabBar() {
    var tabBar = document.getElementsByTagName('ion-tab-bar');

    if (tabBar !== null) {
        tabBar[0].style.display = 'flex';
    }
}