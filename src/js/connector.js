var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  return t.card('all').then(function(card){
      console.log(card);
  });
};

window.TrelloPowerUp.initialize({
    'board-buttons': function(t, opts) {
        return [{ // we can either provide a button that has a callback function
            icon: {
              dark: WHITE_ICON,
              light: BLACK_ICON
            },
            text: 'Callback',
            callback: onBtnClick,
            condition: 'edit'
        }];
    }

});