function showContent(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    const tabLinks = document.querySelectorAll('.tab');
    tabLinks.forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = Array.from(tabLinks).find(tab => tab.textContent.toLowerCase().includes(tabId));
    if (activeTab) activeTab.classList.add('active');
}
