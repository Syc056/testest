
// import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import i18n from '../translations/i18n';
// import "../css/Sticker.css";
// import frame from '../assets/Sticker/frame.png';
// import sticker_frame from '../assets/Sticker/sticker_frame.png';
// import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// import Konva from 'konva';
// import useImage from 'use-image';
// import { StickerItem } from '../screens/StickerItem';
// import axios from 'axios';
// // import { Resizable } from 're-resizable';
// // Sticker
// import { stickers } from './stickers.data';

// // Go Back
// import goback_en from '../assets/Common/goback.png';
// import goback_en_hover from '../assets/Common/gobackhover.png';
// import goback_kr from '../assets/Common/kr/goback.png';
// import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// import goback_vn from '../assets/Common/vn/goback.png';
// import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // Background
// import background_en from '../assets/Sticker/BG.png';
// import background_kr from '../assets/Sticker/kr/BG.png';
// import background_vn from '../assets/Sticker/vn/BG.png';

// // Sticker
// import mood_en from '../assets/Sticker/mood.png';
// import mood_en_click from '../assets/Sticker/mood-click.png';
// import mood_kr from '../assets/Sticker/kr/mood-default.png';
// import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// import mood_vn from '../assets/Sticker/vn/mood-default.png';
// import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// import lovely_en from '../assets/Sticker/lovely.png';
// import lovely_en_click from '../assets/Sticker/lovely-click.png';
// import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// import cartoon_en from '../assets/Sticker/cartoon.png';
// import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// import y2k_en from '../assets/Sticker/y2k.png';
// import y2k_en_click from '../assets/Sticker/y2k-click.png';
// import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// import print from '../assets/Sticker/print.png';
// import print_click from '../assets/Sticker/print_click.png';
// import print_kr from '../assets/Sticker/kr/print-default.png';
// import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// import print_vn from '../assets/Sticker/vn/print-default.png';
// import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// //frame나오는 공간
// import frame_box from '../assets/Sticker/frame_box.png';
// import CustomCarousel from '../components/CustomCarousel';
// import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// import { originAxiosInstance } from '../api/config';
// // import React, { useCallback, useMemo, useState, useEffect, useRef, createRef } from 'react';
// // import { useTranslation } from 'react-i18next';
// // import { useNavigate } from 'react-router-dom';
// // import { Stage, Layer, Image as KonvaImage } from 'react-konva';
// // import StickerItem from './StickerItem'; // 가정: StickerItem은 별도의 파일로 분리됨

// function Sticker() {
//     const { t } = useTranslation();
//     const navigate = useNavigate();
//     const [src, setSrc] = useState(null);
//     const [hoveredImage, setHoveredImage] = useState(null);
//     const [selectedLayout, setSelectedLayout] = useState(null);
//     const [selectedPhotos, setSelectedPhotos] = useState([]);
//     const [filterEffect, setFilterEffect] = useState(null);
//     const [layoutList, setLayoutList] = useState([]);
//     const [myBackgrounds, setMyBackgrounds] = useState([]);
//     const bgLength = myBackgrounds.length;
//     const [selectedFrame, setSelectedFrame] = useState(null);
//     const [images, setImages] = useState([]);
//     const [selectedId, selectShape] = useState(null);
//     const [clickPrint, setClickPrint] = useState(false);
//     const [orderCode, setOrderCode] = useState(null);
//     const [language, setLanguage] = useState('en');

//     const [backgroundImage, setBackgroundImage] = useState(background_en);
//     const [scrollIdx, setScrollIdx] = useState(0);
//     const [dragStartY, setDragStartY] = useState(0);
//     const [bgIdx, setBgIdx] = useState(0);
//     const [stickerImgs, setStickerImgs] = useState([]);
//     const [isSel, setIsSel] = useState(false);
//     const [mood, setMood] = useState(null);
//     const [lovely, setLovely] = useState(null);
//     const [cartoon, setCartoon] = useState(null);
//     const [y2k, setY2k] = useState(null);
//     const [printButton, setPrintButton] = useState(null);
//     const [printRefs, setPrintRefs] = useState([]);
//     const [goBackButton, setGoBackButton] = useState(goback_en);
//     const [clickedButton, setClickedButton] = useState(false);
//     const [stickerDrag, setStickerDrag] = useState(false);
//     const [photos, setPhotos] = useState([]);
//     const [width, setWidth] = useState(0);
//     const [height, setHeight] = useState(0);
//     const [selectedCategory, setSelectedCategory] = useState('MOOD');
//     const [backgroundList, setBackgroundList] = useState([]);
//     const [tempImage, setTempImage] = useState();
//     const [stageRefs, setStageRefs] = useState([]);
//     const [frameSize, setFrameSize] = useState({
//         width: "",
//         height: ""
//     });

//     const chunkArray = useCallback((arr, size) => {
//         return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
//     }, []);

//     useEffect(() => {
//         const photos = JSON.parse(sessionStorage.getItem('photos'));
//         if (photos === null) return;
//         setPhotos(photos);
//     }, []);

//     useEffect(() => {
//         const storedLanguage = sessionStorage.getItem('language');
//         if (storedLanguage) {
//             setLanguage(storedLanguage);
//             if (storedLanguage === 'en') {
//                 setBackgroundImage(background_en);
//                 setMood(mood_en);
//                 setLovely(lovely_en);
//                 setCartoon(cartoon_en);
//                 setY2k(y2k_en);
//                 setPrintButton(print);
//                 setGoBackButton(goback_en);
//             } else if (storedLanguage === 'ko') {
//                 setBackgroundImage(background_kr);
//                 setMood(mood_kr);
//                 setLovely(lovely_kr);
//                 setCartoon(cartoon_kr);
//                 setY2k(y2k_kr);
//                 setPrintButton(print_kr);
//                 setGoBackButton(goback_kr);
//             } else if (storedLanguage === 'vi') {
//                 setBackgroundImage(background_vn);
//                 setMood(mood_vn);
//                 setLovely(lovely_vn);
//                 setCartoon(cartoon_vn);
//                 setY2k(y2k_vn);
//                 setPrintButton(print_vn);
//                 setGoBackButton(goback_vn);
//             }
//         }

//         const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
//         if (sessionSelectedLayout) {
//             const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

//             setSelectedLayout(parsedSelectedLayout.map(it => it.photo_cover));
//             setMyBackgrounds(parsedSelectedLayout.map(it => it.photo));
//             setStageRefs((refs) =>
//                 parsedSelectedLayout
//                     .map((_, i) => refs[i] || createRef()),
//             );
//             setPrintRefs((refs) =>
//                 parsedSelectedLayout
//                     .map((_, i) => refs[i] || createRef()),
//             );
//             const imgs = [];
//             for (let i = 0; i < parsedSelectedLayout.length; i++) {
//                 imgs.push([]);
//             }
//             setImages(imgs);
//             setStickerImgs(imgs);
//             setImages(parsedSelectedLayout.map(b => []));
//         }

//         const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
//         if (storedSelectedPhotos) {
//             setSelectedPhotos(storedSelectedPhotos);
//         }

//         // Filter
//         const filterSession = sessionStorage.getItem('filter');
//         if (filterSession) {
//             setFilterEffect(filterSession);
//         }

//         // Retrieve selected frame from session storage
//         const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
//         if (storedSelectedFrame) {
//             setSelectedFrame(storedSelectedFrame.frame);
//         }
//     }, []);

//     const applyContrastFilter = useCallback((data, value) => {
//         const factor = (259 * (value + 255)) / (255 * (259 - value));
//         for (let i = 0; i < data.length; i += 4) {
//             data[i] = truncate(factor * (data[i] - 128) + 128);
//             data[i + 1] = truncate(factor * (data[i + 1] - 128) + 128);
//             data[i + 2] = truncate(factor * (data[i + 2] - 128) + 128);
//         }
//     }, []);

//     const truncate = useCallback((value) => {
//         return Math.min(255, Math.max(0, value));
//     }, []);

//     const applyStyles = useCallback((img, styles) => {
//         Object.assign(img, styles);
//     }, []);

//     const applyFilters = useCallback((img, filters) => {
//         console.log("filter in func>>>",filters)
        
//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         canvas.width = img.width;
//         canvas.height = img.height;
//         context.drawImage(img, 0, 0, img.width, img.height);
//         const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//         const data = imageData.data;

//         filters.split(' ').forEach(filter => {
//             const [name, value] = filter.replace(')', '').split('(');
//             const floatValue = parseFloat(value);

//             switch (name) {
//                 case 'grayscale':
//                     applyGrayscaleFilter(data, floatValue);
//                     break;
//                 case 'sepia':
//                     applySepiaFilter(data, floatValue);
//                     break;
//                 case 'opacity':
//                     applyOpacityFilter(data, floatValue);
//                     break;
//                 case 'saturate':
//                     applySaturateFilter(data, floatValue);
//                     break;
//                 case 'contrast':
//                     applyContrastFilter(data, floatValue);
//                     break;
//                 default:
//                     break;
//             }
//         });

//         context.putImageData(imageData, 0, 0);
//         const newImage = new window.Image();
//         newImage.src = canvas.toDataURL();
//         return newImage;
//     }, []);

//     const applyGrayscaleFilter = useCallback((data, value) => {
//         for (let i = 0; i < data.length; i += 4) {
//             const avg = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
//             data[i] = data[i] * (1 - value) + avg * value;
//             data[i + 1] = data[i + 1] * (1 - value) + avg * value;
//             data[i + 2] = data[i + 2] * (1 - value) + avg * value;
//         }
//     }, []);

//     const applySepiaFilter = useCallback((data, value) => {
//         for (let i = 0; i < data.length; i += 4) {
//             const r = data[i];
//             const g = data[i + 1];
//             const b = data[i + 2];
//             data[i] = r * (1 - value) + (r * 0.393 + g * 0.769 + b * 0.189) * value;
//             data[i + 1] = g * (1 - value) + (r * 0.349 + g * 0.686 + b * 0.168) * value;
//             data[i + 2] = b * (1 - value) + (r * 0.272 + g * 0.534 + b * 0.131) * value;
//         }
//     }, []);

//     const applyOpacityFilter = useCallback((data, value) => {
//         for (let i = 3; i < data.length; i += 4) {
//             data[i] = data[i] * value;
//         }
//     }, []);

//     const applySaturateFilter = useCallback((data, value) => {
//         for (let i = 0; i < data.length; i += 4) {
//             const r = data[i];
//             const g = data[i + 1];
//             const b = data[i + 2];
//             const gray = 0.299 * r + 0.587 * g + 0.114 * b;
//             data[i] = gray * (1 - value) + r * value;
//             data[i + 1] = gray * (1 - value) + g * value;
//             data[i + 2] = gray * (1 - value) + b * value;
//         }
//     }, []);

//     const addStickerToPanel = useCallback(({ bgIdx, src, width, x, y }) => {
//         const uiRatio = 1; // UI용 스티커 배율
//         const printRatio = 3; // 프린트용 스티커 배율

//         const item = {
//             width: width * uiRatio,
//             x: x * uiRatio,
//             y: y * uiRatio,
//             src,
//             resetButtonRef: createRef()
//         };

//         const printItem = {
//             width: width * printRatio,
//             x: x * printRatio,
//             y: y * printRatio,
//             src,
//             resetButtonRef: createRef()
//         };

//         setImages((currentImages) => {
//             const newImages = currentImages.map((subList, index) => {
//                 if (index === bgIdx) {
//                     return [...subList, item];
//                 }
//                 return subList;
//             });

//             return newImages;
//         });

//         setStickerImgs((currentImages) => {
//             const newImages = currentImages.map((subList, index) => {
//                 if (index === bgIdx) {
//                     return [...subList, printItem];
//                 }
//                 return subList;
//             });

//             return newImages;
//         });
//     }, []);

//     const resetAllButtons = useCallback(() => {
//         images.forEach((subList) => {
//             subList.forEach((image) => {
//                 if (image.resetButtonRef.current) {
//                     image.resetButtonRef.current();
//                 }
//             });
//         });
//     }, [images]);

