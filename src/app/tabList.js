const tabSections = (...args) => {
  if (!args.length) return;
  // project lists
  args[0].forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector('#tabs-table__tab-content__' + tab.dataset.tabTarget);
      args[1].forEach((tabContent) => {
        tabContent.classList.remove('tabs-table__tab-content--active');
      });
      args[0].forEach((tab) => {
        tab.classList.remove('tabs-table__tabsــtab--active');
      });
      tab.classList.add('tabs-table__tabsــtab--active');
      target.classList.add('tabs-table__tab-content--active');
    });
  });

  // meeting-structure
  args[2].forEach((tab) => {
    tab.addEventListener('click', () => {
      let dataSet = tab.getAttribute('session-tab-target');
      const target = document.querySelector('#meeting-structure__card--' + dataSet);

      args[3].forEach((tabContent) => {
        tabContent.classList.remove('meeting-structure__card--active');
      });
      args[2].forEach((tab) => {
        tab.classList.remove('meeting-structure__tab--active');
      });
      tab.classList.add('meeting-structure__tab--active');
      target.classList.add('meeting-structure__card--active');
    });
  });
};

export default tabSections;