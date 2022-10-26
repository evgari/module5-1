'use strict';

const banner = document.querySelector('.ads');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');

const itemTwoList = document.querySelector('.item_two .props__list');
const itemThreeList = document.querySelector('.item_three .props__list');
const itemFiveList = document.querySelector('.item_five .props__list');
const itemSixList = document.querySelector('.item_six .props__list');

const wrangItemsTwo = document.querySelectorAll('.item_six .props__item_two');
const fourItems = document.querySelectorAll('.props__item_four');
const wrangItemFour = document.querySelector('.item_two .props__item_four');
const cloneList = itemThreeList.cloneNode(true);
const contentFive = document.querySelector('.item_five .content');

const itemTwoTitle = document.querySelector('.item_two .item__title');
const itemTreeTitle = document.querySelector('.item_three .item__title');
const itemFiveTitle = document.querySelector('.item_five .item__title');
const itemSixTitle = document.querySelector('.item_six .item__title');

const itemTwoCloneTitle = itemTwoTitle.cloneNode(true);
const itemFiveCloneTitle = itemFiveTitle.cloneNode(true);

banner.remove();
itemOne.after(itemTwo);
itemTwo.after(itemThree);
itemThree.after(itemFour);
itemTwoList.append(wrangItemsTwo[0]);
itemTwoList.append(wrangItemsTwo[1]);
fourItems[2].after(wrangItemFour);
itemThreeList.replaceWith(itemFiveList);
contentFive.append(cloneList);
itemFiveTitle.replaceWith(itemSixTitle);
itemTwoTitle.replaceWith(itemFiveCloneTitle);
itemSixList.before(itemTwoCloneTitle);
itemTreeTitle.textContent = 'This и прототипы объектов';