//     const handleCanvasClick = useCallback(
//         (event) => {
//             if (event.target.attrs.id === "backgroundImage") {
//                 resetAllButtons();
//             }
//         },
//         [resetAllButtons]
//     );

//     const checkDeselect = useCallback((e) => {
//         const clickedOnEmpty = e.target === e.target.getStage();
//         if (clickedOnEmpty) {
//             selectShape(null);
//         }
//     }, []);

//     const filterStickerByCategory = useCallback((category) => {
//         setSelectedCategory(category);
//     }, []);

//     const printFrameWithSticker = async () => {
//         if (clickPrint) {
//             return;
//         }
//         setClickPrint(true);

//         callPrinter();
//         uploadCloud();

//         setTimeout(() => {
//             navigate("/print");
//         }, 3000);
//     };

//     const rotateImageDataURL = useCallback((dataURL, degrees) => {
//         return new Promise((resolve, reject) => {
//             const image = new Image();
//             image.onload = () => {
//                 const canvas = document.createElement('canvas');
//                 const ctx = canvas.getContext('2d');
//                 const { width, height } = image;

//                 // Canvas 크기를 이미지 크기와 동일하게 설정
//                 canvas.width = width;
//                 canvas.height = height;

//                 // 이미지를 회전시키고 Canvas에 그리기
//                 ctx.translate(height / 2, width / 2);
//                 ctx.rotate(degrees * Math.PI / 180);
//                 ctx.drawImage(image, -width / 2, -height / 2);

//                 // 회전된 이미지를 Data URL로 변환하여 반환
//                 resolve(canvas.toDataURL());
//             };
//             image.onerror = reject;
//             image.src = dataURL;
//         });
//     }, []);

//     const uploadCloud = useCallback(() => {
//         try {
//             const stageRef = printRefs[bgIdx];
//             const originalDataURL = stageRef.current.toDataURL();
//             rotateImageDataURL(originalDataURL, 90)
//                 .then(rotatedDataURL => {
//                     const formData = new FormData();
//                     formData.append("photo", originalDataURL);
//                     formData.append("order_code", sessionStorage.getItem('orderCodeNum'));

//                     originAxiosInstance.post(
//                         `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
//                         formData,
//                         {
//                             headers: {
//                                 'Content-Type': 'multipart/form-data'
//                             }
//                         })
//                         .then(response => {
//                             const data = response.data;
//                             if (data.photo_url) {
//                                 sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
//                                 console.log("data url>>>", data.photo_url);
//                             }
//                         })
//                         .catch(error => {
//                             console.log(error);
//                             alert("업로드 에러");
//                         });
//                 })
//                 .catch(error => {
//                     console.error('이미지 회전 중 오류 발생:', error);
//                 });

//         } catch (error) {
//             console.log(error);
//         }
//     }, [bgIdx, printRefs, rotateImageDataURL]);

//     const callPrinter = useCallback(async () => {
//         alert("callPrinter");
//         const stageRef = printRefs[bgIdx];
//         if (!stageRef.current) {
//             alert("stageRef.current is null");
//             return;
//         }

//         const originalDataURL = stageRef.current.toDataURL();
//         const formData = new FormData();
//         formData.append("photo", originalDataURL);
//         formData.append("frame", selectedFrame);

//         originAxiosInstance.post(
//             `${process.env.REACT_APP_BACKEND}/frames/api/print`,
//             formData,
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             }
//         )
//             .then(response => {
//                 console.log('print response', response);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, [bgIdx, printRefs, selectedFrame]);

//     const hoverGoBackButton = useCallback(() => {
//         if (language === 'en') {
//             setGoBackButton(goBackButton === goback_en_hover ? goback_en : goback_en_hover);
//         } else if (language === 'vi') {
//             setGoBackButton(goBackButton === goback_vn_hover ? goback_vn : goback_vn_hover);
//         } else if (language === 'ko') {
//             setGoBackButton(goBackButton === goback_kr_hover ? goback_kr : goback_kr_hover);
//         }
//     }, [goBackButton, language]);

//     const hoverStickerButton = useCallback((stickerEffect) => {
//         if (stickerEffect === 'mood') {
//             if (language === 'en') {
//                 setMood(mood === mood_en_click ? mood_en : mood_en_click);
//             } else if (language === 'vi') {
//                 setMood(mood === mood_vn_click ? mood_vn : mood_vn_click);
//             } else if (language === 'ko') {
//                 setMood(mood === mood_kr_click ? mood_kr : mood_kr_click);
//             }
//         } else if (stickerEffect === 'lovely') {
//             if (language === 'en') {
//                 setLovely(lovely === lovely_en_click ? lovely_en : lovely_en_click);
//             } else if (language === 'vi') {
//                 setLovely(lovely === lovely_vn_click ? lovely_vn : lovely_vn_click);
//             } else if (language === 'ko') {
//                 setLovely(lovely === lovely_kr_click ? lovely_kr : lovely_kr_click);
//             }
//         } else if (stickerEffect === 'cartoon') {
//             if (language === 'en') {
//                 setCartoon(cartoon === cartoon_en_click ? cartoon_en : cartoon_en_click);
//             } else if (language === 'vi') {
//                 setCartoon(cartoon === cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
//             } else if (language === 'ko') {
//                 setCartoon(cartoon === cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
//             }
//         } else if (stickerEffect === 'y2k') {
//             if (language === 'en') {
//                 setY2k(y2k === y2k_en_click ? y2k_en : y2k_en_click);
//             } else if (language === 'vi') {
//                 setY2k(y2k === y2k_vn_click ? y2k_vn : y2k_vn_click);
//             } else if (language === 'ko') {
//                 setY2k(y2k === y2k_kr_click ? y2k_kr : y2k_kr_click);
//             }
//         }
//     }, [language, mood, lovely, cartoon, y2k]);

//     const hoverPrintButton = useCallback(() => {
//         if (language === 'en') {
//             setPrintButton(printButton === print_click ? print : print_click);
//         } else if (language === 'vi') {
//             setPrintButton(printButton === print_vn_click ? print_vn : print_vn_click);
//         } else if (language === 'ko') {
//             setPrintButton(printButton === print_kr_click ? print_kr : print_kr_click);
//         }
//     }, [printButton, language]);

//     const stickersData = useMemo(() => stickers.filter(sticker => sticker.category === selectedCategory), [selectedCategory]);
//     const selectedPhotoRows = useMemo(() => chunkArray(selectedPhotos, 2), [selectedPhotos, chunkArray]);
//     const myStickers = useMemo(() => chunkArray(stickersData, 4), [stickersData, chunkArray]);

//     const [isDragging, setIsDragging] = useState(false);
//     const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
//     const [radius, setRadius] = useState(50); // 초기 반지름

//     const handleMouseDown = useCallback((e) => {
//         setIsDragging(true);
//     }, []);

//     const handleMouseUp = useCallback(() => {
//         setIsDragging(false);
//     }, []);

//     const handleMouseMove = useCallback((e) => {
//         if (!isDragging) return;

//         const newPosition = {
//             x: e.clientX,
//             y: e.clientY
//         };
//         setPosition(newPosition);
//     }, [isDragging]);

//     const handleMouseLeave2 = useCallback(() => {
//         setIsDragging(false);
//     }, []);

//     const handleMouseWheel = useCallback((e) => {
//         if (e.deltaY > 0) {
//             setRadius(radius - 5);
//         } else {
//             setRadius(radius + 5);
//         }
//     }, [radius]);

//     const onDragStart = useCallback((event) => {
//         setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
//     }, []);

//     const onDragEnd = useCallback((event) => {
//         const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표

//         if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
//             setScrollIdx(prevIdx => (prevIdx + 1) % 4);
//             const nextScrollIdx = (scrollIdx + 1) % 4;
//             if (nextScrollIdx === 0) {
//                 setSelectedCategory("MOOD");
//             }
//             else if (nextScrollIdx === 1) {
//                 setSelectedCategory("LOVELY");
//             }
//             else if (nextScrollIdx === 2) {
//                 setSelectedCategory("CARTOON");
//             }
//             else if (nextScrollIdx === 3) {
//                 setSelectedCategory("Y2K");
//             }
//         }
//     }, [dragStartY, scrollIdx]);

//     const carouselRef = useRef(null);
//     const [isDown, setIsDown] = useState(false);
//     const [startY, setStartY] = useState(0);
//     const [scrollTop, setScrollTop] = useState(0);

//     useEffect(() => {
//         const carousel = carouselRef.current;
//         const dragging = stickerDrag;

//         const handleMouseDown = (e) => {
//             setIsDown(true);
//             if (carousel) {
//                 if (stickerDrag) return;
//                 setStartY(e.pageY - carousel.offsetTop);
//                 setScrollTop(carousel.scrollTop);
//             }
//         };

//         const handleMouseLeave = () => {
//             setIsDown(false);
//         };

//         const handleMouseUp = () => {
//             setIsDown(false);
//             snapToClosestItem();
//         };

//         const handleMouseMove = (e) => {
//             if (dragging) return;

//             if (!isDown) return;
//             e.preventDefault();
//             if (carousel) {
//                 const y = e.pageY - carousel.offsetTop;
//                 const walk = (y - startY) * 3; // Scroll speed
//                 carousel.scrollTop = scrollTop - walk;
//             }
//         };

//         const snapToClosestItem = () => {
//             if (!carousel) return;
//             const itemHeight = carousel.querySelector('.image').offsetHeight;
//             const scrollY = carousel.scrollTop;
//             const index = Math.round(scrollY / itemHeight);
//             setBgIdx(index);
//             carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
//         };

//         if (carousel) {
//             carousel.addEventListener('mousedown', handleMouseDown);
//             carousel.addEventListener('mouseleave', handleMouseLeave);
//             carousel.addEventListener('mouseup', handleMouseUp);
//             carousel.addEventListener('mousemove', handleMouseMove);
//         }

//         return () => {
//             if (carousel) {
//                 carousel.removeEventListener('mousedown', handleMouseDown);
//                 carousel.removeEventListener('mouseleave', handleMouseLeave);
//                 carousel.removeEventListener('mouseup', handleMouseUp);
//                 carousel.removeEventListener('mousemove', handleMouseMove);
//             }
//         };
//     }, [isDown, startY, scrollTop, stickerDrag]);

//     const getImgListLayout = useCallback((selectedFrame, selectedItems) => {
//         if (selectedItems.length === 0) {
//             return <></>;
//         }
//         if (selectedFrame === "Stripx2") {
//             return (
//                 <div className='selected-photos-s2-list'>
//                     {/* 1 row */}
//                     <div className='selected-photos-s2-row'>
//                         <img className='stripx2img' src={selectedItems[0].url} />
//                         <img className='stripx2img' src={selectedItems[1].url} />
//                     </div>
//                     {/* 2 row */}
//                     <div className='selected-photos-s2-row'>
//                         <img className='stripx2img' src={selectedItems[2].url} />
//                         <img className='stripx2img' src={selectedItems[3].url} />
//                     </div>
//                     {/* 3 row */}
//                     <div className='selected-photos-s2-row'>
//                         <img className='stripx2img' src={selectedItems[4].url} />
//                         <img className='stripx2img' src={selectedItems[5].url} />
//                     </div>
//                     {/* 4 row */}
//                     <div className='selected-photos-s2-row'>
//                         <img className='stripx2img' src={selectedItems[6].url} />
//                         <img className='stripx2img' src={selectedItems[7].url} />
//                     </div>
//                 </div>
//             );
//         }
//         else if (selectedFrame === "2cut-x2") {
//             return (
//                 <div className='selected-photos-2-list'>
//                     {selectedItems.map((it, idx) =>
//                         idx === 0 ? (
//                             <div className='selected-photo-2-container-first'>
//                                 <div className='selected-photo-2' style={{ backgroundImage: `url(${it.url})` }} />
//                             </div>
//                         ) : (
//                             <div className='selected-photo-2-container'>
//                                 <div className='selected-photo-2' style={{ backgroundImage: `url(${it.url})` }} />
//                             </div>
//                         )
//                     )}
//                 </div>
//             );
//         }
//         else if (selectedFrame === "4-cutx2") {
//             return (
//                 <div className='cut4x2-container'>
//                     <img className='cut4x2-0' src={selectedItems[0].url} />
//                     <img className='cut4x2-1' src={selectedItems[1].url} />
//                     <img className='cut4x2-2' src={selectedItems[2].url} />
//                     <img className='cut4x2-3' src={selectedItems[3].url} />
//                 </div>
//             );
//         }
//         else if (selectedFrame === "6-cutx2") {
//             return (
//                 <div className='cut6x2-container'>
//                     {/* 1 row */}
//                     <div className='cut6x2-row'>
//                         <img className='cut6x2-img' src={selectedItems[0].url} />
//                         <img className='cut6x2-img' src={selectedItems[1].url} />
//                     </div>
//                     {/* 2 row */}
//                     <div className='cut6x2-row'>
//                         <img className='cut6x2-img' src={selectedItems[2].url} />
//                         <img className='cut6x2-img' src={selectedItems[3].url} />
//                     </div>
//                     {/* 3 row */}
//                     <div className='cut6x2-row'>
//                         <img className='cut6x2-img' src={selectedItems[4].url} />
//                         <img className='cut6x2-img' src={selectedItems[5].url} />
//                     </div>
//                 </div>
//             );
//         }
//         else {

