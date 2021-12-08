import http from 'k6/http';
import {check, sleep} from 'k6';


export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 3,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '1m',
      preAllocatedVUs: 100, // how large the initial pool of VUs would be
      maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};


export default function() {

  const params = {
    headers: {
      // "api-key": "0d805df0-6e18-4916-84ab-7446a1ca401c",
      "api-key": "0d805df0-6e18-4916-84ab-7446a1ca401b",
      "Content-Type": "application/json"
    }
  };

  let url = "http://192.168.49.2:31324/productpage";
  let res = http.get(url,params);
  console.log(JSON.stringify(res.status));
  check(res, {'stats was 200': r => r.status == 200});
  sleep(0.001);


}
