const NUM_POLES = 3;
const HEIGHT = 400;
const WIDTH = 450;
const WIDTH_EACH = WIDTH / NUM_POLES;
const NUM_DISKS = 4;
const WIDTH_DISK_MIN = 30;
const WIDTH_DISK_MAX = 130;
const WIDTH_DISK_DELTA = Math.floor( (WIDTH_DISK_MAX - WIDTH_DISK_MIN) / NUM_DISKS );
const HEIGHT_DISK_EACH = 15;

const diskTemplate = document.querySelector('#diskTemplate');

const disks = [];
const poles = [];
for(let i=0;i<NUM_POLES;i++) poles.push({
  poleId: 0,
  disks: []
});

function panic(moveFrom, moveTo, disk, msg) {
  console.error(`Error moving disk: ${disk.diskId} from ${moveFrom} to ${moveTo} as: `, msg);
}

function initDisks() {
  for (let i = NUM_DISKS - 1; i >= 0; i--) {
    const disk = makeDisk(i);
    disks.push(disk);
    disk.moveTo(0);
  }
}

function makeDisk(diskId) {
  const ret = {
    diskId: diskId,
    text: `${diskId}`,
    color: 'green',
    width: WIDTH_DISK_MIN + diskId * WIDTH_DISK_DELTA,
    poleId: 0,
    moveTo: (destPoleId) => doMoveTo(ret, destPoleId)
  }
  ret.ele = makeDiskEle(ret);
  return ret;
}

function makeDiskEle(ret) {
  const diskId = ret.diskId;
  const newDisk = diskTemplate.content.cloneNode(true);
  newDisk.id = `disk${diskId}`;
  newDisk.style.height = `${HEIGHT_DISK_EACH}px`;
  newDisk.style.width = `${ret.width}px`;
  newDisk.style.top = `0`;
  newDisk.style.left = `0`;
  newDisk.querySelector('.disk-label').textContent = `d${diskId}`;
  return newDisk;
}

function doMoveTo(selfDisk, destPoleId) {
  if(destPoleId >= NUM_POLES) {
    throw panic(selfDisk.poleId, destPoleId, selfDisk, `Destination poleId ${destPoleId} is invalid`);
  }
  const currPole = poles[selfDisk.poleId];
  if(currPole.length ===0) {
    throw panic(selfDisk.poleId, destPoleId, selfDisk, `Pole ${currPole.poleId} is empty`);
  }
  const lastOne = currPole.disks[currPole.disks.length-1];
  if(selfDisk !== lastOne) {
    throw panic(selfDisk.poleId, destPoleId, selfDisk, `Top disk ${lastOne.diskId} on pole ${currPole.poleId} is not itself ${selfDisk.diskId}`);
  }
  const destPole = poles[destPoleId];
  if(destPole.disk.length !==0) {
    const destTopOne = destPole.disks[destPole.disks.length-1];
    if(selfDisk.diskId > destTopOne.diskId) {
      throw panic(selfDisk.poleId, destPoleId, selfDisk, `The top disk ${destTopOne.diskId} on pole ${destPole.poleId} is smaller selfDisk the disk ${selfDisk.diskId} to move`);
    }
  }
  currPole.disks.pop();
  destPole.disks.push(selfDisk);
  selfDisk.poleId = destPoleId;
  recalculateStyle(selfDisk);
}

function recalculateStyle(disk) {
  const pole = poles[disk.poleId];
  const totalDisks = pole.disks.length;
  const currIdx = -1;
  for(let i=0;i<totalDisks;i--) {
    if(pole.disks[i] === disk.diskId) {
      currIdx = i;
    }
  }
  if(currIdx === -1) {
    throw panic(null, null, disk, `Cannot find disk ${disk.diskId} in its pole ${disk.poleId}`);
  }
  const tx = pole.poleId * WIDTH_EACH + (WIDTH_EACH - disk.width) / 2;
  const ty = HEIGHT - (currIdx + 1) * HEIGHT_DISK_EACH;
  disk.ele.style.transform = `translate(${tx}px, ${ty}px)`;
}