//         }
//     }, []);

//     function adjustStickerToBackgroundSize(width, height, stickerX, stickerY, stickerWidth, stickerHeight) {
//         const backgroundImageSize = { width: width, height: height };
//         const backgroundWidth = backgroundImageSize.width;
//         const backgroundHeight = backgroundImageSize.height;

//         // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
//         const backgroundAspectRatio = backgroundWidth / backgroundHeight;
//         const stickerAspectRatio = stickerWidth / stickerHeight;

//         let newStickerWidth, newStickerHeight, newStickerX, newStickerY;

//         if (stickerAspectRatio > backgroundAspectRatio) {
//             newStickerWidth = backgroundWidth * (stickerWidth / 1200);
//             newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
//             newStickerX = stickerX * (backgroundWidth / 1200);
//             newStickerY = stickerY * (backgroundWidth / 1200);
//         } else {
//             newStickerHeight = backgroundHeight * (stickerHeight / 1000);
//             newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
//             newStickerY = stickerY * (backgroundHeight / 1000);
//             newStickerX = stickerX * (backgroundHeight / 1000);
//         }

//         return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
//     }
//     useEffect(() => {
//         const loadImages = () => {
//             const imagePromises = selectedPhotos.map(index => {
//                 return new Promise((resolve, reject) => {
//                     const photo = photos[index];
//                     const tempImg = new Image();
//                     tempImg.crossOrigin = 'Anonymous';
//                     tempImg.src = photo.url;
    
//                     tempImg.onload = () => {
//                         applyStyles(tempImg, { width: 800, height: 800, filter: photo.filter });
//                         resolve(tempImg);
//                     };
    
//                     tempImg.onerror = (err) => reject(err);
//                 });
//             });
    
//             Promise.all(imagePromises)
//                 .then((tempImgs) => {
//                     setTempImage(tempImgs);
//                     console.log("이미지 로딩 끝", tempImgs);
//                 })
//                 .catch((error) => {
//                     console.error("Error loading images:", error);
//                 });
//         };
    
//         loadImages();
//     }, [selectedPhotos]);
    
//     useEffect(() => {
//         if (frameSize.width === "" || frameSize.height === "") return;

//         const loadImages = () => {
    

     

//             const element = document.querySelector('.image');
//             if (element) {
//                 const targetWidth = frameSize.width;
//                 const targetHeight = frameSize.height;

//                 const loadedImages = myBackgrounds.map((imageUrl) => {
//                     return new Promise((resolve, reject) => {
//                         const img = new Image();
//                         img.crossOrigin = 'Anonymous';
//                         img.src = imageUrl;

//                         img.onload = () => {
//                             const aspectRatio = img.width / img.height;

//                             let width, height;
//                             if (aspectRatio > 1) {
//                                 width = targetWidth;
//                                 height = targetWidth / aspectRatio;
//                             } else {
//                                 height = targetHeight;
//                                 width = targetHeight * aspectRatio;
//                             }

//                             setWidth(width);
//                             setHeight(height);

//                             resolve({
//                                 img,
//                                 width,
//                                 height
//                             });
//                         };
//                         img.onerror = (err) => reject(err);
//                     });
//                 });

//                 Promise.all(loadedImages)
//                     .then((images) => {
//                         setBackgroundList(images);
//                     })
//                     .catch((error) => {
//                         console.error("Error loading images:", error);
//                     });
//             }
//         };

//         loadImages();
//     }, [ myBackgrounds]);

//     useEffect(() => {
//         if (frameSize.width === "" || frameSize.height === "") return;

//         const loadImages = () => {
//             const element = document.querySelector('.image');
//             if (element) {
//                 const targetWidth = frameSize.width;
//                 const targetHeight = frameSize.height;

//                 const loadedImages = selectedLayout.map((imageUrl) => {
//                     return new Promise((resolve, reject) => {
//                         const img = new Image();
//                         img.crossOrigin = 'Anonymous';
//                         img.src = imageUrl;

//                         img.onload = () => {
//                             const aspectRatio = img.width / img.height;

//                             let width, height;
//                             if (aspectRatio > 1) {
//                                 width = targetWidth;
//                                 height = targetWidth / aspectRatio;
//                             } else {
//                                 height = targetHeight;
//                                 width = targetHeight * aspectRatio;
//                             }

//                             setWidth(width);
//                             setHeight(height);

//                             resolve({
//                                 img,
//                                 width,
//                                 height
//                             });
//                         };
//                         img.onerror = (err) => reject(err);
//                     });
//                 });

//                 Promise.all(loadedImages)
//                     .then((images) => {
//                         setLayoutList(images);
//                     })
//                     .catch((error) => {
//                         console.error("Error loading images:", error);
//                     });
//             }
//         };

//         loadImages();
//     }, [selectedLayout, frameSize.width, frameSize.height]);

//     const showKonvaImgLayout = useCallback((
//         selectedFrame, width, height, imgTag, ratio) => {
//         const getCrop = (image, newSize) => {
//             const aspectRatio = newSize.width / newSize.height;
//             const imageRatio = image.width / image.height;

//             let newWidth = image.width;
//             let newHeight = image.height;
//             let x = 0;
//             let y = 0;

//             if (imageRatio > aspectRatio) {
//                 newWidth = image.height * aspectRatio;
//                 x = (image.width - newWidth) / 2;
//             } else {
//                 newHeight = image.width / aspectRatio;
//                 y = (image.height - newHeight) / 2;
//             }

//             return {
//                 x: x,
//                 y: y,
//                 width: newWidth,
//                 height: newHeight
//             };
//         };

//         if (selectedFrame === "3-cutx2") {
//             const calcedHeight = height / 5.3;
//             const calcedWidth = calcedHeight * 1.02;
//             const x11 = 17;
//             const x12 = calcedWidth + x11 + 10;
//             const y1 = 18;
//             const crop1 = getCrop(
//                 { width: imgTag[0].width, height: imgTag[0].height },
//                 { width: calcedWidth, height: calcedHeight }
//             );
//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     <KonvaImage
//                         crop={{
//                             x: crop1.x,
//                             y: crop1.y,
//                             width: crop1.width - crop1.x,
//                             height: crop1.height
//                         }}
//                         width={calcedWidth * 2 + 10}
//                         height={calcedHeight}
//                         x={x11}
//                         y={y1}
//                         image={applyFilters(imgTag[0], imgTag[0].filter)}
//                     />
//                     {chunkArray(imgTag.slice(1), 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = calcedHeight + y1 + 10 + rowIndex * (calcedHeight + 10);
//                             const crop = getCrop(
//                                 { width: tag.width, height: tag.height },
//                                 { width: calcedWidth, height: calcedHeight }
//                             );
//                             return (
//                                 <KonvaImage
//                                     crop={{
//                                         x: crop.x,
//                                         y: crop.y,
//                                         width: crop.width - crop.x,
//                                         height: crop.height
//                                     }}
//                                     width={calcedWidth}
//                                     height={calcedHeight}
//                                     x={x}
//                                     y={y}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                 </>
//             );
//         } else if (selectedFrame === "5-cutx2") {
//             const calcedWidth = width / 2 - 22;
//             const calcedHeight = height / 2 - 30;
//             const x11 = 17;
//             const x12 = calcedWidth + x11 + 10;
//             const y1 = 18;

//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     {chunkArray(imgTag.slice(0, 4), 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = y1 + rowIndex * (calcedHeight + 10);
//                             return (
//                                 <KonvaImage
//                                     width={calcedWidth}
//                                     height={calcedHeight}
//                                     x={x}
//                                     y={y}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                     <KonvaImage
//                         width={calcedWidth * 2 + 10}
//                         height={calcedHeight}
//                         x={x11}
//                         y={y1 + 2 * (calcedHeight + 10)}
//                         image={applyFilters(imgTag[4], imgTag[4].filter)}
//                     />
//                 </>
//             );
//         }
//         else if (selectedFrame === "Stripx2") {
//             const calcedHeight = height / 5.3;
//             const calcedWidth = calcedHeight * 1.47;

//             const x11 = 22;
//             const x12 = calcedWidth + x11 + 22;
//             const y1 = 40;

//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     {chunkArray(imgTag, 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = y1 + rowIndex * (calcedHeight + 22);
//                             const crop = getCrop(
//                                 { width: tag.width, height: tag.height },
//                                 { width: calcedWidth, height: calcedHeight }
//                             );
//                             return (
//                                 <KonvaImage
//                                     crop={{
//                                         x: crop.x,
//                                         y: crop.y,
//                                         width: crop.width - crop.x,
//                                         height: crop.height
//                                     }}
//                                     width={calcedWidth * ratio}
//                                     height={calcedHeight * ratio}
//                                     x={x * ratio}
//                                     y={y * ratio}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                 </>
//             );
//         }

//         if (selectedFrame === "2cut-x2") {
//             const calcedWidth = width / 2.3;
//             const calcedHeight = calcedWidth * 1.13;
//             const x11 = 20;
//             const x12 = calcedWidth + x11 + 20;
//             const y1 = 40;

//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     {chunkArray(imgTag, 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = y1 + rowIndex * (calcedHeight + 12);
//                             const crop = getCrop(
//                                 { width: tag.width, height: tag.height },
//                                 { width: calcedWidth, height: calcedHeight }
//                             );
//                             return (
//                                 <KonvaImage
//                                     crop={{
//                                         x: crop.x,
//                                         y: crop.y,
//                                         width: crop.width - crop.x,
//                                         height: crop.height
//                                     }}
//                                     width={calcedWidth * ratio}
//                                     height={calcedHeight * ratio}
//                                     x={x * ratio}
//                                     y={y * ratio}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                 </>
//             );
//         }
//         else if (selectedFrame === "4-cutx2") {
//             const calcedHeight = height / 2.4;
//             const calcedWidth = calcedHeight * 1.33;
//             const x11 = 50;
//             const x12 = calcedWidth + x11 + 30;
//             const y1 = 22;

//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     {chunkArray(imgTag, 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = y1 + rowIndex * (calcedHeight + 12);
//                             return (
//                                 <KonvaImage
//                                     width={calcedWidth * ratio}
//                                     height={calcedHeight * ratio}
//                                     x={x * ratio}
//                                     y={y * ratio}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                 </>
//             );

//         }
//         else {
//             const calcedWidth = width / 2.4;
//             const calcedHeight = width / 2.4;
//             const x11 = 20;
//             const x12 = calcedWidth + x11 + 20;
//             const y1 = 22;

//             return imgTag.length === 0 ? <></> : (
//                 <>
//                     {chunkArray(imgTag, 2).map((row, rowIndex) => (
//                         row.map((tag, photoIndex) => {
//                             const x = photoIndex === 0 ? x11 : x12;
//                             const y = y1 + rowIndex * (calcedHeight + 12);
//                             return (
//                                 <KonvaImage
//                                     width={calcedWidth * ratio}
//                                     height={calcedHeight * ratio}
//                                     x={x * ratio}
//                                     y={y * ratio}
//                                     image={applyFilters(tag, tag.filter)}
//                                 />
//                             );
//                         })
//                     ))}
//                 </>
//             );
//         }
//     }, [applyFilters, chunkArray]);

    

