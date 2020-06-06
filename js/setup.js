'use strict';

document.querySelector('.setup').classList.remove('hidden');

var NUMBER_WIZARD = 4;

var wizards = [];

var getRandomNumber = function (maxValue, minValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

var getElement = function (item) {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  item.name = names[getRandomNumber(names.length - 1, 0)] + ' ' + surnames[getRandomNumber(surnames.length - 1, 0)];
  item.coatColor = coatColors[getRandomNumber(coatColors.length - 1, 0)];
  item.eyesColor = eyesColors[getRandomNumber(eyesColors.length - 1, 0)];

  return item;
};

var getElements = function (value) {
  for (var i = 0; i < value; i++) {
    var wizard = {
      name: '',
      coatColor: '',
      eyesColor: '',
    };
    wizards[i] = getElement(wizard);
  }

  return wizards;
};

getElements(NUMBER_WIZARD);

var createNewElement = function () {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < NUMBER_WIZARD; i++) {
    var newElement = template.cloneNode(true);
    newElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    newElement.querySelector('.wizard-coat').setAttribute('fill', wizards[i].coatColor);
    newElement.querySelector('.wizard-eyes').setAttribute('fill', wizards[i].eyesColor);
    fragment.appendChild(newElement);
  }
  return fragment;
};

var renderNewElement = function () {
  var itemList = document.querySelector('.setup-similar-list');
  itemList.appendChild(createNewElement());
};

renderNewElement();

document.querySelector('.setup-similar').classList.remove('hidden');
