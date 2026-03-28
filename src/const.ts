import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-05-09 14:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [5]


export const LOCATION = "서울 영등포구 여의동로7길 5 한전 남서울본부"
export const LOCATION_ADDRESS = "서울시 영등포구 여의동로7길 5, 9층 여의나루 홀"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION


// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.9304619, 37.5276925]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 13299793

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 1724648401

export const BRIDE_FULLNAME = "석지민"
export const BRIDE_FIRSTNAME = "지민"
export const BRIDE_TITLE = "차녀"
export const BRIDE_FATHER = "석준수"
export const BRIDE_MOTHER = "김효진"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-8239-6958",
    account: "카카오뱅크 3333-07-6006186",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-6413-6958",
    account: "",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-3928-6958",
    account: "",
  },
]

export const GROOM_FULLNAME = "문성환"
export const GROOM_FIRSTNAME = "성환"
export const GROOM_TITLE = "차남"
export const GROOM_FATHER = "문병도"
export const GROOM_MOTHER = "이영자"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-3351-8170",
    account: "하나은행 375-910112-80707",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-4585-8170",
    account: "경남은행 626-21-0061110",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-9122-5455",
    account: " ",
  },
]