//     useEffect(() => {
//         const smallRatio = 0.8;
//         const largeRatio = 1.45;
//         if (selectedFrame === "6-cutx2") {
//             setFrameSize({ width: 1920 * 1 / 6, height: 2900 * 1 / 6 });
//         }
//         else if (selectedFrame === "Stripx2") {
//             setFrameSize({ width: 257.79 * largeRatio, height: 384 * largeRatio });
//         }
//         else if (selectedFrame === "2cut-x2") {
//             setFrameSize({ width: 576 * smallRatio, height: 384 * smallRatio });
//         }
//         else {
//             setFrameSize({ width: 576 * smallRatio, height: 384 * smallRatio });
//         }

//     }, [
//         selectedFrame
//     ]);

//     const getKonvaClassName = useCallback((selectedFrame) => {
//         if (selectedFrame === "6-cutx2" || selectedFrame === "Stripx2") {
//             return "konva-vertical-image";
//         } else {
//             return "konva-horizontal-image";
//         }
//     }, [selectedFrame]);

//     const updateStickerSize = useCallback((id, newWidth) => {
//         setImages((prevImages) =>
//             prevImages.map((imageList, index) =>
//                 imageList.map((image) =>
//                     image.id === id ? { ...image, width: newWidth } : image
//                 )
//             )
//         );

//         setStickerImgs((prevImages) =>
//             prevImages.map((imageList, index) =>
//                 imageList.map((image) =>
//                     image.id === id ? { ...image, width: newWidth * 3 } : image // UI용 스티커 크기의 3배로 설정
//                 )
//             )
//         );
//     }, []);

//     const updateStickerPositionAndSize = useCallback((index, newX, newY, newWidth, newHeight) => {
//         setImages((currentImages) => {
//             const newImages = [...currentImages];
//             newImages[bgIdx][index] = {
//                 ...newImages[bgIdx][index],
//                 // x: newX,
//                 // y: newY,
//                 width: newWidth,
//                 height: newHeight,
//             };
//             return newImages;
//         });

//         setStickerImgs((currentImages) => {
//             const newImages = [...currentImages];
//             newImages[bgIdx][index] = {
//                 ...newImages[bgIdx][index],
//                 // x: newX * 3,
//                 // y: newY * 3,
//                 width: newWidth * 3,
//                 height: newHeight * 3,
//             };
//             return newImages;
//         });
//     }, [bgIdx]);

//     return (
//         <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
//             {/* 프린트용 */}
//             <div className='print'>
//                 <Stage
                
//                     width={frameSize.width * 3}
//                     height={frameSize.height * 3}
//                     offsetY={20}
//                     // offsetX={frameSize.width* 3/2}
//                     // offsetY={frameSize.height* 3/2}
//                     scale={{ x: 1, y: 1 }}
//                     x={0}
//                     y={0}
//                     // onClick={handleCanvasClick}
//                     onTap={handleCanvasClick}
//                     className={getKonvaClassName(selectedFrame)}
//                     onMouseDown={checkDeselect}
//                     onTouchStart={checkDeselect}
//                     ref={printRefs[bgIdx]}
//                 >
//                     <Layer>
//                         {backgroundList[bgIdx] && (
//                             <KonvaImage
//                                 image={backgroundList[bgIdx].img}
//                                 width={frameSize.width * 3}
//                                 height={frameSize.height * 3 - 20}
//                                 offsetY={20}
//                                 // offsetX={frameSize.width* 3/2}
//                                 // offsetY={(frameSize.height* 3/2)-20}
//                                 x={0}
//                                 y={10}
//                             />
//                         )}
//                         {tempImage && showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage, 3)}
//                     </Layer>
//                     <Layer>
//                         {layoutList[bgIdx] && (
//                             <KonvaImage
//                                 image={layoutList[bgIdx].img}
//                                 width={frameSize.width * 3}
//                                 height={frameSize.height * 3 - 20}
//                                 offsetY={20}
//                                 // offsetY={(frameSize.height* 3/2)-20}
//                                 x={0}
//                                 y={10}
//                             />
//                         )}
//                     </Layer>
//                     <Layer>
//                         {stickerImgs[bgIdx] && stickerImgs[bgIdx].map((image, i) => (
//                             <StickerItem
//                                 isStickerDrag={stickerDrag}
//                                 isSelected={isSel}
//                                 setStickerDrag={setStickerDrag}
//                                 // onTransform={() => console.log("이미지 리사이징 중")}
//                                 // onSelect={() => {
//                                 //     setIsSel(p => !p);
//                                 // }}
//                                 // onDelete={() => {
//                                 //     const newImages = [...stickerImgs];
//                                 //     newImages.splice(i, 1);
//                                 //     setStickerImgs(newImages);
//                                 // }}
//                                 // onDragEnd={(event) => {
//                                 //     image.x = event.target.x();
//                                 //     image.y = event.target.y();
//                                 // }}
//                                 // onChange={(x, y, width, height) => {
//                                 // }}
//                                 key={i}
//                                 image={image}
//                                 shapeProps={image}
//                             />
//                         ))}
//                     </Layer>
//                 </Stage>
//             </div>
//             <div className="left-sticker">
//                 <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
//                 <div className='v-carousel-container' ref={carouselRef}>
//                     <div className='v-carousel-images'>
//                         {myBackgrounds.map((src, index) => (
//                             <div className='image' key={index}>
//                                 <Stage
//                                     width={frameSize.width}
//                                     height={frameSize.height}
//                                     scale={{ x: 1, y: 1 }}
//                                     onClick={()=>{}}
//                                     onTap={handleCanvasClick}
//                                     className={getKonvaClassName(selectedFrame)}
//                                     onMouseDown={checkDeselect}
//                                     onTouchStart={checkDeselect}
//                                     ref={stageRefs[index]}
//                                 >
//                                     <Layer>
//                                         {backgroundList[bgIdx] && (
//                                             <KonvaImage
//                                                 image={backgroundList[bgIdx].img}
//                                                 width={frameSize.width}
//                                                 height={frameSize.height}
//                                                 x={0}
//                                                 y={0}
//                                             />
//                                         )}
//                                         { tempImage&&showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage, 1)}
//                                     </Layer>
//                                     <Layer>
//                                         {layoutList[bgIdx] && (
//                                             <KonvaImage
//                                                 image={layoutList[bgIdx].img}
//                                                 width={frameSize.width}
//                                                 height={frameSize.height}
//                                                 x={0}
//                                                 y={0}
//                                             />
//                                         )}
//                                     </Layer>
//                                     <Layer>
//                                         {images[bgIdx] && images[bgIdx].map((image, i) => (
//                                             <StickerItem
//                                                 isStickerDrag={stickerDrag}
//                                                 isSelected={isSel}
//                                                 setStickerDrag={setStickerDrag}


//                                                 onTransform={(x, y, width, height) => {
//                                                     updateStickerPositionAndSize(i, x, y, width, height);
//                                                 }}

//                                                 onSelect={() => {
//                                                     setIsSel(p => !p);
//                                                 }}
//                                                 onDelete={() => {
//                                                     const newPrintImages = [...stickerImgs];
//                                                     newPrintImages[bgIdx].splice(i, 1);
//                                                     setStickerImgs(newPrintImages);

//                                                     const newUiImages = [...images];
//                                                     newUiImages[bgIdx].splice(i, 1);
//                                                     setImages(newUiImages);
//                                                 }}
//                                                 onDragEnd={(event) => {
//                                                     const newX = event.target.x();
//                                                     const newY = event.target.y();
//                                                     updateStickerPositionAndSize(i, newX, newY, image.width, image.height);
//                                                 }}
//                                                 key={i}
//                                                 image={image}
//                                                 shapeProps={image}
//                                             />
//                                         ))}
//                                     </Layer>
//                                 </Stage>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="middle-sticker"
//                 draggable={true}
//                 onDragStart={onDragStart}
//                 onDrag={() => {
//                 }}
//                 onDragEnd={onDragEnd}
//                 style={{
//                     backgroundImage: `url(${sticker_frame})`
//                 }}>
//                 {myStickers.map((group, index) => (
//                     <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
//                         {group.map((mySticker, photoIndex) => (
//                             <div
//                                 key={photoIndex}
//                                 className="sticker"
//                                 onClick={() => {
//                                     const element = document.querySelector('.image');
//                                     const width = element.offsetWidth;
//                                     const height = element.offsetHeight;
//                                     addStickerToPanel({
//                                         bgIdx: bgIdx,
//                                         src: mySticker.photo,
//                                         width: 100,
//                                         ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200)
//                                     });
//                                 }}
//                             >
//                                 <img className="sticker-image"
//                                     alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
//                 <div className="sticker-category">
//                     <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
//                     <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
//                     <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
//                     <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
//                 </div>
//                 <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
//             </div>
//         </div>
//     );
// }

// export default Sticker;


// export default Sticker;

import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18n from '../translations/i18n';
import "../css/Sticker.css";
import frame from '../assets/Sticker/frame.png';
import sticker_frame from '../assets/Sticker/sticker_frame.png';
import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { StickerItem } from '../screens/StickerItem';
import axios from 'axios';
// import { Resizable } from 're-resizable';
// Sticker
import { stickers } from './stickers.data';

// Go Back
import goback_en from '../assets/Common/goback.png';
import goback_en_hover from '../assets/Common/gobackhover.png';
import goback_kr from '../assets/Common/kr/goback.png';
import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
import goback_vn from '../assets/Common/vn/goback.png';
import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// Background
import background_en from '../assets/Sticker/BG.png';
import background_kr from '../assets/Sticker/kr/BG.png';
import background_vn from '../assets/Sticker/vn/BG.png';

// Sticker
import mood_en from '../assets/Sticker/mood.png';
import mood_en_click from '../assets/Sticker/mood-click.png';
import mood_kr from '../assets/Sticker/kr/mood-default.png';
import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
import mood_vn from '../assets/Sticker/vn/mood-default.png';
import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

import lovely_en from '../assets/Sticker/lovely.png';
import lovely_en_click from '../assets/Sticker/lovely-click.png';
import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

import cartoon_en from '../assets/Sticker/cartoon.png';
import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

import y2k_en from '../assets/Sticker/y2k.png';
import y2k_en_click from '../assets/Sticker/y2k-click.png';
import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

