//confetti.start();

const NUM_POLES = 3;
const HEIGHT = 400;
const WIDTH = 450;
const WIDTH_EACH = WIDTH / NUM_POLES;
const NUM_DISKS = parseInt(prompt('How many disks?'));
const WIDTH_DISK_MIN = 30;
const WIDTH_DISK_MAX = 130;
const WIDTH_DISK_DELTA = Math.floor(
  (WIDTH_DISK_MAX - WIDTH_DISK_MIN) / NUM_DISKS
);
const HEIGHT_DISK_EACH = 15;
const COLOR_ARRAY = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const hanoi = document.querySelector('#hanoi');
const diskTemplate = document.querySelector("#diskTemplate");
const errorDiv = document.querySelector('.errors');
const audioDong = document.querySelector('#audioDong');
const audioHooray = document.querySelector('#audioHooray');

let disks = [];
let poles = [];

game();

function game() {
  initPoles();
  initDisks();
}

function initPoles() {
  poles = [];
  for (let i = 0; i < NUM_POLES; i++)
    poles.push({
      poleId: i,
      disks: [],
    });
}

function panic(msg) {
  errorDiv.innerText = msg;
  console.error(msg);
}

function initDisks() {
  disks = [];
  for (let i = NUM_DISKS - 1; i >= 0; i--) {
    const disk = makeDisk(i);
    disks[i] = disk;
    disk.move(0, true);
  }
}

function makeDisk(diskId) {
  const ret = {
    diskId: diskId,
    text: `${diskId}`,
    color: COLOR_ARRAY[diskId % COLOR_ARRAY.length],
    width: WIDTH_DISK_MIN + diskId * WIDTH_DISK_DELTA,
    poleId: undefined,
    move: (destPoleId, silent) => move(ret, destPoleId, silent),
  };
  ret.ele = makeDiskEle(ret);
  hanoi.appendChild(ret.ele);
  return ret;
}

function makeDiskEle(disk) {
  const diskId = disk.diskId;
  const newDisk = diskTemplate.content.querySelector(".disk").cloneNode(true);
  newDisk.id = `disk${diskId}`;
  newDisk.style.height = `${HEIGHT_DISK_EACH}px`;
  newDisk.style.width = `${disk.width}px`;
  newDisk.style.backgroundColor = `${disk.color}`;
  newDisk.style.top = `0`;
  newDisk.style.left = `0`;
  newDisk.querySelector(".disk-label").textContent = `d${diskId}`;
  return newDisk;
}

function moveFromPoleToPole(from, to) {
  const fromPole = poles[from];
  const disk = fromPole.disks[fromPole.disks.length-1];
  if(disk === undefined) {
    throw panic(`Nothing to move from pole ${from}`);
  }
  move(disk, to);
}

function move(selfDisk, destPoleId, silent) {
  errorDiv.innerText = '';
  if(typeof selfDisk === 'number') {
    const originDiskId = selfDisk;
    selfDisk = disks[selfDisk];
    if(selfDisk === undefined) {
      throw panic(`Cannot find disk ${originDiskId}`);
    }
  }
  if (destPoleId >= NUM_POLES) {
    throw panic(
      `Destination poleId ${destPoleId} is invalid`
    );
  }
  let currPole;
  if (selfDisk.poleId !== undefined) {
    currPole = poles[selfDisk.poleId];
    if (currPole.disks.length === 0) {
      throw panic(
        `Pole ${currPole.poleId} is empty`
      );
    }
    const lastOne = currPole.disks[currPole.disks.length - 1];
    if (selfDisk !== lastOne) {
      throw panic(
        `Top disk ${lastOne.diskId} on pole ${currPole.poleId} is not itself ${selfDisk.diskId}`
      );
    }
  }
  const destPole = poles[destPoleId];
  if (destPole.disks.length !== 0) {
    const destTopOne = destPole.disks[destPole.disks.length - 1];
    if (selfDisk.diskId > destTopOne.diskId) {
      throw panic(
        `The top disk ${destTopOne.diskId} on pole ${destPole.poleId} is smaller selfDisk the disk ${selfDisk.diskId} to move`
      );
    }
  }
  if (selfDisk.poleId !== undefined) {
    currPole.disks.pop();
  }
  destPole.disks.push(selfDisk);
  selfDisk.poleId = destPoleId;
  recalculateStyle(selfDisk);
  var isFinish = checkIsFinish();
  if(isFinish) {
    !silent && audioHooray.play();
  } else {
    !silent && audioDong.play();
  }
}

function checkIsFinish() {
  const lastPole = poles[NUM_POLES-1];
  if(lastPole.disks.length === NUM_DISKS) {
    confetti.start();
    return true;
  } else {
    return false;
  }
}


function recalculateStyle(disk) {
  const pole = poles[disk.poleId];
  const totalDisks = pole.disks.length;
  let currIdx = -1;
  for (let i = 0; i < totalDisks; i++) {
    if (pole.disks[i].diskId === disk.diskId) {
      currIdx = i;
    }
  }
  if (currIdx === -1) {
    throw panic(
      `Cannot find disk ${disk.diskId} in its pole ${disk.poleId}`
    );
  }
  const tx = pole.poleId * WIDTH_EACH + (WIDTH_EACH - disk.width) / 2;
  const ty = HEIGHT - (currIdx + 1) * HEIGHT_DISK_EACH;
  disk.ele.style.transform = `translate(${tx}px, ${ty}px)`;
}

async function solveProblem() {
  await moveLot(NUM_DISKS, 0, NUM_POLES-1, 1);
}

async function moveLot(numberOfDisks, from, to, temp) {
  
  if(numberOfDisks===1) {
    return await new Promise((res, rej)=>{
      setTimeout(() => {
        moveFromPoleToPole(from, to);
        res();
      }, 700);
    });
  }

  await moveLot(numberOfDisks-1, from, temp, to);

  await new Promise((res, rej)=>{
    setTimeout(() => {
      moveFromPoleToPole(from, to);
      res();
    }, 700);
  });

  await moveLot(numberOfDisks-1, temp, to, from);
}








