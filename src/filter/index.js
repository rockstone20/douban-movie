const Genres = arr => {
  let len = arr.length;
  let name = '';
  for (let i=0; i<len; i++) {
    name += (arr[i].name ? arr[i].name : arr[i]) + (len===i+1 && len > 1 ? '' : ' / ')
  }
  return name
}

export { Genres }
