import _ from "lodash";

function filterUtil(data, from = "", to = "") {
  const filteredData = _.filter(data, (item) => {
    const year = (item.year || "").slice(0, 4);
    var dt=  _.inRange(year, from || -Infinity, to || Infinity);
    return dt;
  });
  return filteredData;
}

export default filterUtil;
