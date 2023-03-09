const tabs = (id) => {
    const init = () => {
        const tabsItems = document.querySelectorAll(`.tabsItems__item`);

        tabsItems.forEach((tabsItem) => {
            tabsItem.addEventListener('click', handleTabsItemClick)
        });
    }

    const handleTabsItemClick = (e) => {
        const tabsItem = e.currentTarget;
        const tabID = tabsItem.attributes['data-tab-id'] ? tabsItem.attributes['data-tab-id'].value : undefined;

        if (tabID === undefined || tabID == "")
            throw new Error(`Tab item requires a data-tab-id attribute`);

        const prevTabsItem = document.querySelector(`.tabsItems__item_active`);
        prevTabsItem.classList.remove('tabsItems__item_active');

        tabsItem.classList.add('tabsItems__item_active');

        showTabContent(tabID);
    }

    const showTabContent = (tabID) => {
        const prevTabsContent = document.querySelector(`.tabsContent__wrapper_active`);
        prevTabsContent.classList.remove('tabsContent__wrapper_active');

        const activeTabsContent = document.querySelector(`.tabsContent__wrapper[data-tab-id="${tabID}"]`);
        if (activeTabsContent !== undefined)
            activeTabsContent.classList.add('tabsContent__wrapper_active');
    }

    return Object.freeze({
        init
    });
}