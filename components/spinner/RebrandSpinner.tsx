import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes} from '../../common/constants'


interface SpinnerProps  {
    size?: string,
    dashOffsetStart?: string | number |undefined ,
    duration?: any,
    dashOffsetEnd?: string| number |undefined,
    padding?: string| number |undefined,
    margin?: string| number |undefined,
    minWidth?: string| number |undefined,
    width?: string,
    height?: string,
    color?: string,
    xmlns?: string,
    viewBox?: string,
    strokeWidth?: string
    pathLength?: any,
    delay?:any | undefined | string
  }

const Svg = styled.svg<SpinnerProps>`
  height: ${props => props.height};
  width: ${props => props.width};
`;

const Logo = styled.path<SpinnerProps>`
  fill: none;
  mask: url(#border-mask);
  stroke: ${props => props.color};
  stroke-dasharray: ${props => props.pathLength};
  stroke-dashoffset: ${props => props.pathLength};
  animation: ${props => logoReveal(props.pathLength)} infinite ${props => props.duration}s linear;
  animation-delay: ${props => props.delay ?? 0}s;
`;

const logoReveal = (pathLength:any) => keyframes`
  0% {
    stroke-dashoffset: ${pathLength};
  }
  45% {
    stroke-dashoffset: ${pathLength * 2};
  }
  90% {
    stroke-dashoffset: ${pathLength * 3};
  }
  100% {
    stroke-dashoffset: ${pathLength * 3};
  }
`;

const mainLogoPathLength = 249.59738159179688;