import print from '../assets/Sticker/print.png';
import print_click from '../assets/Sticker/print_click.png';
import print_kr from '../assets/Sticker/kr/print-default.png';
import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
import print_vn from '../assets/Sticker/vn/print-default.png';
import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
//frame나오는 공간
import frame_box from '../assets/Sticker/frame_box.png';
import CustomCarousel from '../components/CustomCarousel';
import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
import { getAudio, getClickAudio, getPhotos, originAxiosInstance } from '../api/config';
let playAddEmojiSound=false;
function Sticker() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [src, setSrc] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [selectedLayout, setSelectedLayout] = useState(null);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [filterEffect, setFilterEffect] = useState(null);
    const [layoutList, setLayoutList] = useState([]);
    const [myBackgrounds, setMyBackgrounds] = useState([]);
    const bgLength = myBackgrounds.length;
    const [selectedFrame, setSelectedFrame] = useState(null);
    const [images, setImages] = useState([]);
    const [selectedId, selectShape] = useState(null);
    const [clickPrint, setClickPrint] = useState(false);
    const [orderCode, setOrderCode] = useState(null);
    const [language, setLanguage] = useState('en');

    const [backgroundImage, setBackgroundImage] = useState(background_en);
    //스크롤 인덱스
    const [scrollIdx, setScrollIdx] = useState(0);
    const [dragStartY, setDragStartY] = useState(0);
    const [bgIdx, setBgIdx] = useState(0);
    const [stickerImgs, setStickerImgs] = useState([]);
    // Sticker
    const [isSel, setIsSel] = useState(false);
    const [mood, setMood] = useState(null);
    const [lovely, setLovely] = useState(null);
    const [cartoon, setCartoon] = useState(null);
    const [y2k, setY2k] = useState(null);
    const [printButton, setPrintButton] = useState(null);
    const [printRefs, setPrintRefs] = useState([]);
    const [goBackButton, setGoBackButton] = useState(goback_en);
    const [clickedButton, setClickedButton] = useState(false);
    const [stickerDrag, setStickerDrag] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('MOOD');
    const [backgroundList, setBackgroundList] = useState([]);
    const [tempImage, setTempImage] = useState();
    const [stageRefs, setStageRefs] = useState([]);
    const [playFirst,setPlayFirst]=useState(0)
    const [frameSize, setFrameSize] = useState({
        width: "",
        height: ""
    });

    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
    };

    useEffect(() => {
        const photos = JSON.parse(sessionStorage.getItem('photos'));
        if (photos === null) return;
        setPhotos(photos);
    }, []);

    useEffect(() => {
        const storedLanguage = sessionStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
            if (storedLanguage === 'en') {
                setBackgroundImage(background_en);
                setMood(mood_en);
                setLovely(lovely_en);
                setCartoon(cartoon_en);
                setY2k(y2k_en);
                setPrintButton(print);
                setGoBackButton(goback_en);
            } else if (storedLanguage === 'ko') {
                setBackgroundImage(background_kr);
                setMood(mood_kr);
                setLovely(lovely_kr);
                setCartoon(cartoon_kr);
                setY2k(y2k_kr);
                setPrintButton(print_kr);
                setGoBackButton(goback_kr);
            } else if (storedLanguage === 'vi') {
                setBackgroundImage(background_vn);
                setMood(mood_vn);
                setLovely(lovely_vn);
                setCartoon(cartoon_vn);
                setY2k(y2k_vn);
                setPrintButton(print_vn);
                setGoBackButton(goback_vn);
            }
        }

        const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
        if (sessionSelectedLayout) {
            const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

            setSelectedLayout(parsedSelectedLayout.map(it => it.photo_cover));
            setMyBackgrounds(parsedSelectedLayout.map(it => it.photo));
            setStageRefs((refs) =>
                parsedSelectedLayout
                    .map((_, i) => refs[i] || createRef()),
            );
            setPrintRefs((refs) =>
                parsedSelectedLayout
                    .map((_, i) => refs[i] || createRef()),
            );
            const imgs = [];
            for (let i = 0; i < parsedSelectedLayout.length; i++) {
                imgs.push([]);
            }
            setImages(imgs);
            setStickerImgs(imgs);
            setImages(parsedSelectedLayout.map(b => []));
        }

        const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
        if (storedSelectedPhotos) {
            setSelectedPhotos(storedSelectedPhotos);
        }

        // Filter
        const filterSession = sessionStorage.getItem('filter');
        if (filterSession) {
            setFilterEffect(filterSession);
        }

        // Retrieve selected frame from session storage
        const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
        if (storedSelectedFrame) {

            setSelectedFrame(storedSelectedFrame.frame);
        }
    }, []);

    const applyContrastFilter = (data, value) => {
        const factor = (259 * (value + 255)) / (255 * (259 - value));
        for (let i = 0; i < data.length; i += 4) {
            data[i] = truncate(factor * (data[i] - 128) + 128);
            data[i + 1] = truncate(factor * (data[i + 1] - 128) + 128);
            data[i + 2] = truncate(factor * (data[i + 2] - 128) + 128);
        }
    };

    const truncate = (value) => {
        return Math.min(255, Math.max(0, value));
    };

    const applyStyles = (img, styles) => {
        Object.assign(img, styles);
    };

    // const applyFilters = (img, filters) => {
    //     console.log("in apply func>>>",filters)
    //     const canvas = document.createElement('canvas');
    //     const context = canvas.getContext('2d');
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     context.drawImage(img, 0, 0, img.width, img.height);
    //     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    //     const data = imageData.data;

    //     filters.split(' ').forEach(filter => {
    //         const [name, value] = filter.replace(')', '').split('(');
    //         const floatValue = parseFloat(value);

    //         switch (name) {
    //             case 'grayscale':
    //                 applyGrayscaleFilter(data, floatValue);
    //                 break;
    //             case 'sepia':
    //                 applySepiaFilter(data, floatValue);
    //                 break;
    //             case 'opacity':
    //                 applyOpacityFilter(data, floatValue);
    //                 break;
    //             case 'saturate':
    //                 applySaturateFilter(data, floatValue);
    //                 break;
    //             case 'contrast':
    //                 applyContrastFilter(data, floatValue);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });


    //     // context.putImageData(imageData, 0, 0);
    //     const newImage = new window.Image();
    //     newImage.src = canvas.toDataURL();
    //     return newImage;
    // };
    const applyFilters = (img, filters) => {
        console.log("filter function>>>")
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
    // canvas.style.objectFit="cover"
        // 필터를 적용
        context.filter = filters;
        context.drawImage(img, 0, 0, img.width, img.height);
    
        const newImage = new window.Image();
        newImage.src = canvas.toDataURL();
        return newImage;
    };
    

    const applyGrayscaleFilter = (data, value) => {
        for (let i = 0; i < data.length; i += 4) {
            const avg = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
            data[i] = data[i] * (1 - value) + avg * value;
            data[i + 1] = data[i + 1] * (1 - value) + avg * value;
            data[i + 2] = data[i + 2] * (1 - value) + avg * value;
        }
    };

    const applySepiaFilter = (data, value) => {
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            data[i] = r * (1 - value) + (r * 0.393 + g * 0.769 + b * 0.189) * value;
            data[i + 1] = g * (1 - value) + (r * 0.349 + g * 0.686 + b * 0.168) * value;
            data[i + 2] = b * (1 - value) + (r * 0.272 + g * 0.534 + b * 0.131) * value;
        }
    };

    const applyOpacityFilter = (data, value) => {
        for (let i = 3; i < data.length; i += 4) {
            data[i] = data[i] * value;
        }
    };

    const applySaturateFilter = (data, value) => {
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const gray = 0.299 * r + 0.587 * g + 0.114 * b;
            data[i] = gray * (1 - value) + r * value;
            data[i + 1] = gray * (1 - value) + g * value;
            data[i + 2] = gray * (1 - value) + b * value;
        }
    };
