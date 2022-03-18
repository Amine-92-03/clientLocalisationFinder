const cliProgress = require('cli-progress')

const opt = {
    format: 'Loading [{bar}] {percentage}% |  Duration:{duration_formatted} | {value}/{total} | ETA: {eta_formatted}',
    // barCompleteChar: '#',
    // barIncompleteChar: '.',
    fps: 25,
    stream: process.stdout,
    barsize: 65,
    position: 'center',
    align : 'left',
    hideCursor : true, //hide the cursor during progress operation; restored on complete (default: false) - pass null to keep terminal settings
    linewrap : false,
    etaBuffer : 9,
    // etaAsynchronousUpdate : true,
    barGlue :'',
    // emptyOnZero :true
}

module.exports.bar = new cliProgress.SingleBar(opt, cliProgress.Presets.rect);

