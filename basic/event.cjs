const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('addBtn', () => {
  console.log('추가됐습니다.');
});

myEvent.on('delBtn', () => {
  console.log('삭제됐습니다.');
});

myEvent.on('schBtn', () => {
  console.log('검색됐습니다.');
});

myEvent.once('event3', () => {
  console.log('event3');
});

myEvent.emit('addBtn');
myEvent.emit('delBtn');
myEvent.emit('schBtn');

myEvent.emit('event3');