// 394번째 줄
const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
    const uiRatio = 1; // UI용 스티커 배율
    const printRatio = 3; // 프린트용 스티커 배율

    const item = {
        width: width,
        x: x,
        y: y,
        src,
        resetButtonRef: createRef()
    };

    const printItem = {
        width: width * printRatio,
        x: x * printRatio,
        y: y * printRatio,
        src,
        resetButtonRef: createRef()
    };

    setImages((currentImages) => {
        const newImages = currentImages.map((subList, index) => {
            if (index === bgIdx) {
                return [...subList, item];
            }
            return subList;
        });

        return newImages;
    });

    setStickerImgs((currentImages) => {
        const newImages = currentImages.map((subList, index) => {
            if (index === bgIdx) {
                return [...subList, printItem];
            }
            return subList;
        });

        return newImages;
    });
};


    const resetAllButtons = useCallback(() => {
        images.forEach((subList) => {
            subList.forEach((image) => {
                if (image.resetButtonRef.current) {
                    image.resetButtonRef.current();
                }
            });
        });
    }, [images]);

    const handleCanvasClick = useCallback(
        (event) => {
            if (event.target.attrs.id === "backgroundImage") {
                resetAllButtons();
            }
        },
        [resetAllButtons]
    );

    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    const filterStickerByCategory = (category) => {
        getClickAudio()
        setSelectedCategory(category);
    };

    const printFrameWithSticker = async (event,) => {
        if (clickPrint === true) {
            return;
        }
        
        playPrintAudio()
        setClickPrint(true);

        callPrinter();
        uploadCloud();

        // setTimeout(() => {
        //     navigate("/print");
        // }, 3000);
    };

    function rotateImageDataURL(dataURL, degrees) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const { width, height } = image;

                // Canvas 크기를 이미지 크기와 동일하게 설정
                canvas.width = width;
                canvas.height = height;

                // 이미지를 회전시키고 Canvas에 그리기
                ctx.translate(height / 2, width / 2);
                ctx.rotate(degrees * Math.PI / 180);
                ctx.drawImage(image, -width / 2, -height / 2);

                // 회전된 이미지를 Data URL로 변환하여 반환
                resolve(canvas.toDataURL());
            };
            image.onerror = reject;
            image.src = dataURL;
        });
    }

    const uploadCloud = () => {
        try {
            const stageRef = printRefs[bgIdx];
            const originalDataURL = stageRef.current.toDataURL();
            let rotated = null;
            rotateImageDataURL(originalDataURL, 90)
                .then(rotatedDataURL => {
                    const formData = new FormData();
                    formData.append("photo", originalDataURL);
                    formData.append("order_code", sessionStorage.getItem('orderCodeNum'));

                    originAxiosInstance.post(
                        `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(response => {
                            const data = response.data;
                            if (data.photo_url!=null) {
                                sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url.toString());
                                console.log("data url>>>", data.photo_url);
                                
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            console.log("업로드 에러");
                        });
                })
                .catch(error => {
                    console.error('이미지 회전 중 오류 발생:', error);
                });

        } catch (error) {
            console.log(error);
        }
    };

    // const callPrinter = async () => {
    //     const stageRef = printRefs[bgIdx];
    //     if (!stageRef.current) {
    //         console.log("stageRef.current is null");
    //         return;
    //     }

    //     const originalDataURL = stageRef.current.toDataURL();
    //     const formData = new FormData();

    //     formData.append("photo", originalDataURL);
    //     formData.append("frame", selectedFrame);

    //     originAxiosInstance.post(
    //         `${process.env.REACT_APP_BACKEND}/frames/api/print`,
    //         formData,
    //         {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //     )
    //         .then(response => {
    //             console.log('print response', response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };
    // const callPrinter = async () => {
    //     const stageRef = printRefs[bgIdx];
    //     if (!stageRef.current) {
    //         console.log("stageRef.current is null");
    //         return;
    //     }

    //     const originalDataURL = stageRef.current.toDataURL();
    //     const formData = new FormData();

    //     formData.append("photo", originalDataURL);
    //     formData.append("frame", selectedFrame);
    //     console.log("photo type>>>",typeof originalDataURL)

    //   const response=  await originAxiosInstance.post(
    //         `${process.env.REACT_APP_BACKEND}/frames/api/print`,
    //         formData,
    //         {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //     )
    //     const printUrl = response.data.print_url;
    //             const printData = response.data.print_data;
    
    //             console.log(printUrl)
    //             console.log(printData)
        
    //             // 로컬 프린터 서버로 최종 요청을 보냅니다
    //             const localPrintResponse = await fetch(printUrl, {
    //                 method: 'POST',
    //                 body: JSON.stringify(printData),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
        
    //             if (localPrintResponse.ok) {
    //                 console.log('Print job started successfully.');
    //             } else {
    //                 console.log('Failed to start print job.');
    //             }
    //         // } catch (error) {
    // };'

    const callPrinter = async () => {
        const stageRef = printRefs[bgIdx];
        if (!stageRef.current) {
            console.log("stageRef.current is null");
            return;
        }
    ///
        const originalDataURL = stageRef.current.toDataURL();
        var blobBin = atob(originalDataURL.split(',')[1]);
var array = [];
for(var i = 0; i < blobBin.length; i++) {
    array.push(blobBin.charCodeAt(i));
}
var newFile=new Blob([new Uint8Array(array)], {type: 'image/png'});
        //
        const formData = new FormData();
    
        // 파일 데이터를 Blob 형태로 변환
        // const blob = await (await fetch(originalDataURL)).blob();
        // const file = new File([blob], "print_image.png", { type: blob.type });
        // formData.append("photo", file);
        console.log("new file>>>",newFile)
        formData.append("photo", newFile);
        formData.append("frame", selectedFrame);
        for (let [key, value] of formData.entries()) {
            console.log(`formData>>> ${key}:`, value);
        }
    
        try {
            const response = await originAxiosInstance.post(
                `${process.env.REACT_APP_BACKEND}/frames/api/print`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    
            // 외부 서버로부터 받은 응답 데이터
            const printUrl = response.data.print_url;
            const printData = response.data.print_data;
            const uploadsDataPath = response.data.print_data.file_path
    console.log('upload url>>>',uploadsDataPath)
const res=await getPhotos()
const filtered=res.images.filter(img=>img.url.includes(uploadsDataPath))

console.log("get photos res>>>",filtered)

            // await originAxiosInstance.post(
            //     `${process.env.REACT_APP_BACKEND}/frames/api/del-copy-photo`,
               
            //        {copy_file_name :uploadsDataPath},
            //       {   headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }
            // );

            console.log(printUrl);
            console.log(printData);
    
            // 파일 경로에 접근하여 파일을 읽고 데이터와 함께 Flask로 전송
            // const fileResponse = await fetch(printData.file_path);
            //
            const fileResponse = await fetch(filtered[0].url);
            const fileBlob = await fileResponse.blob();
            //
            const formDataToFlask = new FormData();
            formDataToFlask.append('file', new File([fileBlob], "print_image.png", { type: fileBlob.type }));
            formDataToFlask.append('frame', printData.frame);
    
            const localPrintResponse = await fetch(printUrl, {
                method: 'POST',
                body: formDataToFlask,
            },);
    
            if (localPrintResponse.ok) {
                console.log('Print job started successfully.');
            } else {
                console.log('Failed to start print job.');
            }
        } catch (error) {
            console.error('Error during printing process:', error);
        }
    };
    
//     const callPrinter = async () => {
//         const stageRef = printRefs[bgIdx];
//         if (!stageRef.current) {
//             console.log("stageRef.current is null");
//             return;
//         }
    
//         const originalDataURL = stageRef.current.toDataURL();
//         const formData = new FormData();
    
//         // 파일 데이터를 Blob 형태로 변환
//         const blob = await (await fetch(originalDataURL)).blob();
//         const file = new File([blob], "print_image.png", { type: blob.type });
//         formData.append("photo", file);
//         formData.append("frame", selectedFrame);
//         for (let [key, value] of formData.entries()) {
//             console.log(`formData>>> ${key}:`, value);
//         }
    
//         try {
//             const response = await originAxiosInstance.post(
//                 `${process.env.REACT_APP_BACKEND}/frames/api/print`,
//                 formData,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 }
//             );
    
//             // 외부 서버로부터 받은 응답 데이터
//             const printUrl = response.data.print_url;
//             const printData = response.data.print_data;
//             const uploadsDataPath = response.data.print_data.file_path
//     console.log('upload url>>>',uploadsDataPath)
// const res=await getPhotos()
// const filtered=res.images.filter(img=>img.url.includes(uploadsDataPath))

// console.log("get photos res>>>",filtered)

//             // await originAxiosInstance.post(
//             //     `${process.env.REACT_APP_BACKEND}/frames/api/del-copy-photo`,
               
//             //        {copy_file_name :uploadsDataPath},
//             //       {   headers: {
//             //             'Content-Type': 'multipart/form-data'
//             //         }
//             //     }
//             // );

//             console.log(printUrl);
//             console.log(printData);
    
//             // 파일 경로에 접근하여 파일을 읽고 데이터와 함께 Flask로 전송
//             // const fileResponse = await fetch(printData.file_path);
//             const fileResponse = await fetch(filtered[0].url);
//             const fileBlob = await fileResponse.blob();
//             const formDataToFlask = new FormData();
//             formDataToFlask.append('file', new File([fileBlob], "print_image.png", { type: fileBlob.type }));
//             formDataToFlask.append('frame', printData.frame);
    
//             const localPrintResponse = await fetch(printUrl, {
//                 method: 'POST',
//                 body: formDataToFlask,
//             },);
    
//             if (localPrintResponse.ok) {
//                 console.log('Print job started successfully.');
//             } else {
//                 console.log('Failed to start print job.');
//             }
//         } catch (error) {
//             console.error('Error during printing process:', error);
//         }
//     };
    


    // const callPrinter = async () => {
    //     const stageRef = printRefs[bgIdx];
    //     if (!stageRef.current) {
    //         console.log("stageRef.current is null");
    //         return;
    //     }
    
    //     const originalDataURL = stageRef.current.toDataURL();
    //     const formData = new FormData();
    
    //     // 파일 데이터를 Blob 형태로 변환
    //     const blob = await (await fetch(originalDataURL)).blob();
    //     const file=new File([blob],"print_image.png",{type:blob.type})
    //     formData.append("photo",file);
    //     formData.append("frame", selectedFrame);
    //     for (let [key, value] of formData.entries()) {
    //         console.log(`formData>>> ${key}:`, value);
    //     }
    //     // try {
    //         const response = await originAxiosInstance.post(
    //             `${process.env.REACT_APP_BACKEND}/frames/api/print`,
    //             formData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             }
    //         );
    
    //         // 외부 서버로부터 받은 응답 데이터
    //         const printUrl = response.data.print_url;
    //         const printData = response.data.print_data;

    //         console.log(printUrl)
    //         console.log(printData)
    
    //         // 로컬 프린터 서버로 최종 요청을 보냅니다
    //         const localPrintResponse = await fetch(printUrl, {
    //             method: 'POST',
    //             body: JSON.stringify(printData),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    
    //         if (localPrintResponse.ok) {
    //             console.log('Print job started successfully.');
    //         } else {
    //             console.log('Failed to start print job.');
    //         }
    //     // } catch (error) {
    //     //     console.error('Error during printing process:', error);
    //     // }
    // };
    // const callPrinter = async () => {
    //     const stageRef = printRefs[bgIdx];
    //     if (!stageRef.current) {
    //         console.log("stageRef.current is null");
    //         return;
    //     }
    
    //     const originalDataURL = stageRef.current.toDataURL();
    //     const formData = new FormData();
    
    //     // 파일 데이터를 Blob 형태로 변환
    //     const blob = await (await fetch(originalDataURL)).blob();
    //     formData.append("photo", blob, "print_image.png");
    //     formData.append("frame", selectedFrame);
    //     for (let [key, value] of formData.entries()) {
    //         console.log(`formData>>> ${key}:`, value);
    //     }
    //     // try {
    //         const response = await originAxiosInstance.post(
    //             `${process.env.REACT_APP_BACKEND}/frames/api/print`,
    //             formData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             }
    //         );
    
    //         // 외부 서버로부터 받은 응답 데이터
    //         const printUrl = response.data.print_url;
    //         const printData = response.data.print_data;

    //         console.log(printUrl)
    //         console.log(printData)
    
    //         // 로컬 프린터 서버로 최종 요청을 보냅니다
    //         const localPrintResponse = await fetch(printUrl, {
    //             method: 'POST',
    //             body: JSON.stringify(printData),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    
    //         if (localPrintResponse.ok) {
    //             console.log('Print job started successfully.');
    //         } else {
    //             console.log('Failed to start print job.');
    //         }
    //     // } catch (error) {
    //     //     console.error('Error during printing process:', error);
    //     // }
    // };
    

    const hoverGoBackButton = () => {
        if (language === 'en') {
            setGoBackButton(goBackButton === goback_en_hover ? goback_en : goback_en_hover);
        } else if (language === 'vi') {
            setGoBackButton(goBackButton === goback_vn_hover ? goback_vn : goback_vn_hover);
        } else if (language === 'ko') {
            setGoBackButton(goBackButton === goback_kr_hover ? goback_kr : goback_kr_hover);
        }
    };

    const hoverStickerButton = (stickerEffect) => {
        if (stickerEffect === 'mood') {
            if (language === 'en') {
                setMood(mood === mood_en_click ? mood_en : mood_en_click);
            } else if (language === 'vi') {
                setMood(mood === mood_vn_click ? mood_vn : mood_vn_click);
            } else if (language === 'ko') {
                setMood(mood === mood_kr_click ? mood_kr : mood_kr_click);
            }
        } else if (stickerEffect === 'lovely') {
            if (language === 'en') {
                setLovely(lovely === lovely_en_click ? lovely_en : lovely_en_click);
            } else if (language === 'vi') {
                setLovely(lovely === lovely_vn_click ? lovely_vn : lovely_vn_click);
            } else if (language === 'ko') {
                setLovely(lovely === lovely_kr_click ? lovely_kr : lovely_kr_click);
            }
        } else if (stickerEffect === 'cartoon') {
            if (language === 'en') {
                setCartoon(cartoon === cartoon_en_click ? cartoon_en : cartoon_en_click);
            } else if (language === 'vi') {
                setCartoon(cartoon === cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
            } else if (language === 'ko') {
                setCartoon(cartoon === cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
            }
        } else if (stickerEffect === 'y2k') {
            if (language === 'en') {
                setY2k(y2k === y2k_en_click ? y2k_en : y2k_en_click);
            } else if (language === 'vi') {
                setY2k(y2k === y2k_vn_click ? y2k_vn : y2k_vn_click);
            } else if (language === 'ko') {
                setY2k(y2k === y2k_kr_click ? y2k_kr : y2k_kr_click);
            }
        }
    };

    const hoverPrintButton = () => {
        if (language === 'en') {
            setPrintButton(printButton === print_click ? print : print_click);
        } else if (language === 'vi') {
            setPrintButton(printButton === print_vn_click ? print_vn : print_vn_click);
        } else if (language === 'ko') {
            setPrintButton(printButton === print_kr_click ? print_kr : print_kr_click);
        }
    };

    // Chunk the selected photos array into arrays of 2 photos each
    const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
    const selectedPhotoRows = chunkArray(selectedPhotos, 2);
    //스크롤 하면 인덱스에 따라 스티커 타입 정하기
    const myStickers = chunkArray(stickersData, 4);

    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
    const [radius, setRadius] = useState(50); // 초기 반지름

    const handleMouseDown = (e) => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const newPosition = {
            x: e.clientX,
            y: e.clientY
        };
        setPosition(newPosition);
    };

    const handleMouseLeave2 = () => {
        setIsDragging(false);
    };

    const handleMouseWheel = (e) => {
        if (e.deltaY > 0) {
            setRadius(radius - 5);
        } else {
            setRadius(radius + 5);
        }
    };

    const onDragStart = (event) => {
        setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
    };

    const onDragEnd = (event) => {
        const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표

        if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
            setScrollIdx(prevIdx => (prevIdx + 1) % 4);
            const nextScrollIdx = (scrollIdx + 1) % 4;
            if (nextScrollIdx === 0) {
                setSelectedCategory("MOOD");
            }
            else if (nextScrollIdx === 1) {
                setSelectedCategory("LOVELY");
            }
            else if (nextScrollIdx === 2) {
                setSelectedCategory("CARTOON");
            }
            else if (nextScrollIdx === 3) {
                setSelectedCategory("Y2K");
            }
        }
    };

    const carouselRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        const dragging = stickerDrag;

        const handleMouseDown = (e) => {
            setIsDown(true);
            if (carousel) {
                if (stickerDrag) return;
                setStartY(e.pageY - carousel.offsetTop);
                setScrollTop(carousel.scrollTop);
            }
        };

        const handleMouseLeave = () => {
            setIsDown(false);
        };

        const handleMouseUp = () => {
            setIsDown(false);
            snapToClosestItem();
        };

        const handleMouseMove = (e) => {
            if (dragging) return;

            if (!isDown) return;
            e.preventDefault();
            if (carousel) {
                const y = e.pageY - carousel.offsetTop;
                const walk = (y - startY) * 3; // Scroll speed
                carousel.scrollTop = scrollTop - walk;
            }
        };

        const snapToClosestItem = () => {
            if (!carousel) return;
            const itemHeight = carousel.querySelector('.image').offsetHeight;
            const scrollY = carousel.scrollTop;
            const index = Math.round(scrollY / itemHeight);
            setBgIdx(index);
            carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
        };

        if (carousel) {
            carousel.addEventListener('mousedown', handleMouseDown);
            carousel.addEventListener('mouseleave', handleMouseLeave);
            carousel.addEventListener('mouseup', handleMouseUp);
            carousel.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('mousedown', handleMouseDown);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
                carousel.removeEventListener('mouseup', handleMouseUp);
                carousel.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [isDown, startY, scrollTop, stickerDrag]);

    const getImgListLayout = (selectedFrame, selectedItems) => {
        if (selectedItems.length === 0) {
            return <></>;
        }
        if (selectedFrame === "Stripx2") {
            return (
                <div className='selected-photos-s2-list'>
                    {/* 1 row */}
                    <div className='selected-photos-s2-row'>
                        <img className='stripx2img' src={selectedItems[0].url} />
                        <img className='stripx2img' src={selectedItems[1].url} />
                    </div>
                    {/* 2 row */}
                    <div className='selected-photos-s2-row'>
                        <img className='stripx2img' src={selectedItems[2].url} />
                        <img className='stripx2img' src={selectedItems[3].url} />
                    </div>
                    {/* 3 row */}
                    <div className='selected-photos-s2-row'>
                        <img className='stripx2img' src={selectedItems[4].url} />
                        <img className='stripx2img' src={selectedItems[5].url} />
                    </div>
                    {/* 4 row */}
                    <div className='selected-photos-s2-row'>
                        <img className='stripx2img' src={selectedItems[6].url} />
                        <img className='stripx2img' src={selectedItems[7].url} />
                    </div>
                </div>
            );
        }
        else if (selectedFrame === "2cut-x2") {
            return (
                <div className='selected-photos-2-list'>
                    {selectedItems.map((it, idx) =>
                        idx === 0 ? (
                            <div className='selected-photo-2-container-first'>
                                <div className='selected-photo-2' style={{ backgroundImage: `url(${it.url})` }} />
                            </div>
                        ) : (
                            <div className='selected-photo-2-container'>
                                <div className='selected-photo-2' style={{ backgroundImage: `url(${it.url})` }} />
                            </div>
                        )
                    )}
                </div>
            );
        }
        else if (selectedFrame === "4-cutx2") {
            return (
                <div className='cut4x2-container'>
                    <img className='cut4x2-0' src={selectedItems[0].url} />
                    <img className='cut4x2-1' src={selectedItems[1].url} />
                    <img className='cut4x2-2' src={selectedItems[2].url} />
                    <img className='cut4x2-3' src={selectedItems[3].url} />
                </div>
            );
        }
        else if (selectedFrame === "6-cutx2") {
            return (
                <div className='cut6x2-container'>
                    {/* 1 row */}
                    <div className='cut6x2-row'>
                        <img className='cut6x2-img' src={selectedItems[0].url} />
                        <img className='cut6x2-img' src={selectedItems[1].url} />
                    </div>
                    {/* 2 row */}
                    <div className='cut6x2-row'>
                        <img className='cut6x2-img' src={selectedItems[2].url} />
                        <img className='cut6x2-img' src={selectedItems[3].url} />
                    </div>
                    {/* 3 row */}
                    <div className='cut6x2-row'>
                        <img className='cut6x2-img' src={selectedItems[4].url} />
                        <img className='cut6x2-img' src={selectedItems[5].url} />
                    </div>
                </div>
            );
        }
        else {

        }
    };

    function adjustStickerToBackgroundSize(width, height, stickerX, stickerY, stickerWidth, stickerHeight) {
        const backgroundImageSize = { width: width, height: height };
        const backgroundWidth = backgroundImageSize.width;
        const backgroundHeight = backgroundImageSize.height;

        // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
        const backgroundAspectRatio = backgroundWidth / backgroundHeight;
        const stickerAspectRatio = stickerWidth / stickerHeight;

        let newStickerWidth, newStickerHeight, newStickerX, newStickerY;

        if (stickerAspectRatio > backgroundAspectRatio) {
            newStickerWidth = backgroundWidth * (stickerWidth / 1200);
            newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
            newStickerX = stickerX * (backgroundWidth / 1200);
            newStickerY = stickerY * (backgroundWidth / 1200);
        } else {
            newStickerHeight = backgroundHeight * (stickerHeight / 1000);
            newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
            newStickerY = stickerY * (backgroundHeight / 1000);
            newStickerX = stickerX * (backgroundHeight / 1000);
        }

        return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
    }
    useEffect(() => {
        const loadImages = () => {
            const imagePromises = selectedPhotos.map(index => {
                return new Promise((resolve, reject) => {
                    const photo = photos[index];
                    const tempImg = new Image();
                    tempImg.crossOrigin = 'Anonymous';
                    tempImg.src = photo.url;
    
                    tempImg.onload = () => {
                        applyStyles(tempImg, { width: 2400, height: 1600, filter: photo.filter });
                        // tempImg.style.filter= photo.filter
                        resolve(tempImg);
                    };
    
                    tempImg.onerror = (err) => reject(err);
                });
            });
    
            Promise.all(imagePromises)
                .then((tempImgs) => {
                    const filterapply=tempImgs.map(img=>applyFilters(img,img.filter))
                    setTempImage(filterapply);
                })
                .catch((error) => {
                    console.error("Error loading images:", error);
                });
        };
    
        loadImages();
    }, [selectedPhotos]);
    // useEffect(() => {
    //     const loadImages = () => {
    //         const imagePromises = selectedPhotos.map(index => {
    //             return new Promise((resolve, reject) => {
    //                 const photo = photos[index];
    //                 const tempImg = new Image();
    //                 tempImg.crossOrigin = 'Anonymous';
    //                 tempImg.src = photo.url;
    
    //                 tempImg.onload = () => {
    //                     // 필터 적용
    //                     // const filteredImg = applyFilters(tempImg, photo.filter);
    //                     // resolve(filteredImg);
    //                 };
    
    //                 tempImg.onerror = (err) => reject(err);
    //             });
    //         });
    
    //         Promise.all(imagePromises)
    //             .then((tempImgs) => {
    //                 setTempImage(tempImgs);
    //                 console.log("이미지 로딩 끝", tempImgs);
    //             })
    //             .catch((error) => {
    //                 console.error("Error loading images:", error);
    //             });
    //     };
    
    //     loadImages();
    // }, [selectedPhotos]);
    useEffect(() => {
        if (frameSize.width === "" || frameSize.height === "") return;

        const loadImages = () => {
            // const tempImgs = selectedPhotos.map(index => {
            //     const photo = photos[index];
            //     const tempImg = new Image();
            //     tempImg.crossOrigin = 'Anonymous';
            //     tempImg.src = photo.url;
            //     applyStyles(tempImg, { width: 800, height: 800, filter: photo.filter });
            //     return tempImg;
            // });

            // setTempImage(tempImgs);

            const element = document.querySelector('.image');
            if (element) {
                const targetWidth = frameSize.width;
                const targetHeight = frameSize.height;

                const loadedImages = myBackgrounds.map((imageUrl) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.crossOrigin = 'Anonymous';
                        img.src = imageUrl;

                        img.onload = () => {
                            const aspectRatio = img.width / img.height;

                            let width, height;
                            if (aspectRatio > 1) {
                                width = targetWidth;
                                height = targetWidth / aspectRatio;
                            } else {
                                height = targetHeight;
                                width = targetHeight * aspectRatio;
                            }

                            setWidth(width);
                            setHeight(height);

                            resolve({
                                img,
                                width,
                                height
                            });
                        };
                        img.onerror = (err) => reject(err);
                    });
                });

                Promise.all(loadedImages)
                    .then((images) => {
                        setBackgroundList(images);
                    })
                    .catch((error) => {
                        console.error("Error loading images:", error);
                    });
            }
        };

        loadImages();
    }, [selectedPhotos, myBackgrounds]);

    useEffect(() => {
        if (frameSize.width === "" || frameSize.height === "") return;

        const loadImages = () => {
            const element = document.querySelector('.image');
            if (element) {
                const targetWidth = frameSize.width;
                const targetHeight = frameSize.height;

                const loadedImages = selectedLayout.map((imageUrl) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.crossOrigin = 'Anonymous';
                        img.src = imageUrl;

                        img.onload = () => {
                            const aspectRatio = img.width / img.height;

                            let width, height;
                            if (aspectRatio > 1) {
                                width = targetWidth;
                                height = targetWidth / aspectRatio;
                            } else {
                                height = targetHeight;
                                width = targetHeight * aspectRatio;
                            }

                            setWidth(width);
                            setHeight(height);

                            resolve({
                                img,
                                width,
                                height
                            });
                        };
                        img.onerror = (err) => reject(err);
                    });
                });

                Promise.all(loadedImages)
                    .then((images) => {
                        setLayoutList(images);
                    })
                    .catch((error) => {
                        console.error("Error loading images:", error);
                    });
            }
        };

        loadImages();
    }, [selectedLayout]);
    const getCrop = (image, newSize) => {
            const aspectRatio = newSize.width / newSize.height;
            const imageRatio = image.width / image.height;

            let newWidth = image.width;
            let newHeight = image.height;
            let x = 0;
            let y = 0;

            if (imageRatio > aspectRatio) {
                newWidth = image.height * aspectRatio;
                x = (image.width - newWidth) / 2;
            } else {
                newHeight = image.width / aspectRatio;
                y = (image.height - newHeight) / 2;
            }

            return {
                x: x,
                y: y,
                width: newWidth,
                height: newHeight
            };
        };

    const showKonvaImgLayout =useCallback( (selectedFrame, width, height, imgTag, ratio) => {
    
        if (selectedFrame === "3-cutx2") {
            const calcedHeight = height / 5.3;
            const calcedWidth = calcedHeight * 1.02;
            const x11 = 17;
            const x12 = calcedWidth + x11 + 10;
            const y1 = 18;
            const crop1 = getCrop(
                { width: imgTag[0].width, height: imgTag[0].height },
                { width: calcedWidth, height: calcedHeight }
            );
            return imgTag.length === 0 ? <></> : (
                <>
                    <KonvaImage
                        crop={{
                            x: crop1.x,
                            y: crop1.y,
                            width: crop1.width - crop1.x,
                            height: crop1.height
                        }}
                        width={calcedWidth * 2 + 10}
                        height={calcedHeight}
                        x={x11}
                        y={y1}
                        image={imgTag[0]}
                    />
                    {chunkArray(imgTag.slice(1), 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = calcedHeight + y1 + 10 + rowIndex * (calcedHeight + 10);
                            const crop = getCrop(
                                { width: tag.width, height: tag.height },
                                { width: calcedWidth, height: calcedHeight }
                            );
                            return (
                                <KonvaImage
                                    crop={{
                                        x: crop.x,
                                        y: crop.y,
                                        width: crop.width - crop.x,
                                        height: crop.height
                                    }}
                                    width={calcedWidth}
                                    height={calcedHeight}
                                    x={x}
                                    y={y}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                </>
            );
        } else if (selectedFrame === "5-cutx2") {
            const calcedWidth = width / 2 - 22;
            const calcedHeight = height / 2 - 30;
            const x11 = 17;
            const x12 = calcedWidth + x11 + 10;
            const y1 = 18;

            return imgTag.length === 0 ? <></> : (
                <>
                    {chunkArray(imgTag.slice(0, 4), 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = y1 + rowIndex * (calcedHeight + 10);
                            return (
                                <KonvaImage
                                    width={calcedWidth}
                                    height={calcedHeight}
                                    x={x}
                                    y={y}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                    <KonvaImage
                        width={calcedWidth * 2 + 10}
                        height={calcedHeight}
                        x={x11}
                        y={y1 + 2 * (calcedHeight + 10)}
                        image={imgTag[4]}
                    />
                </>
            );
        }
        else if (selectedFrame === "Stripx2") {
            const calcedHeight = height / 5.3;
            const calcedWidth = calcedHeight * 1.47;

            const x11 = 22;
            const x12 = calcedWidth + x11 + 22;
            const y1 = 40;

            return imgTag.length === 0 ? <></> : (
                <>
                    {chunkArray(imgTag, 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = y1 + rowIndex * (calcedHeight + 22);
                            const crop = getCrop(
                                { width: tag.width, height: tag.height },
                                { width: calcedWidth, height: calcedHeight }
                            );
                            return (
                                <KonvaImage
                                    crop={{
                                        x: crop.x,
                                        y: crop.y,
                                        width: crop.width - crop.x,
                                        height: crop.height
                                    }}
                                    width={calcedWidth * ratio}
                                    height={calcedHeight * ratio}
                                    x={x * ratio}
                                    y={y * ratio}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                </>
            );
        }

        if (selectedFrame === "2cut-x2") {
            const calcedWidth = width / 2.3;
            const calcedHeight = calcedWidth * 1.13;
            const x11 = 20;
            const x12 = calcedWidth + x11 + 20;
            const y1 = 40;

            return imgTag.length === 0 ? <></> :(
                <>
                    {chunkArray(imgTag, 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = y1 + rowIndex * (calcedHeight + 12);
                            const crop = getCrop(
                                { width: tag.width, height: tag.height },
                                { width: calcedWidth, height: calcedHeight }
                            );
                            return (
                                <KonvaImage
                                    crop={{
                                        x: crop.x,
                                        y: crop.y,
                                        width: crop.width - 0.1*crop.x,
                                        height: crop.height
                                    }}
                                    width={calcedWidth * ratio}
                                    height={calcedHeight * ratio}
                                    x={x * ratio}
                                    y={y * ratio}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                </>
            );
        }
        else if (selectedFrame === "4-cutx2") {
            const calcedHeight = height / 2.4;
            const calcedWidth = calcedHeight * 1.33;
            const x11 = 50;
            const x12 = calcedWidth + x11 + 30;
            const y1 = 22;

            return imgTag.length === 0 ? <></> : (
                <>
                    {chunkArray(imgTag, 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = y1 + rowIndex * (calcedHeight + 12);
                            const crop = getCrop(
                                { width: tag.width, height: tag.height },
                                { width: calcedWidth, height: calcedHeight }
                            );
                            return (
                                <KonvaImage
                                crop={{
                                    x: crop.x,
                                    y: crop.y,
                                    width: crop.width - 0.2*crop.x,
                                    height: crop.height
                                }}
                                    width={calcedWidth * ratio}
                                    height={calcedHeight * ratio}
                                    x={x * ratio}
                                    y={y * ratio}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                </>
            );

        }
        else {
            const calcedWidth = (width / 2.4)*1.02;
            const calcedHeight = width / 2.4;
            const x11 = 16;
            const x12 = calcedWidth + x11 + 20;
            const y1 = 22;

            return imgTag.length === 0 ? <></> : (
                <>
                    {chunkArray(imgTag, 2).map((row, rowIndex) => (
                        row.map((tag, photoIndex) => {
                            const x = photoIndex === 0 ? x11 : x12;
                            const y = y1 + rowIndex * (calcedHeight + 12);
                            const crop = getCrop(
                                { width: tag.width, height: tag.height },
                                { width: calcedWidth, height: calcedHeight }
                            );
                            return (
                                <KonvaImage
                                crop={{
                                    x: crop.x,
                                    y: crop.y,
                                    width: crop.width -0.3* crop.x,
                                    height: crop.height- crop.y
                                }}
                                    width={calcedWidth * ratio}
                                    height={calcedHeight * ratio}
                                    x={x * ratio}
                                    y={y * ratio}
                                    image={tag}
                                />
                            );
                        })
                    ))}
                </>
            );
        }
    },[selectedFrame,frameSize,tempImage]);

    useEffect(() => {
        const smallRatio = 0.8;
        const largeRatio = 1.45;
        if (selectedFrame === "6-cutx2") {
            setFrameSize({ width: 1920 * 1 / 6, height: 2900 * 1 / 6 });
        }
        else if (selectedFrame === "Stripx2") {
            setFrameSize({ width: 257.79 * largeRatio, height: 384 * largeRatio });
        }
        else if (selectedFrame === "2cut-x2") {
            setFrameSize({ width: 560 * smallRatio, height: 384 * smallRatio });
        }
        else {
            setFrameSize({ width: 576 * smallRatio, height: 384 * smallRatio });
        }

    }, [
        selectedFrame
    ]);

    const getKonvaClassName = (selectedFrame) => {
        if (selectedFrame === "6-cutx2" || selectedFrame === "Stripx2") {
            return "konva-vertical-image";
        } else {
            return "konva-horizontal-image";
        }
    };
    const updateStickerSize = (id, newWidth) => {
        setImages((prevImages) =>
            prevImages.map((imageList, index) =>
                imageList.map((image) =>
                    image.id === id ? { ...image, width: newWidth } : image
                )
            )
        );

        setStickerImgs((prevImages) =>
            prevImages.map((imageList, index) =>
                imageList.map((image) =>
                    image.id === id ? { ...image, width: newWidth * 3 } : image // UI용 스티커 크기의 3배로 설정
                )
            )
        );
    };
// 670번째 줄
const updateStickerPositionAndSize = (index, newX, newY, newWidth, newHeight) => {
    setImages((currentImages) => {
        const newImages = [...currentImages];
        newImages[bgIdx][index] = {
            ...newImages[bgIdx][index],
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
        };
        return newImages;
    });

    setStickerImgs((currentImages) => {
        const newImages = [...currentImages];
        newImages[bgIdx][index] = {
            ...newImages[bgIdx][index],
            x: newX * 3,
            y: newY * 3,
            width: newWidth * 3,
            height: newHeight * 3,
        };
        return newImages;
    });
};

    const getCarouselStyle=(selFrame)=>{
        //  return "77%"
        if (selFrame==="Stripx2") {
            return {height:"78%",bottom:"16%",right:"12%"}
        }
        else if(selFrame==="6-cutx2")
            {
                return {
                     transform:"scale(1.1)",
                     height:"70%",bottom:"18%",right:"8%"}
            }
            else if(selFrame==="2cut-x2"){
                return {
                    transform:"scale(1.4)",
                    width:"48%",
                    height:"65%",bottom:"18%",right:"20%"}
            }
            else if(selFrame === "4-cutx2"){
                return { transform:"scale(1.4)",
                width:"48%",
                height:"65%",bottom:"18%",right:"20%"}
            }
          
    }
    const playPrintAudio = async() => {
        const res=await getAudio({file_name:"print.wav"})
        console.log("audio :",res)
          }

    const playAudio = async() => {
        const res=await getAudio({file_name:"add_emoji.wav"})
        console.log("audio :",res)
          }
     
    useEffect(()=>{
        playAudio()
    },[])

// useEffect(()=>{
//     if (!playAddEmojiSound) {
//         playAudio()
//         playAddEmojiSound=true;
//     }
//     console.log("play audio in useEffect",playAddEmojiSound)
// },[])
// useLayoutEffect(()=>{
//     if (!playAddEmojiSound) {
//         playAudio()
//         playAddEmojiSound=true;
//     }
//     console.log("play audio in useEffect",playAddEmojiSound)
// },[])
// useEffect(()=>{
//     const timer=setTimeout(()=>{
//         playAudio()
//     },100
// )
// return ()=>clearTimeout(timer)
// },[])
    return (
        <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
            {/* 프린트용 */}
            <div className='print'>
                <Stage
                    width={frameSize.width * 3}
                    height={frameSize.height * 3}
                    scale={{ x: 1, y: 1 }}
                    x={0}
                    y={0}
                    onClick={handleCanvasClick}
                    onTap={handleCanvasClick}
                    className={getKonvaClassName(selectedFrame)}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    ref={printRefs[bgIdx]}
                >
                    <Layer>
                        {backgroundList[bgIdx] && (
                            <KonvaImage
                                image={backgroundList[bgIdx].img}
                                width={frameSize.width * 3}
                                height={frameSize.height * 3 - 20}
                                x={0}
                                y={10}
                            />
                        )}
                        {tempImage && showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage, 3)}
                    </Layer>
                    <Layer>
                        {layoutList[bgIdx] && (
                            <KonvaImage
                                image={layoutList[bgIdx].img}
                                width={frameSize.width * 3}
                                height={frameSize.height * 3 - 20}
                                x={0}
                                y={10}
                            />
                        )}
                    </Layer>
                    <Layer>
                        {stickerImgs[bgIdx] && stickerImgs[bgIdx].map((image, i) => (
                            <StickerItem
                                isStickerDrag={stickerDrag}
                                isSelected={isSel}
                                setStickerDrag={setStickerDrag}
                                // onTransform={() => console.log("이미지 리사이징 중")}
                                // onSelect={() => {
                                //     setIsSel(p => !p);
                                // }}
                                // onDelete={() => {
                                //     const newImages = [...stickerImgs];
                                //     newImages.splice(i, 1);
                                //     setStickerImgs(newImages);
                                // }}
                                // onDragEnd={(event) => {
                                //     image.x = event.target.x();
                                //     image.y = event.target.y();
                                // }}
                                // onChange={(x, y, width, height) => {
                                // }}
                                key={i}
                                image={image}
                                shapeProps={image}
                            />
                        ))}
                    </Layer>
                </Stage>
            </div>
            <div className="left-sticker">
                <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
                <div className='v-carousel-container' ref={carouselRef}
                
                style={
                    getCarouselStyle(selectedFrame)
                }
                >
                    <div className='v-carousel-images'>
                        {myBackgrounds.map((src, index) => (
                            <div className='image' key={index}>
                                <Stage
                                    width={frameSize.width}
                                    height={frameSize.height}
                                    scale={{ x: 1, y: 1 }}
                                    onClick={handleCanvasClick}
                                    onTap={handleCanvasClick}
                                    className={getKonvaClassName(selectedFrame)}
                                    onMouseDown={checkDeselect}
                                    onTouchStart={checkDeselect}
                                    ref={stageRefs[index]}
                                >
                                    <Layer>
                                        {backgroundList[bgIdx] && (
                                            <KonvaImage
                                                image={backgroundList[bgIdx].img}
                                                width={frameSize.width}
                                                height={frameSize.height}
                                                x={0}
                                                y={0}
                                            />
                                        )}
                                        {tempImage && showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage, 1)}
                                    </Layer>
                                    <Layer>
                                        {layoutList[bgIdx] && (
                                            <KonvaImage
                                                image={layoutList[bgIdx].img}
                                                width={frameSize.width}
                                                height={frameSize.height}
                                                x={0}
                                                y={0}
                                            />
                                        )}
                                    </Layer>
                                    <Layer>
                                        {images[bgIdx] && images[bgIdx].map((image, i) => (
                                            // 1627번째 줄
<StickerItem
    isStickerDrag={stickerDrag}
    isSelected={isSel}
    setStickerDrag={setStickerDrag}
    onTransform={(x, y, width, height) => {
        updateStickerPositionAndSize(i, x, y, width, height);
    }}
    onSelect={() => {
        setIsSel(p => !p);
    }}
    onDelete={() => {
        const newPrintImages = [...stickerImgs];
        newPrintImages[bgIdx].splice(i, 1);
        setStickerImgs(newPrintImages);

        const newUiImages = [...images];
        newUiImages[bgIdx].splice(i, 1);
        setImages(newUiImages);
    }}
    onDragEnd={(event) => {
        const newX = event.target.x();
        const newY = event.target.y();
        updateStickerPositionAndSize(i, newX, newY, image.width, image.height);
    }}
    key={i}
    image={image}
    shapeProps={image}
/>

                                        ))}
                                    </Layer>
                                </Stage>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="middle-sticker"
                draggable={true}
                onDragStart={onDragStart}
                onDrag={() => {
                }}
                onDragEnd={onDragEnd}
                style={{
                    backgroundImage: `url(${sticker_frame})`
                }}>
                {myStickers.map((group, index) => (
                    <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
                        {group.map((mySticker, photoIndex) => (
                            <div
                                key={photoIndex}
                                className="sticker"
                                onClick={() => {
                                    const element = document.querySelector('.image');
                                    const width = element.offsetWidth;
                                    const height = element.offsetHeight;
                                    addStickerToPanel({
                                        bgIdx: bgIdx,
                                        src: mySticker.photo,
                                        width: 100,
                                        ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200)
                                    });
                                }}
                            >
                                <img className="sticker-image"
                                    alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
                <div className="sticker-category">
                    <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
                    <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
                    <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
                    <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
                </div>
                <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
            </div>
        </div>
    );
}

export default Sticker;