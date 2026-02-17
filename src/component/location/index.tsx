import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 5호선 <b>여의나루역 1번출구</b> 나와서
            <br />
            → 직진
            <br />
            → 도보로 50m 이동
            <br />
            좌측 회색 건물입니다.
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 261, 360, 461, 662, 753
            <br />
            - 지선(초록): 5633, 5634, 5713, 6623
            <br />
            -직행: 7007-1, -공항: 6007
            <br />
            여의나무역 1번, 한강버스 선착장
            <b> </b>
            <br /> 창원 發 단체버스 <b></b>
                      <br /> 창원시 충혼로 29 충혼탑 주차장 <b>오전 09:00 승차</b>
          <br /> 부산 출발 시 <b></b>08:00 승차
            <br /> 
            돌아가는 버스는 도착 지점에서 오후 16:30 분 출발
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>한전 남서울본부 </b> 검색 → 여의도동입니다
            <br /> <b> </b>
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 바로앞 건물)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 안전한 여행 되세요.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
