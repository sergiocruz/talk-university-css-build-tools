/* globals casper, phantomcss */
'use strict';

casper.
  start( 'http://www.google.co.uk' ).
  then(function(){
    phantomcss.screenshot('#hplogo', 'google');
  });

casper.run();
