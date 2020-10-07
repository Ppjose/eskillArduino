const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

function iniciar(){

const mySerial = new SerialPort('COM3', {
  baudRate: 9600
});

//mySerial.pipe(parser);

mySerial.on('open', function () {
  console.log('Opened Port.');
});

mySerial.on('data', function (data) {
  //console.log(parseInt(data));
  console.log(data.toString());
 // io.emit('arduino:data', {
 //   value: data.toString()
});
}
exports.iniciar= iniciar

