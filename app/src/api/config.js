import axios from "axios";

//urls
const audioBaseURL="http://127.0.0.1:8001"
const checkBaseUrl="http://3.27.163.131:9000"
const OriginBaseURL="http://3.27.163.131:8000"
export const startCashUrl="http://127.0.0.1:8002/api/start/"
export const BaseURL = "http://127.0.0.1:5000"
export const videoFeedUrl=`http://127.0.0.1:5000/video_feed`//Photo.js live view url
//axios api
const checkAxiosInstance = axios.create({
  baseURL: checkBaseUrl,
});
const audioAxiosInstance=axios.create({
  baseURL:audioBaseURL
})
 const axiosInstance = axios.create({
  baseURL: BaseURL,
});
export const originAxiosInstance = axios.create({
  baseURL: OriginBaseURL,
});
//prevent cors error
axios.defaults.withCredentials = true;

//PaymentNumber.js
export const sendDongNum = async (dongNum, checkCoupon) => {
  try {
    const { data } = await axiosInstance.get('/get_print_amount', {
      params: {
        printAmount: dongNum,
        checkCoupon:checkCoupon
      }
    });
    return data;
  } catch (error) {
    // 요청이 실패하면 에러를 콘솔에 기록합니다.
    console.error('Error sending dong number:', error);
    // 에러를 처리하거나 사용자에게 알릴 수 있는 다른 방법을 선택할 수 있습니다.
    throw error; // 에러를 호출자에게 다시 던집니다.
  }
};

//Promo.js

export const checkPromotionCode=async(payload)=>{
  const { data,status } = await checkAxiosInstance.post('/api/check_promotion_code',payload)
  return [data,status]
}


//Photo.js
export const getPhotos=async()=>{
  const { data } = await originAxiosInstance.get('/get_photo/')
  return data
}
export const sendCaptureReq=async()=>{

  const {data} = await axiosInstance.get('/capture')
  return data;
}
export  const startLiveView = async () => {
  try {
      await axios.get('http://127.0.0.1:5000/start_live_view');
  } catch (error) {
      console.error('Failed to start live view:', error);
  }
};

//sound get
export const getAudio=async(payload)=>{
  const {data}=await audioAxiosInstance.post(`/api/play_sound/`,payload)
  return data;
}
export const getClickAudio=async()=>{
  const {data}=await audioAxiosInstance.post(`/api/play_sound/`,{file_name:"click_sound.wav"})
  return data;
}