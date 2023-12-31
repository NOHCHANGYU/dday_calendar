// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
	// 기존에 모달이 있다면 제거합니다.
	const existingModal = document.querySelector('.modal');
	if (existingModal) {
		existingModal.remove();
	}

	// 모달 요소를 생성합니다.
	const modal = document.createElement('div');
	modal.className = 'modal hidden';

	// 모달 내용을 담는 컨테이너를 생성합니다.
	const modalContent = document.createElement('div');
	modalContent.className = 'modal-content zoomIn';

	// 이미지를 표시할 요소를 생성합니다.
	const image = document.createElement('div');
	image.style.backgroundImage = `url(${imageUrl})`;
	image.alt = 'Door Image';
	image.style.width = '100%';
	image.style.height = '211px';

	// 텍스트를 표시할 요소를 생성합니다.
	const textElement = document.createElement('p');
	textElement.textContent = text;

	// 모달 컨텐트에 이미지와 텍스트를 추가합니다.
	modalContent.appendChild(image);
	modalContent.appendChild(textElement);

	// 모달에 모달 컨텐트를 추가합니다.
	modal.appendChild(modalContent);

	// 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
	modal.addEventListener('click', () => {
		modal.remove(); // 모달을 문서에서 제거합니다.
	});

	// 문서에 모달을 추가합니다.
	document.body.appendChild(modal);
	// 모달을 표시합니다.
	setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
	{ number: 1, message: '행복의 계절, 모두가 함께하는 24일!' },
	{ number: 2, message: '이 12월, 행복한 순간이 우리를 감싸네요.' },
	{ number: 3, message: '다 같이 즐겁게 보내는 24일, 행복이 가득합니다!' },
	{ number: 4, message: '12월의 특별함을 모두와 함께 나누어요.' },
	{ number: 5, message: '각자의 작은 행복이 모여 만드는 특별한 24일!' },
	{ number: 6, message: '행복이라는 이름의 캘린더, 모두에게 열려 있어요.' },
	{ number: 7, message: '함께 하는 즐거움, 24일 동안 계속되길 바랍니다.' },
	{ number: 8, message: '12월은 행복한 순간들이 가득한 달이에요.' },
	{ number: 9, message: '우리 모두에게 찾아온 특별한 행복의 계절!' },
	{ number: 10, message: '매일 매일이 행복으로 가득찬 24일이 되길.' },
	{ number: 11, message: '12월, 행복이 가득한 당신과 나누는 소중한 시간.' },
	{ number: 12, message: '다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요.' },
	{ number: 13, message: '행복의 파도가 모두에게 찾아오는 특별한 24일!' },
	{ number: 14, message: '12월, 각자의 작은 행복이 모여 큰 기쁨이 되길.' },
	{ number: 15, message: '모두에게 행복이 넘치는 24일을 기대해봐요.' },
	{ number: 16, message: '12월의 특별한 순간, 행복이 퍼져나가길.' },
	{ number: 17, message: '모두에게 행복한 24일이 될 것을 기대합니다!' },
	{ number: 18, message: '12월, 행복이 가득찬 마음으로 채워져 있는 시간.' },
	{ number: 19, message: '다양한 행복이 모여 하나로 뭉쳐지는 24일!' },
	{ number: 20, message: '12월, 당신과 나누는 특별한 행복의 순간들.' },
	{ number: 21, message: '모두에게 다가오는 24일, 행복이 함께하기를!' },
	{ number: 22, message: '12월의 행복한 기운이 모두를 감싸네요.' },
	{ number: 23, message: '다 함께하는 24일, 행복한 느낌이 가득할 거예요.' },
	{ number: 24, message: '12월, 모두에게 기쁨과 행복이 넘치는 달이에요.' },
];

console.log(navigator.share);

// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
	try {
		// Check if the Web Share API is available
		if (!navigator.share) {
			alert('Web Share API is not available on your browser.');
			return;
		}

		// Your share data
		const shareData = {
			title: 'Web Share Example',
			text: 'Check out this web share example!',
			url: window.location.href,
		};

		// Invoke the share dialog
		await navigator.share(shareData);
		console.log('Data was shared successfully');
	} catch (err) {
		console.error('Share failed:', err.message);
	}
});

// 배경음 실행 관련
document.addEventListener('DOMContentLoaded', function () {
	const soundElement = document.querySelector('.sound');
	const stopElement = document.querySelector('.stop');
	const bgm = document.querySelector('.bgm');

	soundElement.addEventListener('click', function () {
		bgm.play();
	});

	stopElement.addEventListener('click', function () {
		bgm.pause();
		bgm.currentTime = 0;
	});
});

// 목표 날짜 설정 (예시: 2023년 1월 1일)
const targetDate = new Date('2023-12-25');

function updateCountdown() {
	// 현재 한국 시간을 얻어오기
	const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

	// 남은 시간 계산
	const timeRemaining = targetDate - now;

	// 시간, 분, 초 계산
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	// 결과를 HTML에 업데이트
	const countdownElement = document.getElementById('countdown');
	countdownElement.style.color = '#FF9EA9';
	countdownElement.innerHTML = `
      <span>D-${days} ${hours}시간${minutes}분${seconds}초</span>`;
}
// 페이지 로드 시에도 업데이트 수행
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

// 날짜 기준 카드 오픈 기능
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
	door.addEventListener('click', () => {
		// 현재 한국 시간을 얻어오기
		const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

		// 각 날짜에 해당하는 날짜를 계산
		const openDate = new Date(2023, 11, index + 1); // 2023년 12월 1일부터 시작

		// 현재 날짜가 열 수 있는 날짜 이후인지 확인
		if (now.getTime() > openDate.getTime()) {
			// 여기에 모달을 열거나 특정 동작을 수행하는 코드 추가

			// 상위 div의 class 번호를 찾아서 image url에 사용합니다
			const imageUrl = `image/card/card-${index + 1}.png`;

			// 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
			const doorDiv = document.querySelector(`.day-${index + 1}`);
			const backDiv = doorDiv.querySelector(`.back`);

			const style = window.getComputedStyle(backDiv);
			const pTag = backDiv.querySelector('p');
			const text = modalMessageList[index]['message'];

			// showModal 함수를 호출하여 모달을 표시합니다.
			showModal(imageUrl, text);
			// alert('이벤트 캘린더를 엽니다.');
		} else {
			// 현재 날짜가 열 수 있는 날짜보다 이전인 경우 몇 일 후에 열 수 있다는 메시지를 표시
			const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
			console.log(openDate, now, daysRemaining);
			alert(`이 카드는 ${daysRemaining}일 후에 열 수 있어요!`);
		}
	});
});
