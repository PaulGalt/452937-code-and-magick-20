'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var INSIDE_GAP = 20;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;

var namePositionY = CLOUD_Y + CLOUD_HEIGHT - INSIDE_GAP;
var barPositionY = namePositionY + INSIDE_GAP * 0.5 - TEXT_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getBarColor = function (name) {
  var saturation = Math.floor(Math.random() * 100);
  var color = 'hsl(234, 100%,' + saturation + '%)';

  if (name === 'Вы') {
    color = 'rgba(255, 0, 0, 1)';
  }
  return color;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PTMono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + INSIDE_GAP, CLOUD_Y + INSIDE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + INSIDE_GAP, CLOUD_Y + INSIDE_GAP + 20);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + INSIDE_GAP + i * (BAR_WIDTH + BAR_GAP), namePositionY);

    var maxTime = getMaxElement(times);
    ctx.fillStyle = getBarColor(players[i]);
    ctx.fillRect(CLOUD_X + INSIDE_GAP + i * (BAR_WIDTH + BAR_GAP), barPositionY, BAR_WIDTH, -MAX_BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + INSIDE_GAP + i * (BAR_WIDTH + BAR_GAP), barPositionY - TEXT_HEIGHT - MAX_BAR_HEIGHT * times[i] / maxTime);
  }
};
