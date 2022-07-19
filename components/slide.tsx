import React, { useEffect, useState } from "react";
interface IProps {
  items: React.ReactNode[]; //슬라이드들이 담긴 배열
  initialSpot?: number; //초기 위치 (슬라이드의 시작점을 가리킴)
  itemWidth?: number; //슬라이드 하나의 폭
  slideGap?: number; // 슬라이드간의 갭
  slideMovingUnit?: number; //한번 이동 시 움직일 거리
  totalViewWidth?: number; //화면에 보여줄 전체 item의 폭
  autoMoving?: boolean; //자동 전환기능 사용유무
  autoInterval?: number; //자동 전환기능 사용 시 시간간격
}

function Slide({
  items,
  initialSpot = 0,
  itemWidth = 400,
  slideGap = 14,
  slideMovingUnit = 300,
  totalViewWidth = 700,
  autoMoving = false,
  autoInterval = 4000,
}: IProps) {
  const [currentSpot, setCurrentSpot] = useState(initialSpot); //현재 화면에 보이는 슬라이드의 시작점
  let autoMovingDirection: "forward" | "backward" = "forward";

  const slideWidth = itemWidth * items.length + (items.length - 1) * slideGap; // 슬라이드 내부 컨텐츠의 전체 길이

  let hiddenedSlideWidth = slideWidth - totalViewWidth; //슬라이드 내부 컨텐츠 현재 화면에 보이는 길이를 빼고 남아있는 슬라이드의 길이를 구한다.

  let slideEnd = currentSpot - (hiddenedSlideWidth - Math.abs(currentSpot));

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    // if (autoMoving && _isMounted) {
    if (autoMoving) {
      interval = setInterval(() => {
        if (autoMovingDirection === "forward") {
          setCurrentSpot((prev) => {
            if (hiddenedSlideWidth - Math.abs(prev) < slideMovingUnit) {
              //남아있는 슬라이드의 길이에서 현재 슬라이드의 위치값을 뺀 값이 한 번에 움직여야 하는 값보다 작으면
              autoMovingDirection = "backward";
              return prev - (hiddenedSlideWidth - Math.abs(prev)); //남은 길이만큼만 이동
            } else {
              //남아있는 슬라이드의 길이가 한 번에 움직여야 하는 값 보다 크면
              return prev - slideMovingUnit; //한번에 움직여야 하는 값 만큼 빼줌
            }
          });
        } else {
          setCurrentSpot((prev) => {
            if (Math.abs(prev) < slideMovingUnit) {
              //슬라이드 왼쪽으로 남은 값이 한 번에 이동하는 값보다 작으면
              autoMovingDirection = "forward";
              return 0; //0까지만 이동
            } else {
              //그 외의 경우
              return prev + slideMovingUnit; //현재 위치에서 한 번에 이동해야 하는 값만큼 이동
            }
          });
        }
      }, autoInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoMoving, autoInterval]);

  const handleClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setCurrentSpot((prev) => {
      if (Math.abs(prev) < slideMovingUnit) {
        //슬라이드 왼쪽으로 남은 값이 한 번에 이동하는 값보다 작으면
        return 0; //0까지만 이동
      } else {
        //그 외의 경우
        return prev + slideMovingUnit; //현재 위치에서 한 번에 이동해야 하는 값만큼 이동
      }
    });
  };
  const handleClickNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setCurrentSpot((prev) => {
      if (hiddenedSlideWidth - Math.abs(prev) < slideMovingUnit) {
        //남아있는 슬라이드의 길이에서 현재 슬라이드의 위치값을 뺀 값이 한 번에 움직여야 하는 값보다 작으면
        return prev - (hiddenedSlideWidth - Math.abs(prev)); //남은 길이만큼만 이동
      } else {
        //남아있는 슬라이드의 길이가 한 번에 움직여야 하는 값 보다 크면
        return prev - slideMovingUnit; //한번에 움직여야 하는 값 만큼 빼줌
      }
    });
  };

  return (
    <div className="flex items-center justify-center my-5">
      <button
        disabled={!currentSpot}
        onClick={handleClickPrev}
        className="border-solid border-r-[1rem] border-r-gray-300 hover:border-r-gray-900 border-l-0 border-b-[0.7rem] border-b-transparent border-t-[0.7rem] border-t-transparent transition-all mr-1"
      ></button>
      <ul
        style={{
          overflow: "hidden",
          width: `${totalViewWidth}px`,
          fontSize: 0, //폰트적용으로 인한 여백을 없애기 위해 font-size : 0 적용
        }}
      >
        <div
          style={{
            transform: `translateX(${currentSpot}px)`,
            transition: "transform 0.5s",
            display: "flex",
            gap: `${slideGap}px`,
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                width: `${itemWidth}px`,
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              {item}
            </li>
          ))}
        </div>
      </ul>
      <button
        disabled={currentSpot === slideEnd}
        onClick={handleClickNext}
        className="border-solid border-l-[1rem] border-l-gray-300 hover:border-l-gray-900 border-r-0 border-b-[0.7rem] border-b-transparent border-t-[0.7rem] border-t-transparent transition-all ml-1"
      ></button>
    </div>
  );
}

export default Slide;
