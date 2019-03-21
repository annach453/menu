'use strict';

(function () {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
})();


(function () {
    document.addEventListener('DOMContentLoaded', function () {

        var onTabClick = function (evt) {
            removeActiveTabs();
            var activeTab = evt.currentTarget;
            activeTab.classList.add('filter__tab--active');
            var activeContentId = activeTab.getAttribute('id').slice(7);
            document.querySelector('#tab-' + activeContentId).classList.add('filter__tab-content--active');
        };

        var addTabListeners = function () {
            var tabs = document.querySelectorAll('.filter__tab');
            tabs.forEach(function (tab) {
                tab.addEventListener('click', onTabClick);
            });
        };

        var removeActiveTabs = function () {
            var tabs = document.querySelectorAll('.filter__tab--active');
            var content = document.querySelectorAll('.filter__tab-content--active');

            tabs.forEach(function (tab) {
                tab.classList.remove('filter__tab--active');
            })

            content.forEach(function (contentItem) {
                contentItem.classList.remove('filter__tab-content--active');
            })
        };

        addTabListeners();

    })
})();
