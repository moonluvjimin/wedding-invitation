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
            <b>한강버스 선착장</b> 하차
            <br /> 공항버스 <b>6007</b>
                      <br /> 직행버스 <b>7007-1</b>
          <br /> <b>한강버스 선착장</b>
            <br />
            이하 위와 동일합니다.
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
            <br /> 주의! 영등포지사 X <b>전력사업처 X </b> 문래동 X
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