const borderPaths = [
  {
    d: 'M85.2256,27.5366C84.8467,27.72 84.5045,27.9522 84.1623,28.1966C83.82,28.4411 83.49,28.6978 83.1723,28.9666C82.5245,29.5044 81.9012,30.0666 81.3267,30.6778C81.18,30.8244 81.0456,30.9833 80.9112,31.1422L80.4956,31.6189C80.3612,31.7778 80.2389,31.9489 80.1045,32.12C79.9823,32.2911 79.8478,32.45 79.7256,32.6211C79.2489,33.3055 78.7967,34.0266 78.4178,34.7722C78.0267,35.5055 77.6967,36.2878 77.3912,37.07L77.1834,37.6689L77.0734,37.9622L76.9756,38.2678L76.7923,38.8666L76.6334,39.4778C76.4256,40.2844 76.2545,41.1155 76.1323,41.9466C76.01,42.7778 75.9123,43.6089 75.8512,44.4522L75.8389,44.6355L76.0223,44.6966C78.43,45.4422 80.7889,46.3466 83.05,47.4466C85.2989,48.5589 87.4745,49.8544 89.4545,51.3822C89.9678,51.7489 90.4323,52.1522 90.9212,52.5555C91.1534,52.7633 91.3856,52.9711 91.6178,53.1789C91.7278,53.2889 91.85,53.3866 91.96,53.4966L92.29,53.8266L92.62,54.1566C92.73,54.2666 92.84,54.3766 92.95,54.4866L93.5856,55.1711C93.7934,55.4033 93.9889,55.6478 94.1967,55.88L94.5023,56.2344L94.7956,56.6011L95.37,57.3344L95.9078,58.0922C95.9934,58.2144 96.0912,58.3366 96.1767,58.4711L96.4334,58.8622C96.6045,59.1311 96.7756,59.3878 96.9345,59.6566C97.24,60.2066 97.5578,60.7322 97.8389,61.2944L98.0589,61.71L98.1689,61.9178L98.2667,62.1255L98.6578,62.9689C99.1467,64.1178 99.5989,65.2789 99.9534,66.4766C100.137,67.0755 100.283,67.6866 100.442,68.2855C100.528,68.5911 100.577,68.8966 100.65,69.2022C100.711,69.5078 100.784,69.8133 100.833,70.1189L100.992,71.0355C101.029,71.1944 101.041,71.3411 101.066,71.5L101.127,71.9644L101.188,72.4289C101.2,72.5878 101.224,72.7344 101.237,72.8933L101.322,73.8222C101.359,74.1278 101.371,74.4333 101.383,74.7511L101.432,75.6922L101.444,76.6333C101.444,76.9511 101.457,77.2689 101.444,77.5744C101.408,80.0678 101.09,82.5489 100.516,84.9689C99.9412,87.3889 99.0856,89.7355 98.0101,91.9844C96.9345,94.2333 95.6267,96.3722 94.0989,98.3278C93.7078,98.8166 93.3289,99.3055 92.9134,99.77L92.3023,100.467C92.0945,100.699 91.8745,100.919 91.6667,101.151C90.7989,102.056 89.8945,102.899 88.9412,103.693C87.0345,105.282 84.9567,106.651 82.7445,107.788C80.5323,108.912 78.21,109.792 75.8023,110.416C73.3945,111.039 70.9256,111.406 68.4445,111.516C67.8212,111.54 67.1978,111.552 66.5745,111.552L65.6456,111.528L65.1812,111.516L64.9489,111.503L64.7167,111.479C63.4823,111.393 62.2478,111.259 61.0256,111.027C56.1489,110.147 51.4556,108.216 47.3612,105.404L46.6034,104.867C46.3589,104.683 46.1023,104.512 45.8578,104.317L45.1245,103.742L44.7578,103.449C44.6356,103.351 44.5256,103.241 44.4034,103.143L43.6945,102.532C43.5723,102.434 43.45,102.337 43.34,102.227L42.9978,101.909C42.5578,101.481 42.0934,101.066 41.6656,100.613C39.93,98.8289 38.3778,96.8733 37.0334,94.7833C35.6889,92.6811 34.5523,90.4567 33.6356,88.1467C32.7067,85.8367 32.01,83.4289 31.5334,80.9844C31.0445,78.54 30.8,76.0466 30.7389,73.5533C30.7389,73.2355 30.7267,72.93 30.7267,72.6122L30.7389,71.6711C30.7389,71.3533 30.7634,71.0478 30.7756,70.73C30.8,70.4122 30.8,70.0944 30.8245,69.7889C30.8734,69.1655 30.91,68.5422 30.9834,67.9189C31.0078,67.6133 31.0323,67.2955 31.0812,66.99L31.2034,66.0611C31.5578,63.5922 32.1078,61.1355 32.8289,58.74C33.5623,56.3444 34.4545,53.9978 35.5178,51.7244L35.9212,50.8811C35.9945,50.7344 36.0556,50.5878 36.1289,50.4533L36.3489,50.0378L36.7767,49.2066L37.2289,48.3755C37.3756,48.0944 37.5345,47.8255 37.6934,47.5566L38.17,46.7378C38.5,46.2 38.8178,45.6622 39.16,45.1366C39.8323,44.0855 40.5534,43.0589 41.2989,42.0444C41.6778,41.5433 42.0445,41.0422 42.4478,40.5533C42.6556,40.3089 42.8389,40.0522 43.0467,39.82L43.6578,39.0989C44.4767,38.1578 45.32,37.2166 46.2123,36.3366C46.6523,35.8844 47.1167,35.4689 47.5689,35.0289L48.2656,34.3933C48.3878,34.2833 48.4978,34.1733 48.62,34.0755L48.9745,33.77C49.2189,33.5622 49.4512,33.3544 49.6956,33.1589L50.4289,32.56C50.9178,32.1689 51.4067,31.7655 51.9078,31.3866C52.4089,31.0078 52.8978,30.6044 53.4112,30.2378L54.9512,29.1378C57.0289,27.7078 59.18,26.4 61.4412,25.2878C61.7223,25.1411 62.0156,25.0189 62.2967,24.8844L63.1523,24.4933L63.3723,24.3955L63.5923,24.31L64.0323,24.1266L64.9,23.76C65.4867,23.54 66.0856,23.32 66.6723,23.1C67.2712,22.9044 67.87,22.7089 68.4689,22.5133C70.8767,21.7555 73.3456,21.1933 75.8267,20.7044L76.7556,20.5211C77.0612,20.46 77.3789,20.3989 77.6845,20.35C78.3078,20.2522 78.9434,20.1666 79.5667,20.0933C80.2023,20.02 80.8256,19.9711 81.4612,19.9344C82.0845,19.91 82.72,19.8855 83.3556,19.8611',
    pathLength: 260.40985107421875,
    opacity: 0.8,
    delayModifier: 0.7,
  },
  {
    d: 'M86.7534 30.8855C86.5089 31.0199 86.2889 31.191 86.0689 31.3621C85.8489 31.5333 85.6289 31.7166 85.4211 31.8999C85.0056 32.2666 84.59 32.6455 84.2111 33.061C83.82 33.4644 83.4656 33.8921 83.1356 34.3321C82.8056 34.7844 82.5 35.2488 82.2189 35.7255C81.9378 36.2021 81.6934 36.7033 81.4611 37.2166C81.2411 37.7299 81.0334 38.2433 80.8622 38.7688C80.5078 39.8199 80.1833 40.9 80 42C81.2833 42.4644 82.5611 42.8266 83.8078 43.3888C84.1256 43.5233 84.4311 43.6699 84.7367 43.8166C85.0422 43.9633 85.36 44.0977 85.6534 44.2566L86.57 44.721L87.4745 45.2099C88.66 45.8821 89.8334 46.591 90.9456 47.3733C92.0578 48.1555 93.1456 48.9988 94.1723 49.9033C95.1989 50.8077 96.1645 51.7733 97.0811 52.7999C97.9978 53.8144 98.8289 54.9144 99.6234 56.0266L100.186 56.8821C100.283 57.0288 100.381 57.1633 100.467 57.3099L100.736 57.7499C100.907 58.0433 101.09 58.3366 101.261 58.6299L101.75 59.5344C101.823 59.681 101.921 59.8399 101.994 59.9866L102.214 60.451C102.361 60.7566 102.508 61.0744 102.654 61.3799L103.058 62.3333C103.119 62.4921 103.192 62.651 103.253 62.8099L103.437 63.2866C103.559 63.6044 103.681 63.9344 103.791 64.2521L104.109 65.2299L104.268 65.7188L104.402 66.2199L104.671 67.2099C104.989 68.5421 105.27 69.8866 105.453 71.2433C105.502 71.5855 105.551 71.9155 105.588 72.2577L105.686 73.2844C105.698 73.4555 105.722 73.6266 105.734 73.7977L105.771 74.311L105.832 75.3377C105.844 75.6799 105.857 76.0221 105.857 76.3644L105.869 76.8777C105.869 77.0488 105.881 77.2199 105.869 77.391L105.844 78.4177L105.832 78.931C105.832 79.1021 105.808 79.2733 105.796 79.4444C105.637 82.1821 105.184 84.9077 104.451 87.5599L104.39 87.8044L104.317 88.0488L104.158 88.5377L103.852 89.5155L103.498 90.481L103.327 90.9699L103.241 91.2144C103.204 91.2999 103.18 91.3733 103.143 91.4588C102.63 92.7299 102.08 93.9888 101.432 95.211C100.161 97.6433 98.6456 99.9533 96.91 102.092C95.1745 104.219 93.2067 106.162 91.0434 107.885C88.8923 109.597 86.5456 111.075 84.0767 112.285C81.6078 113.495 78.9923 114.424 76.3156 115.072C73.6389 115.72 70.9011 116.087 68.1511 116.184C67.8089 116.197 67.4667 116.209 67.1245 116.209C66.9534 116.209 66.7822 116.221 66.6111 116.221L66.1222 116.233C65.4378 116.209 64.7411 116.209 64.0567 116.148L63.03 116.062C62.8589 116.05 62.6878 116.025 62.5167 116.001L62.0034 115.94L60.9767 115.805C60.6345 115.744 60.3045 115.683 59.9622 115.622C54.5478 114.62 49.3534 112.457 44.8067 109.364C42.5334 107.812 40.4189 106.04 38.4878 104.072C36.5567 102.104 34.8334 99.9533 33.33 97.6555C30.3234 93.0477 28.2211 87.8533 27.1334 82.4755C26.5834 79.7866 26.2656 77.0488 26.1922 74.2988C26.1189 71.561 26.2534 68.7988 26.6322 66.0855C26.6811 65.7433 26.73 65.401 26.7789 65.071L26.95 64.0566C26.9745 63.8855 27.0111 63.7144 27.0356 63.5555L27.1334 63.0544L27.3411 62.0521L27.5734 61.0499L27.6956 60.5488L27.83 60.0477L28.0867 59.0577L28.38 58.0677C29.15 55.4399 30.1523 52.8733 31.3011 50.3921C31.4356 50.0744 31.5945 49.7688 31.7411 49.4633L32.1934 48.5466L32.67 47.6421L32.9145 47.1899L33.1589 46.7377L33.66 45.8455L34.1856 44.9655C34.3567 44.6721 34.54 44.3788 34.7234 44.0855C34.9067 43.7921 35.0778 43.4988 35.2734 43.2177C36.7645 40.9199 38.4022 38.7199 40.1989 36.6544C40.6389 36.1288 41.1034 35.6277 41.5678 35.1266C41.8 34.8821 42.0445 34.6377 42.2767 34.381L42.6311 34.0144L42.9978 33.6477L43.7311 32.9266L44.4767 32.2299C44.7211 31.9977 44.9778 31.7655 45.2345 31.5455C45.4911 31.3255 45.7478 31.0933 46.0045 30.8733C47.0434 29.981 48.1189 29.1377 49.1945 28.3188C50.2822 27.4877 51.3823 26.6933 52.5189 25.9355C54.78 24.4077 57.1389 23.0266 59.6078 21.841C60.8423 21.2544 62.0889 20.7166 63.3722 20.2277C64.6434 19.7388 65.9389 19.311 67.2467 18.9321C69.8623 18.1621 72.5267 17.5999 75.2156 17.1355C75.5456 17.0744 75.8878 17.0255 76.2178 16.9644C76.5478 16.9033 76.89 16.8544 77.2323 16.8055C77.9045 16.7077 78.5889 16.6344 79.2611 16.5733C79.9334 16.5121 80.6178 16.4755 81.3022 16.451C81.9867 16.4266 82.6589 16.4266 83.3434 16.4144',
    pathLength: 276.5401916503906,
    opacity: 0.65,
    delayModifier: 0.8,
  },
  {
    d: 'M84.2967,39.7222C85.6412,40.2966 86.9734,40.9077 88.2689,41.5922C88.5867,41.7633 88.9167,41.9344 89.2345,42.1177L90.1878,42.6555L91.1289,43.23C91.4467,43.4255 91.74,43.6211 92.0578,43.8166C94.5023,45.43 96.7878,47.2877 98.8167,49.4022C99.0734,49.6711 99.3178,49.94 99.5623,50.2089C99.8067,50.4777 100.051,50.7589 100.296,51.0277L100.479,51.2355L100.65,51.4433L100.992,51.8711L101.334,52.2988C101.444,52.4455 101.567,52.58 101.677,52.7266L102.324,53.6189C102.434,53.7655 102.544,53.9122 102.642,54.0711L102.948,54.5233C103.143,54.8289 103.351,55.1344 103.559,55.44L104.121,56.3811L104.402,56.8577L104.659,57.3466L105.184,58.3122L105.661,59.3022L105.893,59.8033C105.967,59.9744 106.04,60.1455 106.113,60.3044L106.541,61.3189C106.676,61.6611 106.798,62.0033 106.932,62.3455C107.201,63.03 107.409,63.7266 107.641,64.4355L107.727,64.6922L107.8,64.9611L107.947,65.4866C108.044,65.8411 108.142,66.1955 108.228,66.55L108.472,67.6255C108.509,67.8089 108.558,67.98 108.594,68.1633L108.692,68.7011L108.888,69.7889C108.949,70.1555 108.998,70.51 109.047,70.8766L109.12,71.4266L109.157,71.6955L109.181,71.9644L109.291,73.0644C109.303,73.2477 109.328,73.4311 109.34,73.6144L109.377,74.1644L109.45,75.2644C109.474,75.6311 109.474,75.9977 109.487,76.3644C109.499,76.7311 109.511,77.0977 109.511,77.4644L109.487,78.5644C109.474,78.9311 109.474,79.2977 109.45,79.6644L109.377,80.7644C109.364,80.9477 109.352,81.1311 109.34,81.3144L109.279,81.8644C108.961,84.7855 108.338,87.6822 107.433,90.4689C107.336,90.8233 107.201,91.1655 107.079,91.5077L106.7,92.5466C106.578,92.8889 106.419,93.2311 106.284,93.5733C106.138,93.9155 106.003,94.2577 105.857,94.5877L105.392,95.59L105.16,96.0911L105.038,96.3355L104.916,96.58L104.402,97.5577L104.146,98.0466C104.06,98.2055 103.962,98.3644 103.864,98.5233C100.956,103.632 97.0078,108.179 92.2778,111.687C89.9189,113.447 87.3645,114.95 84.6878,116.172C82.0112,117.394 79.2,118.336 76.3156,118.971C73.4434,119.607 70.4978,119.949 67.5523,120.01C67.1856,120.01 66.8189,120.034 66.4523,120.022L65.3523,119.998L64.8023,119.986L64.5212,119.973C64.4234,119.973 64.3378,119.961 64.24,119.949L63.14,119.863C62.4067,119.827 61.6734,119.704 60.94,119.619L60.39,119.546C60.2067,119.521 60.0234,119.484 59.84,119.448L58.7523,119.252C55.8556,118.69 53.02,117.81 50.3067,116.673C47.5934,115.524 44.99,114.107 42.5578,112.444C40.1256,110.782 37.8523,108.876 35.7867,106.773C33.7211,104.671 31.8634,102.373 30.2378,99.9044C28.6123,97.4477 27.2312,94.8322 26.0945,92.1066C24.97,89.3811 24.09,86.5577 23.4789,83.6855C22.8556,80.8133 22.5134,77.88 22.3912,74.9344C22.33,73.4677 22.33,71.9889 22.4034,70.5222C22.4523,69.0555 22.5989,67.5889 22.77,66.1222C23.1489,63.2133 23.7356,60.3166 24.5667,57.4933L24.8723,56.43L25.2145,55.3788L25.3856,54.8533L25.5689,54.34L25.9356,53.3011C26.4612,51.9322 26.9989,50.5633 27.6223,49.2311C30.0545,43.8777 33.2323,38.8789 37.0456,34.4177L37.7667,33.5866L38.5123,32.7677C38.7567,32.4989 39.0134,32.23 39.27,31.9611C39.5267,31.6922 39.7712,31.4233 40.04,31.1666L40.8223,30.3966C41.0789,30.14 41.36,29.8955 41.6167,29.6389C42.1423,29.1255 42.7045,28.6489 43.2545,28.16C44.3667,27.2066 45.5156,26.29 46.6767,25.3977C47.8378,24.5055 49.0234,23.65 50.2334,22.8189C52.6534,21.1689 55.1956,19.6777 57.8356,18.4066C60.4756,17.1355 63.2134,16.0722 66.0245,15.2533C68.8356,14.4222 71.6956,13.7989 74.58,13.2977C75.3012,13.1755 76.0223,13.0411 76.7434,12.9433C77.4645,12.8455 78.1978,12.76 78.9189,12.6989C79.6523,12.6377 80.3734,12.5889 81.1067,12.5644C81.9134,12.5277 82.6467,12.5155 83.3678,12.5033',
    pathLength: 282.24029541015625,
    opacity: 0.45,
    delayModifier: 0.9,
  },
  {
    d: 'M89.2589 38.2922C91.9967 39.6977 94.6 41.3599 97.0078 43.2788C98.2056 44.2321 99.3667 45.2588 100.454 46.3466C100.589 46.481 100.723 46.6155 100.858 46.7499L101.261 47.1655C101.53 47.4344 101.787 47.7277 102.043 48.0088C102.3 48.2899 102.544 48.5833 102.801 48.8766C102.923 49.0233 103.046 49.1699 103.168 49.3166L103.534 49.7688C104.512 50.9544 105.38 52.2377 106.223 53.521C107.018 54.841 107.788 56.1733 108.436 57.5666C109.12 58.9477 109.67 60.3899 110.196 61.8321C110.672 63.2988 111.124 64.7655 111.454 66.281C112.139 69.2877 112.53 72.3555 112.616 75.4355L112.64 76.5844C112.64 76.7799 112.652 76.9632 112.652 77.1588L112.64 77.7332L112.616 78.8944V79.1877C112.616 79.2855 112.603 79.3832 112.603 79.481L112.567 80.0555L112.481 81.2044C112.444 81.5832 112.396 81.9744 112.347 82.3532C112.298 82.7321 112.261 83.1232 112.212 83.5021L112.029 84.6388C111.516 87.6821 110.684 90.6643 109.584 93.5366C108.472 96.4088 107.067 99.171 105.417 101.774L104.793 102.74L104.634 102.984C104.586 103.07 104.524 103.143 104.463 103.217L104.121 103.681L103.449 104.622C103.217 104.928 102.972 105.233 102.74 105.539L102.019 106.443L101.261 107.311C101.004 107.604 100.76 107.898 100.503 108.179C100.234 108.46 99.9778 108.741 99.7089 109.022C97.57 111.247 95.1989 113.239 92.6567 114.974C87.56 118.445 81.7422 120.841 75.68 121.99C72.6489 122.564 69.5689 122.833 66.4889 122.833C63.4089 122.821 60.3289 122.467 57.31 121.807C51.2845 120.487 45.54 117.92 40.4922 114.388L39.5511 113.715L39.3189 113.544L39.0867 113.361L38.6345 113.007L37.73 112.298L37.4978 112.114L37.2778 111.931L36.8378 111.552L35.9578 110.794L35.7378 110.611L35.53 110.415L35.1145 110.012L34.2834 109.218L34.0756 109.022L33.8678 108.814L33.4645 108.399C31.3256 106.187 29.3945 103.754 27.7078 101.175C26.0211 98.5966 24.5789 95.8466 23.4056 92.9988C22.2322 90.151 21.3156 87.1932 20.6678 84.1744C19.3723 78.1488 19.14 71.9032 19.8734 65.7799C20.6311 59.6688 22.3545 53.6677 24.8845 48.0577C25.0434 47.7033 25.2022 47.361 25.3611 47.0066L25.8623 45.9677L26.1189 45.4544L26.3878 44.941L26.9256 43.9144L27.4878 42.8999C27.5856 42.7288 27.6711 42.5577 27.7689 42.3988L28.0623 41.8977C28.2578 41.5677 28.4534 41.2377 28.6489 40.9077L29.26 39.9299C29.4556 39.5999 29.6756 39.2822 29.8834 38.9644C30.0911 38.6466 30.2989 38.3166 30.5189 37.9988C30.9589 37.3633 31.3867 36.7277 31.8511 36.1166C32.3034 35.4933 32.78 34.8822 33.2445 34.2833C33.4767 33.9777 33.7334 33.6844 33.9656 33.391C34.21 33.0977 34.4545 32.7922 34.6989 32.4988L35.4567 31.6188L36.2267 30.7633L36.6178 30.3355L37.0211 29.9199C37.29 29.6388 37.5467 29.3577 37.8156 29.0888C38.3656 28.551 38.9034 28.001 39.4656 27.4755L39.8811 27.0844L40.0889 26.8888L40.3089 26.6933L41.1767 25.9233C42.3378 24.921 43.5356 23.9433 44.7578 23.0022C45.98 22.061 47.2145 21.1566 48.4856 20.2888C51.0278 18.5533 53.68 16.9766 56.4545 15.6322C57.8356 14.9599 59.2534 14.3488 60.6834 13.7866C62.1134 13.2244 63.58 12.7355 65.0467 12.2833C67.9923 11.4033 70.9989 10.7433 74.03 10.1933C74.7878 10.0588 75.5456 9.92439 76.3034 9.81439C77.0611 9.70439 77.8311 9.61883 78.5889 9.5455C79.3589 9.47217 80.1167 9.42328 80.8867 9.38661C81.2656 9.37439 81.6567 9.36217 82.0356 9.34994C82.4145 9.34994 82.8056 9.3255 83.1845 9.3255',
    pathLength: 295.6989440917969,
    opacity: 0.3,
    delayModifier: 1,
  },
];

