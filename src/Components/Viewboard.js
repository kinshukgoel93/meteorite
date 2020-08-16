import React,{useEffect} from "react";
import Map from "./Map";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeoPoints, fetchfilteredData } from "../Redux/action";
import {
  getMapDataSelector,
  isMapLoadingSelector,
  filterMapDataSelector,
} from "../Redux/selectors";
import YearRangePicker from "./YearRange/YearRangePicker";
import './ViewBoard.css'

export default function Viewboard() {
  const dispatch = useDispatch();
  const mapData = useSelector(getMapDataSelector);
  const filteredData = useSelector(filterMapDataSelector);
  const isMapLoading = useSelector(isMapLoadingSelector);

  useEffect(() => {
    dispatch(fetchGeoPoints());
  }, [dispatch]);

  if (isMapLoading) {
    return <p> Loading... </p>;
  }

  

  return (
    <div className='container'>
      <YearRangePicker
        onSubmit={(e) => {
          dispatch(fetchfilteredData(mapData || [], e.from, e.to));
        }}
      />
      <Map data={filteredData || mapData} />
    </div>
  );
}