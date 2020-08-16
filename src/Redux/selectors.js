export const getMapDataSelector = state => state.map.geoPoints || []
export const filterMapDataSelector = state =>state.map.filteredData || null
export const isMapLoadingSelector = state => state.map.isLoading