export const RebrandSpinner = (props:SpinnerProps) => {

  const renderBorders = () => {

    return borderPaths.map((
      {
        d,
        pathLength,
        opacity,
        delayModifier,
      },
      index
    ) => {

      return (
        <Logo
          key={index}
          d={d}
          opacity={opacity}
          strokeWidth={'1.25'}
          color={props.color}
          pathLength={pathLength}
          duration={props.duration}
          delay={props.duration * 0.08 * delayModifier} />
      );
    });
  };

  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox={'0 0 132 132'}>

      <Logo
        d={'M71.8068 47.068L71.7972 47.4705L72.1883 47.5657C81.0979 49.7355 87.5345 53.4924 91.7432 58.5186C95.9488 63.5411 97.9682 69.8769 97.9622 77.2806V77.281C97.9622 91.9499 86.2866 108.265 66.6355 108.265C50.7398 108.265 34.05 94.6642 34.05 72.7832C34.05 58.2712 41.8034 44.2175 51.8703 35.9655L51.8779 35.9593L51.8852 35.9528C60.6893 28.1388 72.6354 23.9807 82.9741 23.7537C81.3425 24.6842 79.3603 26.4839 78.1331 27.8361L78.1321 27.8372C71.9719 34.6662 71.8567 43.4036 71.8155 46.5325C71.8128 46.7352 71.8105 46.9144 71.8068 47.068Z'}
        strokeWidth={'2.0'}
        color={props.color}
        pathLength={mainLogoPathLength}
        duration={props.duration} />

      {renderBorders()}
    </Svg>
  );
};

RebrandSpinner.propTypes = {
  size: PropTypes.string.isRequired,
  duration: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

RebrandSpinner.defaultProps = {
  size: '70%',
  duration: 4,
  color: ColorCodes.Red1,
};