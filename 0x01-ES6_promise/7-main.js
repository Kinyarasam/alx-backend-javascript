import loadBalancer from './7-load_balancer';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const PromiseUK = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, ukSuccess);
});

const PromiseUKSlow = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, ukSuccess);
});

const PromiseFR = new Promise(function (resolve, reject) {
  setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
  console.log(await loadBalancer(PromiseUK, PromiseFR));
  console.log(await loadBalancer(PromiseUKSlow, PromiseFR));
};

test();
